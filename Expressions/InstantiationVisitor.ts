import { Binary, BinaryOperator } from "./Binary";
import { Unary, UnaryOperator } from "./Unary";
import { Function1 } from "./Function1";
import { Function2 } from "./Function2";
import { Value, ValueType } from "./Value";
import { BaseExpression } from "./BaseExpression";

import { XCalcVisitor } from "../ANTLR/XCalcVisitor";
import {
  ModuloContext,
  PowerContext,
  ValContext,
  AssignmentContext,
  FunctionContext,
  RootContext,
  MultiplyContext,
  //ImplicitMultiplyContext,
  DivideContext,
  AddContext,
  SubtractContext,
  ParenContext,
  AbsValueContext,
  NegateContext
} from "../ANTLR/XCalcParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";

export class InstantiationVisitor
  extends AbstractParseTreeVisitor<BaseExpression>
  implements XCalcVisitor<BaseExpression> {
  protected defaultResult(): BaseExpression {
    return new Value(undefined);
  }
  private _writeToConsole = false;
  public AssignedVariables: Map<string, number> = new Map();
  public AllValues: Value[] = [];

  public visitModulo(ctx: ModuloContext): BaseExpression {
    var right = this.visit(ctx._right);
    var left = this.visit(ctx._left);
    if (this._writeToConsole)
      console.log(
        `"Modulo Context: [${ctx._left.text}] ^ [${ctx._right.text}]`
      );
    return new Binary(left, right, BinaryOperator.Modulo);
  }

  public visitPower(ctx: PowerContext): BaseExpression {
    var right = this.visit(ctx._right);
    var left = this.visit(ctx._left);
    if (this._writeToConsole)
      console.log(
        `Exponent Context: [${ctx._left.text}] ^ [${ctx._right.text}]`
      );
    return new Binary(left, right, BinaryOperator.Power);
  }
  public visitVal(ctx: ValContext): BaseExpression {
    //console.log($"Val Context: [{ctx.text}]");
    var v = new Value(ctx.text);
    this.AllValues.push(v);
    if (
      v.evaluated != null &&
      (v.evaluated as Value).valueType == ValueType.Number &&
      v.valueType == ValueType.Variable
    )
      this.AssignedVariables.set(
        v.value.toString(),
        (v.evaluated as Value).value
      );
    return v;
  }
  public visitAssignment(ctx: AssignmentContext): BaseExpression {
    if (this._writeToConsole)
      console.log(
        `Assignment Context: [${ctx._left.text}] = [${ctx._right.text}]`
      );
    var left = this.visit(ctx._left);
    var right = this.visit(ctx._right);
    if (left instanceof Value && right instanceof Value) {
      var lVal = left as Value;
      var rVal = right as Value;
      if (
        lVal.valueType == ValueType.Variable &&
        rVal.valueType == ValueType.Number
      )
        this.AssignedVariables.set(lVal.value.toString(), rVal.value);
      else if (
        rVal.valueType == ValueType.Variable &&
        lVal.valueType == ValueType.Number
      )
        this.AssignedVariables.set(rVal.value.toString(), lVal.value);
      //both are variables:
      else {
        this.AssignedVariables.set(rVal.value, lVal.value);
        this.AssignedVariables.set(lVal.value, rVal.value);
      }
    }

    return new Binary(left, right, BinaryOperator.AssignTo);
  }
  public visitFunction(ctx: FunctionContext): BaseExpression {
    var arg = this.visit(ctx._arg);
    let arg2 = null;
    if (ctx._arg2 != null) {
      arg2 = this.visit(ctx._arg2);
      return new Function2(arg, arg2, ctx.func().text);
    }
    if (this._writeToConsole)
      console.log(`Function Context: [${ctx._fn.text}]  [${ctx._arg.text}]`);
    return new Function1(arg, ctx.func().text);
  }
  public visitRoot(ctx: RootContext): BaseExpression {
    var right = this.visit(ctx._right);
    let left = new Value(2) as BaseExpression; //Default to Sqrt
    if (ctx._left != null) left = this.visit(ctx._left);
    if (this._writeToConsole)
      console.log(
        `Root Context: Root-Power:[${left.toString()}]  Value:[${
          ctx._right.text
        }]`
      );
    return new Binary(left, right, BinaryOperator.NthRoot, "\u221a");
  }
  public visitMultiply(ctx: MultiplyContext): BaseExpression {
    var left = this.visit(ctx._left);
    var right = this.visit(ctx._right);
    if (this._writeToConsole)
      console.log(
        `Explicit Multiply: [${ctx._left.text}] ${ctx._op.text} [${
          ctx._right.text
        }]`
      );
    return new Binary(left, right, BinaryOperator.Multiply, ctx._op.text);
  }
  // public visitImplicitMultiply(ctx: ImplicitMultiplyContext): BaseExpression {
  //   var left = this.visit(ctx._left);
  //   var right = this.visit(ctx._right);

  //   var leftIsNumber = BaseExpression.isNumber(left);
  //   var rightIsNumber = BaseExpression.isNumber(right);
  //   var rightAsUnary = right as Unary;
  //   //Case: 2-1 is treated as 2 impl -1 instead of subtract:
  //   if (leftIsNumber && rightIsNumber) {
  //     var lVal = (left as Value).value;
  //     var rVal = (right as Value).value;
  //     if (rVal > 0)
  //       throw new Error(
  //         `Expected Right Value Negative in Implicit Multiply Guard. L:${lVal}, R:${rVal}`
  //       );
  //     return new Binary(left, right, BinaryOperator.Add, "+");
  //   }
  //   //Case a-2 is treated as a * (-2), also for a-b
  //   if (rightIsNumber) {
  //     var rVal = (right as Value).value;
  //     if (rVal < 0) return new Binary(left, right, BinaryOperator.Add);
  //   } else if (rightAsUnary != null) {
  //     if (rightAsUnary.operator == UnaryOperator.Negate)
  //       return new Binary(left, right, BinaryOperator.Add);
  //   }

  //   if (this._writeToConsole)
  //     console.log(
  //       `Implicit Multiply: [${ctx._left.text}] * [${ctx._right.text}]`
  //     );
  //   return new Binary(left, right, BinaryOperator.Multiply, null);
  // }
  public visitDivide(ctx: DivideContext): BaseExpression {
    var left = this.visit(ctx._left);
    var right = this.visit(ctx._right);
    if (this._writeToConsole)
      console.log(`Divide Context: [${ctx._left.text}] / [${ctx._right.text}]`);
    return new Binary(left, right, BinaryOperator.Divide, "/");
  }
  public visitAdd(ctx: AddContext): BaseExpression {
    var left = this.visit(ctx._left);
    var right = this.visit(ctx._right);
    if (this._writeToConsole)
      console.log(`Add: [${ctx._left.text}] + [${ctx._right.text}]`);
    return new Binary(left, right, BinaryOperator.Add, "+");
  }
  public visitSubtract(ctx: SubtractContext): BaseExpression {
    var left = this.visit(ctx._left);
    var right = this.visit(ctx._right);
    if (this._writeToConsole)
      console.log(`Add: [${ctx._left.text}] - [${ctx._right.text}]`);
    return new Binary(left, right, BinaryOperator.Subtract, "-");
  }
  public visitParen(ctx: ParenContext): BaseExpression {
    if (this._writeToConsole) console.log(`Paren Context: [${ctx.text}]`);
    return new Unary(this.visit(ctx.expr()), UnaryOperator.Parenthesis);
  }
  public visitAbsValue(ctx: AbsValueContext): BaseExpression {
    if (this._writeToConsole) console.log(`AbsValue Context: [${ctx.text}]`);
    return new Unary(this.visit(ctx.expr()), UnaryOperator.AbsoluteValue);
  }
  public visitNegate(ctx: NegateContext): BaseExpression {
    if (this._writeToConsole) console.log(`Negate Context: [${ctx.text}]`);
    return new Unary(this.visit(ctx.expr()), UnaryOperator.Negate);
  }
}
