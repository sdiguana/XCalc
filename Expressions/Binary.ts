import { BaseExpression } from "./BaseExpression";
import { Value } from "./Value";
import { Unary, UnaryOperator } from "./Unary";
import { VariableMap } from "./VariableMap";

export enum BinaryOperator {
  None = "None",
  //Assignment
  AssignTo = "AssignTo",
  //Arithmitic
  Add = "Add",
  Subtract = "Subtract",
  Multiply = "Multiply",
  Divide = "Divide",
  Power = "Power",
  NthRoot = "NthRoot",
  Modulo = "Modulo",
  //Logical
  And = "And",
  Or = "Or",
  //Relational
  LessThan = "LessThan",
  LessThanOrEqual = "LessThanOrEqual",
  GreaterThan = "GreaterThan",
  GreaterThanOrEqual = "GreaterThanOrEqual",
  EqualTo = "EqualTo",
  NotEqual = "NotEqual"
}
export class Binary extends BaseExpression {
  //Properties
  public left: BaseExpression;
  public right: BaseExpression;
  public operator: BinaryOperator;
  private _opSymbol: string;
  public isResult: boolean = false;
  //CTOR
  constructor(
    left: BaseExpression,
    right: BaseExpression,
    action: BinaryOperator,
    opSymbol: string | null = null
  ) {
    super();
    this.left = left;
    this.right = right;
    this.operator = action;
    if (opSymbol == null) this._opSymbol = this._getOpSymbol();
    else this._opSymbol = opSymbol;
    return this;
  }
  //Functions
  private _getOpSymbol(): string {
    switch (this.operator) {
      case BinaryOperator.Add:
        return "+";
      case BinaryOperator.And:
        return "&&";
      case BinaryOperator.AssignTo:
        return "=";
      case BinaryOperator.Divide:
        return "/";
      case BinaryOperator.EqualTo:
        return "==";
      case BinaryOperator.GreaterThan:
        return ">";
      case BinaryOperator.GreaterThanOrEqual:
        return "≥";
      case BinaryOperator.LessThan:
        return "<";
      case BinaryOperator.LessThanOrEqual:
        return "≤";
      case BinaryOperator.Modulo:
        return "%";
      case BinaryOperator.Multiply:
        return "∙";
      case BinaryOperator.NotEqual:
        return "!=";
      case BinaryOperator.NthRoot:
        return "√";
      case BinaryOperator.Or:
        return "||";
      case BinaryOperator.Power:
        return "^";
      case BinaryOperator.Subtract:
        return "-";
      default:
        return "";
    }
  }
  public evaluate(assignedValues: VariableMap): BaseExpression {
    //Evaluate Sub-Expressions
    this.left.evaluate(assignedValues);
    this.right.evaluate(assignedValues);
    //Determine if any are numbers:
    var leftIsNumber = BaseExpression.isNumber(this.left.evaluated);
    var rightIsNumber = BaseExpression.isNumber(this.right.evaluated);
    switch (this.operator) {
      case BinaryOperator.Add:
        this.Add(leftIsNumber, rightIsNumber);
        break;
      case BinaryOperator.AssignTo:
        this.AssignTo(leftIsNumber, rightIsNumber, assignedValues);
        break;
      case BinaryOperator.Divide:
        this.Divide(leftIsNumber, rightIsNumber);
        break;
      case BinaryOperator.Multiply:
        this.Multiply(leftIsNumber, rightIsNumber);
        break;
      case BinaryOperator.Modulo:
        this.Modulo(leftIsNumber, rightIsNumber);
        break;
      case BinaryOperator.NthRoot:
        this.NthRoot(leftIsNumber, rightIsNumber);
        break;
      case BinaryOperator.Power:
        this.Power(leftIsNumber, rightIsNumber);
        break;
      case BinaryOperator.Subtract:
        this.Subtract(leftIsNumber, rightIsNumber);
        break;
      default:
        break;
    }
    if (this.evaluated) this.evaluated.isResult = true;
    return this;
  }

  public getVariables(): BaseExpression[] {
    return this.left.getVariables().concat(this.right.getVariables());
  }

