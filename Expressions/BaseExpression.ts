import { Value, ValueType } from "./Value";
import { VariableMap } from "./VariableMap";
//import { BaseExpressionVisitor } from "./BaseExpressionVisitor";

export abstract class BaseExpression {
  public evaluated: BaseExpression;
  public isResult: boolean;
  public abstract evaluate(assignedValues: VariableMap): BaseExpression;
  public abstract print(printResult: boolean): string;
  public abstract printExpr(printResult: boolean): string;
  public static isNumber(expr: BaseExpression): boolean {
    const val = expr as Value;
    if (expr instanceof Value && val.valueType == ValueType.Number) {
      return true;
    } else return false;
  }
}
