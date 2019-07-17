import { Binary, BinaryOperator } from "./Binary";
import { Unary, UnaryOperator } from "./Unary";
import { Function1 } from "./Function1";
import { Function2 } from "./Function2";
import { Value, ValueType } from "./Value";
import { BaseExpression } from "./BaseExpression";

import { XCalcVisitor } from "../ANTLR/XCalcVisitor";
import {
  AssignmentContext,
  EqualityContext,
  AtomContext,
  ExpExprContext,
  FuncContext,
  GroupContext,
  EquationContext,
  ExpressionContext,
  MultExprContext,
  //RelOpContext,
  SignedAtomContext,
  TermContext,
  XcalcContext
} from "../ANTLR/XCalcParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { RuleContext } from "antlr4ts";

export class InstantiationVisitor
  extends AbstractParseTreeVisitor<BaseExpression>
  implements XCalcVisitor<BaseExpression> {
  protected defaultResult(): BaseExpression {
    throw new Error(
      "Instantiation Visitor Reached defaultResult()... was not able to parse context."
    );
  }

  public AssignedVariables: Map<string, number> = new Map();
  public AllValues: Value[] = [];

  public visitXCalc(ctx: XcalcContext): BaseExpression {
    let value = ctx.expression(); // || ctx.equation();
    return this.visit(value!);
  }
  public visitEquation(ctx: EquationContext): BaseExpression {
    throw new Error("visitEquation not implemented");
  }
  public visitAssignment(ctx: AssignmentContext): BaseExpression {
    let children = ctx.expression().map(x => this.visit(x));
    if (children.length != 2) {
      throw new Error(
        `Entered visitAssignment, but #Expressions != 2, ${
          children.length
        }. \n${ctx.text}`
      );
    }
    //register assigned variables:
    let l = children[0] as Value;
    let r = children[1] as Value;
    if (l && r) {
      if (
        l.valueType == ValueType.Number &&
        r.valueType == ValueType.Variable
      ) {
        this.AssignedVariables.set(r.value.toString(), Number(l.value));
      } else if (
        r.valueType == ValueType.Number &&
        l.valueType == ValueType.Variable
      ) {
        this.AssignedVariables.set(l.value.toString(), Number(r.value));
      }
    }

    return new Binary(children[0], children[1], BinaryOperator.AssignTo);
  }
  public visitEquality(ctx: EqualityContext): BaseExpression {
    let children = ctx.expression().map(x => this.visit(x));
    let relOp = ctx.relOp()[0];
    if (children.length != 2) {
      throw new Error(
        `Entered visitEquality, but #Expressions != 2, ${children.length}. \n${
          ctx.text
        }`
      );
    }
    let operator = BinaryOperator.None;
    if (relOp.EQ) operator = BinaryOperator.EqualTo;
    else if (relOp.GT) operator = BinaryOperator.GreaterThan;
    else if (relOp.GTE) operator = BinaryOperator.GreaterThanOrEqual;
    else if (relOp.LT) operator = BinaryOperator.LessThan;
    else if (relOp.LTE) operator = BinaryOperator.LessThanOrEqual;
    else if (relOp.NE) operator = BinaryOperator.NotEqual;
    //else throw new Error(`Fell through operator detection in visitEquality`);

    return new Binary(children[0], children[1], operator);
  }
  public visitExpression(ctx: ExpressionContext): BaseExpression {
    let children = ctx.multExpr().map(x => this.visit(x));
    this._checkChildCount(this.visitExpression, ctx, children.length);
    if (children.length == 1) return children[0];

    let operator = BinaryOperator.None;
    if (ctx.PLUS().length > 0) operator = BinaryOperator.Add;
    else if (ctx.MINUS().length > 0) operator = BinaryOperator.Subtract;

    return new Binary(children[0], children[1], operator);
  }
  public visitMultExpr(ctx: MultExprContext): BaseExpression {
    let children = ctx.expExpr().map(x => this.visit(x));
    this._checkChildCount(this.visitMultExpr, ctx, children.length);
    if (children.length == 1) return children[0];

    let operator: BinaryOperator = BinaryOperator.None;
    if (ctx.DIV().length > 0) operator = BinaryOperator.Divide;
    else if (ctx.MODULO().length > 0) operator = BinaryOperator.Modulo;
    else if (ctx.MULT().length > 0) operator = BinaryOperator.Multiply;

    return new Binary(children[0], children[1], operator);
  }
  public visitExpExpr(ctx: ExpExprContext): BaseExpression {
    let children = ctx.signedAtom().map(x => this.visit(x));
    this._checkChildCount(this.visitExpExpr, ctx, children.length);
    if (children.length == 1) return children[0];

    let operator: BinaryOperator = BinaryOperator.None;
    if (ctx.POWER().length > 0) operator = BinaryOperator.Power;
    return new Binary(children[0], children[1], operator);
  }
  public visitSignedAtom(ctx: SignedAtomContext): BaseExpression {
    let v = this.visit(ctx.signedAtom()! || ctx.atom()! || ctx.func()!);
    if (ctx.MINUS()) {
      v = new Binary(new Value(-1), v, BinaryOperator.Multiply);
    }
    return v;
  }
  public visitAtom(ctx: AtomContext): BaseExpression {
    return this.visit(ctx.group()! || ctx.term()!);
  }
  public visitTerm(ctx: TermContext): BaseExpression {
    const term = ctx.NUMBER() || ctx.ID() || ctx.CONSTANT();
    const content = term!.text;
    if (!content)
      console.error(`visitTerm resulted in empty text content. ${term}`);
    let val = new Value(content);
    this.AllValues.push(val);
    return val;
  }
  public visitFunc(ctx: FuncContext): BaseExpression {
    const expressions = ctx.expression();
    const eNum = expressions.length;
    let exp0 = this.visit(expressions[0]);
    this._checkChildCount(this.visitFunc, ctx, eNum);

    if (eNum == 1) {
      return new Function1(exp0, ctx.FN().text);
    }

    return new Function2(exp0, this.visit(expressions[1]), ctx.FN().text);
  }
  public visitGroup(ctx: GroupContext): BaseExpression {
    if (ctx.expression().length > 0) {
      const expression = ctx.expression();
      const expr0 = this.visit(expression[0]);
      if (ctx.ROOT()) {
        if (ctx.AMPERSAND()) {
          return new Binary(
            expr0,
            this.visit(expression[1]),
            BinaryOperator.NthRoot
          );
        }
        return new Function1(expr0, "sqrt");
      } else if (ctx.LBRKT()) return new Unary(expr0, UnaryOperator.Brackets);
      else if (ctx.LPAREN()) {
        return new Unary(expr0, UnaryOperator.Parenthesis);
      } else if (ctx.LCURLY()) return new Unary(expr0, UnaryOperator.Curlies);
    } else if (ctx.signedAtom)
      return new Unary(
        this.visit(ctx.signedAtom()!),
        UnaryOperator.AbsoluteValue
      );
    throw new Error(`Fell through GroupContext ${ctx.text}`);
  }
  /** Verifies count == 1 or 2 */
  private _checkChildCount(fn: Function, ctx: RuleContext, count: number) {
    if (count == 0)
      throw new Error(`${fn.name} Failed (no child nodes) ${ctx.text}`);
    else if (count > 2)
      throw new Error(
        `${
          fn.name
        } has ${count} arguments. Only 1 or 2 args supported. Original  ${
          ctx.text
        }`
      );
  }
}
