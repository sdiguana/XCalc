import { BaseExpression } from "./BaseExpression";
import { VariableMap } from "./VariableMap";
export class Value extends BaseExpression {
  public value: any;
  public valueType: ValueType = ValueType.Unknown;
  public isResult: boolean = false;
  constructor(value: any) {
    super();
    this.value = value || console.error(`Value Expression was assigned null.`);
    this._setValueType();
    // if (this.valueType == ValueType.Number) {
    //   this.evaluated = this;
    //   this.evaluated.isResult = true;
    // }
  }
  private _setValueType(): void {
    let v = this.value;
    if (!isNaN(Number(v))) {
      this.valueType = ValueType.Number;
      this.value = Number(v);
    } else if (v.toString().toLowerCase() === "true") {
      this.valueType = ValueType.Boolean;
      this.value = true;
    } else if (v.toString().toLowerCase() === "false") {
      this.valueType = ValueType.Boolean;
      this.value = false;
    } else {
      this.valueType = ValueType.Variable;
      this.value = v;
    }
  }
  public print(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    return printResult
      ? this.evaluated.print(printResult)
      : this.value.toString();
  }
  public printExpr(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    return printResult
      ? this.printExpr(printResult)
      : `${this.value} (${this.valueType})`;
  }
  public evaluate(assignedValues: VariableMap): BaseExpression {
    if (this.valueType == ValueType.Variable) {
      if (this.value == String.fromCharCode(parseInt("03c0", 16)))
        this.evaluated = new Value(Math.PI);
      else if (assignedValues.has(this.value.toString())) {
        let n = assignedValues.get(this.value);
        this.evaluated = n ? new Value(n) : new Value(this.value);
      } else this.evaluated = new Value(this.value);
    } else this.evaluated = new Value(this.value); //TODO: Refactor this to not repeat
    this.evaluated.isResult = true;
    return this;
  }
}
export enum ValueType {
  Unknown = "unknown",
  Variable = "variable",
  Number = "number",
  Boolean = "boolean"
}
