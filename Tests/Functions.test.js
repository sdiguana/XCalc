// var assert = require("assert");
// var XCalc = {
//   ExpressionGroup: require("../dist/Expressions/ExpressionGroup")
//     .ExpressionGroup,
//   Binary: require("../dist/Expressions/Binary").Binary,
//   BinaryOperator: require("../dist/Expressions/Binary").BinaryOperator,
//   Unary: require("../dist/Expressions/Unary").Unary,
//   UnaryOperator: require("../dist/Expressions/Unary").UnaryOperator,
//   Value: require("../dist/Expressions/Value").Value,
//   ValueType: require("../dist/Expressions/Value").ValueType,
//   Function1: require("../dist/Expressions/Function1").Function1,
//   Function1Operator: require("../dist/Expressions/Function1").Function1Operator,
//   Function2: require("../dist/Expressions/Function2").Function2,
//   Function2Operator: require("../dist/Expressions/Function2").Function2Operator
// };
// let fns = [
//   [`sin(π/2)`, Math.sin(Math.PI / 2)],
//   ["cos(\u03c0/3)", Math.cos(Math.PI / 3)],
//   ["tan(\u03c0/3)", Math.tan(Math.PI / 3)],
//   ["asin(0.5)", Math.asin(0.5)],
//   ["acos(0.5)", Math.acos(0.5)],
//   ["atan(0.5)", Math.atan(0.5)],
//   ["abs(-5)", 5],
//   ["ceil(13.25)", Math.ceil(13.25)],
//   ["floor(13.25)", Math.floor(13.25)],
//   ["log10(3)", Math.log10(3)],
//   ["ln(3)", Math.log(3)],
//   ["exp(3)", Math.exp(3)],
//   ["sqrt(4)", 2],
//   //Function2
//   ["atan2(4,2)", Math.atan2(4, 2)],
//   ["pow(4,2)", Math.pow(4, 2)],
//   ["log(4,2)", Math.log(4, 2)]
// ];

// for (let i = 0; i < fns.length; i++) {
//   const e = fns[i];

//   describe(`Functions: ${e[0]}`, function() {
//     it(`sb: ${Math.round(e[1] * 10000) / 10000}`, function() {
//       let eg = new XCalc.ExpressionGroup([e[0]]).evaluate();
//       let result = eg.expressions[0].print(true);
//       let expected = e[1];
//       let tolerance = 0.00001;
//       if (result - tolerance < expected && result + tolerance > expected)
//         result = expected;

//       assert.equal(result, expected);
//     });
//   });
// }

// // let fOps = new XCalc.ExpressionGroup(fns.map(x => x[0]));
// // fOps.evaluate();
// // let fRes = fOps.expressions;
// // console.log("....................");
// // for (let i = 0; i < fRes.length; i++) {
// //   const elm = fRes[i];
// //   console.log(`${elm.print(false)}    ->    ${elm.print(true)}`);
// // }