  private Modulo(leftIsNumber: boolean, rightIsNumber: boolean): void {
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Number((this.left.evaluated as Value).value) %
          Number((this.right.evaluated as Value).value)
      );
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.Modulo,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.Modulo,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.Modulo,
        this._opSymbol
      );
  }

  private Power(leftIsNumber: boolean, rightIsNumber: boolean): void {
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Math.pow(
          Number((this.left.evaluated as Value).value),
          Number((this.right.evaluated as Value).value)
        )
      );
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.Power,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.Power,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.Power,
        this._opSymbol
      );
  }

  private NthRoot(leftIsNumber: boolean, rightIsNumber: boolean): void {
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Math.pow(
          Number((this.right.evaluated as Value).value), //reverse L & R For Power Fn
          1 / Number((this.left.evaluated as Value).value)
        )
      );
    //TODO VERIFY DIVIDE BY ZERO, add i functionality?
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.NthRoot,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.NthRoot,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.NthRoot,
        this._opSymbol
      );
  }

  private Multiply(leftIsNumber: boolean, rightIsNumber: boolean): void {
    var lu = this.left as Unary;
    var ru = this.right as Unary;
    if (
      (lu != null && lu.operator == UnaryOperator.Parenthesis) ||
      (ru != null && ru.operator == UnaryOperator.Parenthesis)
    ) {
      console.log("L or R are in a group");
    }
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Number((this.left.evaluated as Value).value) *
          Number((this.right.evaluated as Value).value)
      );
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.Multiply,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.Multiply,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.Multiply,
        this._opSymbol
      );
  }

  private Divide(leftIsNumber: boolean, rightIsNumber: boolean): void {
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Number((this.left.evaluated as Value).value) /
          Number((this.right.evaluated as Value).value)
      );
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.Divide,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.Divide,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.Divide,
        this._opSymbol
      );
  }

  private AssignTo(
    leftIsNumber: boolean,
    rightIsNumber: boolean,
    assignedValues: VariableMap
  ): void {
    const le = this.left.evaluated as Value;
    const re = this.right.evaluated as Value;
    //Case: Both L & R are Values, therefore this is a resolvable expression
    if (le && re) {
      const hasLeft = false;
      const hasRight = false;
      if (this.left.constructor.name == "Value") {
        assignedValues.has((this.left as Value).value.toString());
      }
      if (this.right.constructor.name == "Value") {
        assignedValues.has((this.right as Value).value.toString());
      }
      const leftNeedsAssigned = !hasLeft && !leftIsNumber;
      const rightNeedsAssigned = !hasRight && !rightIsNumber;

      if (leftIsNumber && rightIsNumber) {
        if (Number(le.value) != Number(re.value)) {
          throw new Error(
            `Unable to evaluate equality: ${this.left} = ${this.right}`
          );
        } else {
          this.evaluated = new Value(le.value);
        }
      } else if (!leftIsNumber && !rightIsNumber) {
        console.log("both are variables in assignTo evaluated state...todo");
      } else {
        //one is a number, one is not
        this.evaluated = leftIsNumber
          ? new Value(le.value)
          : new Value(re.value);
      }
      if (leftNeedsAssigned)
        console.log(
          `BINARY.ASSIGN# : ${Number((this.left as Value).value)}, ${
            leftIsNumber ? Number(le.value) : Number(re.value)
          }`
        );
      console.log(
        `BINARY.ASSIGN : ${(this.left as Value).value}, ${
          leftIsNumber ? le.value : re.value
        }`
      );
      assignedValues.add(
        Number((this.left as Value).value),
        leftIsNumber ? Number(le.value) : Number(re.value)
      );
      if (rightNeedsAssigned)
        console.log(
          `BINARY.ASSIGN# : ${Number((this.right as Value).value)}, ${
            leftIsNumber ? Number(le.value) : Number(re.value)
          }`
        );
      console.log(
        `BINARY.ASSIGN : ${(this.right as Value).value}, ${
          leftIsNumber ? le.value : re.value
        }`
      );
      assignedValues.add(
        Number((this.right as Value).value),
        leftIsNumber ? Number(le.value) : Number(re.value)
      );
    } else {
      //One or both are *not* Values, unable to reduce further.

      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.AssignTo,
        this._opSymbol
      );
      this.evaluated.isResult = true;
    }

    // var lNum = leftIsNumber ? (this.left.evaluated as Value).value : Number.NaN;
    // var rNum = rightIsNumber
    //   ? (this.right.evaluated as Value).value
    //   : Number.NaN;
    // //Both are numbers: Assignment is redundant.
    // if (leftIsNumber && rightIsNumber) {
    //   var lve = this.left as Value;
    //   var rve = this.right as Value;
    //   if (assignedValues.has(lve.value.toString())) {
    //     let n = assignedValues.getNumber(lve.value.toString());
    //     this.evaluated = new Value(n ? n : lve.value);
    //   } else if (assignedValues.has(rve.value.toString())) {
    //     let n = assignedValues.getNumber(rve.value.toString());
    //     this.evaluated = new Value(n ? n : lve.value);
    //   } else {
    //     throw new Error(
    //       `${this} is Assign-To, however both sides are numbers. An Equal To Check should be performed. (Operator ==)`
    //     );
    //   }
    // }
    // //L is #, R is Var
    // else if (leftIsNumber) {
    //   var rVar = this.right.evaluated;
    //   var rve = rVar as Value;
    //   if (rve != null) {
    //     //Try to add RVar & LNum to Dictionary:
    //     if (!assignedValues.has(rve.value.toString())) {
    //       assignedValues.add(rve.value.toString(), lNum);
    //       this.right.evaluate(assignedValues);
    //       this.evaluated = new Value(lNum);
    //     }
    //   } else {
    //     this.evaluated = new Binary(
    //       new Value(lNum),
    //       this.right.evaluated,
    //       BinaryOperator.AssignTo,
    //       this._opSymbol
    //     );
    //   }
    // }
    // //R is #, L is Var
    // else if (rightIsNumber) {
    //   var lVar = this.left.evaluated;
    //   var lve = lVar as Value;
    //   if (lve != null) {
    //     //Try to add RVar & LNum to Dictionary:
    //     if (!assignedValues.has(lve.value.toString())) {
    //       assignedValues.add(lve.value.toString(), rNum);
    //       this.left.evaluate(assignedValues);
    //       this.evaluated = new Value(rNum);
    //     }
    //   } else {
    //     this.evaluated = new Binary(
    //       this.left.evaluated,
    //       new Value(rNum),
    //       BinaryOperator.AssignTo,
    //       this._opSymbol
    //     );
    //   }
    // }
    // //Neither are #s
    // else
    //   this.evaluated = new Binary(
    //     this.left.evaluated,
    //     this.right.evaluated,
    //     BinaryOperator.AssignTo,
    //     this._opSymbol
    //   );
  }
  private Add(leftIsNumber: boolean, rightIsNumber: boolean): void {
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Number((this.left.evaluated as Value).value) +
          Number((this.right.evaluated as Value).value)
      );
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.Add,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.Add,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.Add,
        this._opSymbol
      );
  }

  private Subtract(leftIsNumber: boolean, rightIsNumber: boolean): void {
    if (leftIsNumber && rightIsNumber)
      this.evaluated = new Value(
        Number((this.left.evaluated as Value).value) -
          Number((this.right.evaluated as Value).value)
      );
    else if (leftIsNumber)
      this.evaluated = new Binary(
        new Value((this.left.evaluated as Value).value),
        this.right.evaluated,
        BinaryOperator.Subtract,
        this._opSymbol
      );
    else if (rightIsNumber)
      this.evaluated = new Binary(
        this.left.evaluated,
        new Value((this.right.evaluated as Value).value),
        BinaryOperator.Subtract,
        this._opSymbol
      );
    else
      this.evaluated = new Binary(
        this.left.evaluated,
        this.right.evaluated,
        BinaryOperator.Subtract,
        this._opSymbol
      );
  }

  public print(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    if (printResult) {
      if (!this.evaluated)
        return `Attempted to print evaluated results, but no result exists for expression: ${this.print(
          false
        )}`;
      return this.evaluated.print(printResult);
    }
    // Print Expression As-Is:
    return `${this.left.print(printResult)} ${
      this._opSymbol
    } ${this.right.print(printResult)}`;
  }

  public printExpr(printResult: boolean): string {
    if (this.isResult) printResult = false; //Already a result, ensure no circular reference
    if (printResult) {
      if (!this.evaluated)
        return `Attempted to print evaluated expression, but no result exists for expression: ${this.print(
          false
        )}`;
      return this.evaluated.printExpr(printResult);
    }
    // Print Expression As-Is:
    return `[${this.left.printExpr(printResult)}] ${
      this.operator
    } [${this.right.printExpr(printResult)}]`;
  }
}
