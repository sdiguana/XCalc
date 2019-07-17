import { Value } from "./Value";
import { BaseExpression } from "./BaseExpression";
import { VariableMap } from "./VariableMap";

export enum Function2Operator {
  undefined = "undefined",
  atan2 = "atan2",
  log = "log",
  pow = "pow"
}

export class Function2 extends BaseExpression {
  public operator: Function2Operator;
  public argument1: BaseExpression;
  public argument2: BaseExpression;
  private _operatorFunc: (arg1: number, arg2: number) => number;
  private _opSymbol: string | null = null;
  public isResult: boolean = false;
  constructor(
    arg1: BaseExpression,
    arg2: BaseExpression,
    action: string | Function2Operator
  ) {
    super();
    this.argument1 = arg1;
    this.argument2 = arg2;
    this.operator = this.getOperatorFunc(action as string);
    this._opSymbol = this.operator.toString();
  }

  private getOperatorFunc(action: string): Function2Operator {
    switch (action.toLowerCase()) {
      case "atan2":
        this._operatorFunc = Math.atan2;
        return Function2Operator.atan2;
      case "log":
        this._operatorFunc = Math.log;
        return Function2Operator.log;
      case "pow":
        this._operatorFunc = Math.pow;
        return Function2Operator.pow;
    }
    return Function2Operator.undefined;
  }
  public evaluate(assignedValues: VariableMap): BaseExpression {
    this.argument1.evaluate(assignedValues);
    this.argument2.evaluate(assignedValues);
    const arg1IsNumber = BaseExpression.isNumber(this.argument1.evaluated);
    const arg2IsNumber = BaseExpression.isNumber(this.argument2.evaluated);

    if (arg1IsNumber && arg2IsNumber) {
      var value = (this.argument1.evaluated as Value).value;
      var value2 = (this.argument2.evaluated as Value).value;
      this.evaluated = new Value(
        this._operatorFunc(Number(value), Number(value2))
      );
    } else if (arg1IsNumber) {
      var value = (this.argument1.evaluated as Value).value;
      this.evaluated = new Function2(
        new Value(value),
        this.argument2.evaluated,
        this.operator
      );
    } else if (arg2IsNumber) {
      var value2 = (this.argument2.evaluated as Value).value;
      this.evaluated = new Function2(
        this.argument1.evaluated,
        new Value(value2),
        this.operator
      );
    } else {
      this.evaluated = new Function2(
        this.argument1,
        this.argument2,
        this.operator
      );
    }
    this.evaluated.isResult = true;
    return this;
  }
  public getVariables(): BaseExpression[] {
    return this.argument1.getVariables().concat(this.argument2.getVariables());
  }

  public print(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    if (printResult) {
      return this.evaluated.print(printResult);
    }
    return ` ${this.operator}(${this.argument1.print(
      printResult
    )}, ${this.argument2.print(printResult)}) `;
  }
  public printExpr(printResult: boolean): string {
    return this.print(printResult);
  }
}
