import { Value } from "./Value";
import { BaseExpression } from "./BaseExpression";
import { VariableMap } from "./VariableMap";

export enum Function1Operator {
  sin = "sin",
  cos = "cos",
  tan = "tan",
  asin = "asin",
  acos = "acos",
  atan = "atan",
  //r2d,
  //d2r,

  abs = "abs",
  ceil = "ceil",
  floor = "floor",
  log10 = "log10",
  ln = "ln",
  exp = "exp",
  sqrt = "sqrt",
  unknown = "unknown"
}
export class Function1 extends BaseExpression {
  public operator: Function1Operator;
  public argument: BaseExpression;
  private _operatorFunc: (arg: number) => number;
  private _opSymbol: string | null = null;
  public isResult: boolean = false;
  // private Func<double, double> this._operatorFunc;

  constructor(arg: BaseExpression, action: string | Function1Operator) {
    super();
    this.argument = arg;
    this.operator = this.getOperatorFunc(action as string);
    this._opSymbol = this.operator.toString();
  }

  private getOperatorFunc(action: string): Function1Operator {
    switch (action.toLowerCase()) {
      //Angles:
      case "sin":
        this._operatorFunc = Math.sin;
        return Function1Operator.sin;
      case "cos":
        this._operatorFunc = Math.cos;
        return Function1Operator.cos;
      case "tan":
        this._operatorFunc = Math.tan;
        return Function1Operator.tan;
      case "asin":
        this._operatorFunc = Math.asin;
        return Function1Operator.asin;
      case "acos":
        this._operatorFunc = Math.acos;
        return Function1Operator.acos;
      case "atan":
        this._operatorFunc = Math.atan;
        return Function1Operator.atan;
      //Others
      case "abs":
        this._operatorFunc = Math.abs;
        return Function1Operator.abs;
      case "ceil":
        this._operatorFunc = Math.ceil;
        return Function1Operator.ceil;
      case "floor":
        this._operatorFunc = Math.floor;
        return Function1Operator.floor;
      case "log10":
        this._operatorFunc = Math.log10;
        return Function1Operator.log10;
      case "ln":
        this._operatorFunc = Math.log;
        return Function1Operator.ln;
      case "exp":
        this._operatorFunc = Math.exp;
        return Function1Operator.exp;
      case "sqrt":
        this._operatorFunc = Math.sqrt;
        return Function1Operator.sqrt;
    }
    return Function1Operator.unknown;
  }
  public evaluate(assignedValues: VariableMap): BaseExpression {
    this.argument.evaluate(assignedValues);

    if (BaseExpression.isNumber(this.argument.evaluated)) {
      var value = (this.argument.evaluated as Value).value;
      this.evaluated = new Value(this._operatorFunc(value));
    } else {
      this.evaluated = new Function1(this.argument, this.operator);
    }
    this.evaluated.isResult = true;
    return this;
  }

  public print(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    if (printResult) {
      return this.evaluated.print(printResult);
    }
    return `${this.operator}(${this.argument.print(printResult)})`;
  }
  public printExpr(printResult: boolean): string {
    return this.print(printResult);
  }
}
