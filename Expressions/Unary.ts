import { Value, ValueType } from "./Value";
import { Binary, BinaryOperator } from "./Binary";
import { BaseExpression } from "./BaseExpression";
import { VariableMap } from "./VariableMap";

export enum UnaryOperator {
  Negate = "Negate",
  Parenthesis = "Parenthesis",
  AbsoluteValue = "AbsoluteValue"
}

export class Unary extends BaseExpression {
  public inner: BaseExpression;
  public operator: UnaryOperator;
  public isResult: boolean = false;
  constructor(expression: BaseExpression, action: UnaryOperator) {
    super();
    this.inner = expression;
    this.operator = action;
    return this;
  }
  public evaluate(assignedValues: VariableMap): BaseExpression {
    this.inner.evaluate(assignedValues);
    if (this.operator == UnaryOperator.Negate) {
      //this.Negate(evaluatedInner, assignedValues);
      const iVal = this.inner.evaluated as Value;
      if (iVal) {
        if (iVal.valueType == ValueType.Number) {
          this.evaluated = new Value(iVal.value * -1);
        } else if (iVal.valueType == ValueType.Boolean) {
          this.evaluated = new Value(!iVal.value);
        } else {
          this.evaluated = new Unary(this.inner, UnaryOperator.Negate);
        }
      }
      //inner is *not* a value
      else {
        let binVal: Binary = new Binary(
          new Value(-1),
          this.inner.evaluated,
          BinaryOperator.Multiply
        );
        binVal.evaluate(assignedValues);
        this.evaluated = binVal.evaluated;
      }
    } else if (this.operator == UnaryOperator.Parenthesis) {
      this.evaluated = this.inner.evaluated;
    } else if (this.operator == UnaryOperator.AbsoluteValue) {
      if (BaseExpression.isNumber(this.inner.evaluated)) {
        const val = this.inner.evaluated as Value;
        //TODO: FIX INSTANCEOF IF I NEED OR NOT
        this.evaluated = new Value(Math.abs(val.value));
      } else
        this.evaluated = new Unary(this.inner, UnaryOperator.AbsoluteValue);
    } else throw new Error("Not implemented.");
    this.evaluated.isResult = true;
    return this;
  }
  public print(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    if (printResult) {
      return this.evaluated.print(printResult);
    }
    // Print Expression As-Is:
    const inner = this.inner.print(false);
    switch (this.operator) {
      case UnaryOperator.AbsoluteValue:
        return `|${inner}|`;
      case UnaryOperator.Negate:
        return `-${inner}`;
      case UnaryOperator.Parenthesis:
        return `(${inner})`;
      default:
        return "unary fell through print()";
    }
  }
  public printExpr(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    if (printResult) {
      return this.evaluated.print(printResult);
    }
    return `${this.operator} [${this.inner}]`;
  }
}
