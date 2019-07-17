import { XCalcParser, XcalcContext } from "../ANTLR/XCalcParser";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { XCalcLexer } from "../ANTLR/XCalcLexer";
import { BaseExpression } from "./BaseExpression";
import { Value, ValueType } from "./Value";
import { InstantiationVisitor } from "./InstantiationVisitor";
import { VariableMap } from "./VariableMap";

export class ExpressionGroup {
  //Private Fields
  private readonly _initialExpressions: string[] = [];
  private readonly _parsers: XCalcParser[] = [];
  private readonly _contexts: XcalcContext[] = [];
  private readonly _allValues: Value[] = [];
  //Public Fields
  public readonly expressions: BaseExpression[] = [];
  public readonly variableMap: VariableMap = new VariableMap();

  //Properties
  // public SolvedValues(): Value[] {
  //   return this.allValues.filter(
  //     x =>
  //       x.valueType == ValueType.Variable &&
  //       (x.evaluated as Value).valueType == ValueType.Number
  //   );
  // }
  // public SolvedValuePairs(): any {
  //   let sv = this.SolvedValues();
  //   return sv.map(x => [x.value, (x.evaluated as Value).value]);
  // }
  // public UnsolvedValues(): Value[] {
  //   return this.allValues.filter(
  //     x =>
  //       x.valueType == ValueType.Variable &&
  //       (x.evaluated as Value).valueType != ValueType.Number
  //   );
  // }

  //CTOR
  /**Saves Expressions, then calls ParseAndInstantiate(). */
  constructor(expressions: string[]) {
    for (let i = expressions.length - 1; i >= 0; i--) {
      if (!expressions[i]) expressions.splice(i, 1);
    }
    //Verify at least one expression was kept
    if (expressions.length < 1)
      throw new Error("ExpressionGroup can't be empty");

    this._initialExpressions = expressions;

    this._parseAndInstantiate();
    return this;
  }

  //Private Methods
  /**Parses strings into Expressions. Registers Values and AssignedVariables. */
  private _parseAndInstantiate(): void {
    for (let expr of this._initialExpressions) {
      //console.log(`Parsing: ${expr}`);
      let inputStream = new ANTLRInputStream(expr);
      let lexer = new XCalcLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new XCalcParser(tokenStream);

      this._parsers.push(parser);
      this._contexts.push(parser.xcalc());
    }
    for (const ctx of this._contexts) {
      const iv = new InstantiationVisitor();
      let context = ctx.expression() || ctx.equation();
      let expr = iv.visit(context!);
      this.expressions.push(expr);
      //Copy Initialized Variables from iv into this:
      for (let entry of iv.AssignedVariables) {
        let left = entry[0];
        let right = entry[1].toString();
        this.variableMap.add(left, right);
      }
      //Copy all values from IV to this
      for (let val of iv.AllValues) {
        if (this._allValues.map(x => x.value).indexOf(val.value) === -1)
          this._allValues.push(val);
      }
    }
    console.log("***********");
    console.log(this.variableMap.print().join("\n"));
    console.log("***********");
  }
  /** Prints expression to console as stringTree, for all expressions. */
  private _writeTreeStringTrees(): void {
    for (let i = 0; i < this._contexts.length; i++) {
      this._writeTreeStringTree(i);
    }
  }
  /** Prints expression to console as stringTree. */
  private _writeTreeStringTree(index: number) {
    console.log(this._contexts[index].toStringTree(this._parsers[index]));
  }

  //Public Methods
  /**Walks tree: evaluates expressions */
  public evaluate(): ExpressionGroup {
    for (var expr of this.expressions) {
      expr.evaluate(this.variableMap);
    }
    return this;
  }
  /** Walks tree to collect all Values that are Variables. */
  public allVariables(): Value[] {
    this._allValues.entries;
    return this._allValues.filter(x => x.valueType == ValueType.Variable);
  }
  /**Adds value to array of values contained in expression group. */
  public registerValue(v: Value): boolean {
    console.log("enter register value");
    if (this._allValues.filter(x => x.value === v.value).length > 0)
      return false;
    else this._allValues.push(v);
    return true;
  }
}
