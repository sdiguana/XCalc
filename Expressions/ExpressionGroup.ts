import { XCalcParser, XcalcExprContext } from "../ANTLR/XCalcParser";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { XCalcLexer } from "../ANTLR/XCalcLexer";
import { BaseExpression } from "./BaseExpression";
// import { Binary } from "./Binary";
// import { Unary } from "./Unary";
import { Value, ValueType } from "./Value";
import { InstantiationVisitor } from "./InstantiationVisitor";
import { isNumber } from "util";
import { VariableMap } from "./VariableMap";

export class ExpressionGroup {
  //Fields
  private readonly _initialExpressions: string[] = [];
  private readonly _parsers: XCalcParser[] = [];
  private readonly _contexts: XcalcExprContext[] = [];
  private readonly expressions: BaseExpression[] = [];
  private readonly variableMap: VariableMap = new VariableMap();
  //private readonly valueAssignments: Map<string, number | string> = new Map();
  private readonly allValues: Value[] = [];
  public RegisterValue(v: Value): boolean {
    if (this.allValues.filter(x => x.value === v.value).length > 0)
      return false;
    else this.allValues.push(v);
    return true;
  }
  //Properties
  public SolvedValues(): Value[] {
    return this.allValues.filter(
      x =>
        x.valueType == ValueType.Variable &&
        (x.evaluated as Value).valueType == ValueType.Number
    );
  }
  public SolvedValuePairs(): any {
    let sv = this.SolvedValues();
    return sv.map(x => [x.value, (x.evaluated as Value).value]);
  }
  public UnsolvedValues(): Value[] {
    return this.allValues.filter(
      x =>
        x.valueType == ValueType.Variable &&
        (x.evaluated as Value).valueType != ValueType.Number
    );
  }
  public AllVariables(): Value[] {
    this.allValues.entries;
    return this.allValues.filter(x => x.valueType == ValueType.Variable);
  }

  //CTOR
  constructor(expressions: string[]) {
    for (let i = expressions.length - 1; i >= 0; i--) {
      if (!expressions[i]) expressions.splice(i, 1);
    }
    //Verify at least one expression was kept
    if (expressions.length < 1)
      throw new Error("ExpressionGroup can't be empty");

    this._initialExpressions = expressions;

    this.ParseAndInstantiate();
    return this;
  }
  //Private Methods
  private ParseAndInstantiate(): void {
    for (let expr of this._initialExpressions) {
      //console.log(`Parsing: ${expr}`);
      let inputStream = new ANTLRInputStream(expr);
      let lexer = new XCalcLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new XCalcParser(tokenStream);

      this._parsers.push(parser);
      this._contexts.push(parser.xcalcExpr());
    }
    for (const ctx of this._contexts) {
      const iv = new InstantiationVisitor();
      let expr = iv.visit(ctx.expr());
      this.expressions.push(expr);
      for (let entry of iv.AssignedVariables) {
        let left = entry[0];
        let right = entry[1].toString();
        this.variableMap.add(left, right);

        // const containsKeyLeft = this.variableMap.has(left);
        // const containsKeyRight = this.variableMap.has(right);
        // //Case: Variable-Variable Assignment
        // if (!isNumber(left) && !isNumber(right)) {
        //   console.log("V-V Assignment");
        //   if (containsKeyLeft && containsKeyRight) {
        //     let lval = this.variableMap.getNumber(left);
        //     let rval = this.variableMap.getNumber(right);

        //     if (isNumber(lval) && isNumber(rval)) {
        //       throw new Error(
        //         `two variables are already assigned. cannot assign to each other ${entry}`
        //       );
        //     } else if (isNumber(lval)) {
        //       this.valueAssignments.delete(right);
        //       this.valueAssignments.set(right, lval);
        //     } else if (isNumber(rval)) {
        //       this.valueAssignments.delete(left);
        //       this.valueAssignments.set(left, rval);
        //     } else {
        //       throw new Error("idk what to do");
        //     }
        //   } else if (containsKeyLeft) {
        //     let val = this.valueAssignments.get(left);
        //     if (isNumber(val)) {
        //       this.valueAssignments.set(right, val);
        //     } else {
        //       throw new Error(
        //         `Variable Assignment chain detected. Not implemented. Failed at ${entry}`
        //       );
        //     }
        //   } else if (containsKeyRight) {
        //     let val = this.valueAssignments.get(right);
        //     if (isNumber(val)) {
        //       this.valueAssignments.set(left, val);
        //     } else {
        //       throw new Error(
        //         `Variable Assignment chain detected. Not implemented. Failed at ${entry}`
        //       );
        //     }
        //   } else {
        //     //Neither are keys
        //     this.valueAssignments.set(right, left);
        //     this.valueAssignments.set(left, right);
        //   }
        // }
        // //Case Both Sides are Numbers
        // if (isNumber(left) && isNumber(right)) {
        //   throw new Error("Detected equality assertion. Not Implemented.");
        // }
        // //Case at least one side is a number:
        // if (!this.valueAssignments.has(entry[0]))
        //   this.valueAssignments.set(entry[0], entry[1]);
        // else {
        //   let existingKey = entry[0];
        //   let existingValue = this.valueAssignments.get(existingKey);
        //   let newKey = entry[1];
        //   if (isNumber(existingValue)) {
        //     this.valueAssignments.set(newKey, existingValue);
        //   }
        //   // Find if Key Exists
        //   // Find if Value is a Number

        //   console.log(
        //     `Attempted to copy AssignedVariables from Visitor to Expression Group, but Group already contains. K: ${
        //       entry[0]
        //     }, V: ${entry[1]}`
        //   );
        // }
      }
      //this.AllValues.concat(iv.AllValues);
      for (let val of iv.AllValues) {
        if (this.allValues.map(x => x.value).indexOf(val.value) === -1)
          this.allValues.push(val);

        //this.RegisterValue(val);
      }
    }
    //this.WriteTreeStringTrees();
  }

  private WriteTreeStringTrees(): void {
    for (let i = 0; i < this._contexts.length; i++) {
      this.writeTreeStringTree(i);
    }
  }
  private writeTreeStringTree(index: number) {
    console.log(this._contexts[index].toStringTree(this._parsers[index]));
  }

  //Public Methods
  public evaluate(): ExpressionGroup {
    this.variableMap.print();
    for (var expr of this.expressions) {
      expr.evaluate(this.variableMap);
    }
    return this;
  }
  // public PrintResults(): void {
  //   console.log("Fully Resolved Variables: ");
  //   for (let kv of this.variableMap) {
  //     console.log(`${kv[0]} = ${kv[1]}`);
  //   }
  //   console.log("Top Level Expressions:");
  //   for (let expr of this.expressions) {
  //     if (!expr.evaluated) continue;
  //     console.log(expr.print(true));
  //   }
  // }
}
