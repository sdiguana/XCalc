import { ExpressionGroup } from "./ExpressionGroup";
import { Binary, BinaryOperator } from "./Binary";
import { Unary, UnaryOperator } from "./Unary";
import { Value, ValueType } from "./Value";

const XCalc = {
  ExpressionGroup,
  Binary,
  BinaryOperator,
  Unary,
  UnaryOperator,
  Value,
  ValueType
};

// if (typeof window === "undefined") {
//   //exports.XCalc = XCalc;
//   window = new Window();
//   window.XCalc = XCalc;
// } else {
// }
//window.XCalc = XCalc;

// declare global {
//   interface Window {
//     XCalc: any;
//   }
// }
export default XCalc;
