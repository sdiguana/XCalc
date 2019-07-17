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

// describe("Add(2+1)", function() {
//   it("sb: 3", function() {
//     let eg = new XCalc.ExpressionGroup(["2+1"]);
//     eg.evaluate();
//     assert.equal(eg.expressions[0].print(true), 3);
//   });
// });
// describe("Subtract(3-4)", function() {
//   it("sb: -1", function() {
//     let eg = new XCalc.ExpressionGroup(["3-4"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), -1);
//   });
// });

// describe("Multiply(3*2)", function() {
//   it("sb: 6", function() {
//     let eg = new XCalc.ExpressionGroup(["3*2"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 6);
//   });
// });

// describe("Divide(10/2)", function() {
//   it("sb: 5", function() {
//     let eg = new XCalc.ExpressionGroup(["10/2"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 5);
//   });
// });
// describe("Power: (2^2)", function() {
//   it("sb: 4", function() {
//     let eg = new XCalc.ExpressionGroup(["2^2"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 4);
//   });
// });
// describe("Power: (2**2)", function() {
//   it("sb: 4", function() {
//     let eg = new XCalc.ExpressionGroup(["2**2"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 4);
//   });
// });
// describe("Assign:Left (a=31)", function() {
//   it("sb: 31", function() {
//     let eg = new XCalc.ExpressionGroup(["a=31"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 31);
//   });
// });
// describe("Assign:Right (33=b)", function() {
//   it("sb: 33", function() {
//     let eg = new XCalc.ExpressionGroup(["33=b"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 33);
//   });
// });

// describe("String.fromCharCode(0x221a) Sqrt(81)", function() {
//   it("sb: 9", function() {
//     let eg = new XCalc.ExpressionGroup(["\u221a(81)"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 9);
//   });
// });

// describe("NthRoot(3&27)", function() {
//   it("sb: 3", function() {
//     let eg = new XCalc.ExpressionGroup(["\u221a(3&27)"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 3);
//   });
// });

// describe("Modulo(17%10)", function() {
//   it("sb: 7", function() {
//     let eg = new XCalc.ExpressionGroup(["17%10"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 7);
//   });
// });
// describe("Add/Negate(7--10))", function() {
//   it("sb: 17", function() {
//     let eg = new XCalc.ExpressionGroup(["7--10"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 17);
//   });
// });

// describe("(), {}, [] of 19", function() {
//   it("sb: 19", function() {
//     let eg = new XCalc.ExpressionGroup(["(19)", "{19}", "[19]"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 19);
//     assert.equal(eg.expressions[1].print(true), 19);
//     assert.equal(eg.expressions[2].print(true), 19);
//   });
// });

// describe("Negate: -(42)", function() {
//   it("sb: -42", function() {
//     let eg = new XCalc.ExpressionGroup(["-(42)"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), -42);
//   });
// });

// describe("Abs: |-99|", function() {
//   it("sb: 99", function() {
//     let eg = new XCalc.ExpressionGroup(["|-99|"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 99);
//   });
// });

// describe("Solve with Variable Assignments [a=3, a+2]", function() {
//   it("sb: 5", function() {
//     let eg = new XCalc.ExpressionGroup(["a=3", "a+2"]).evaluate();
//     assert.equal(eg.expressions[0].print(true), 3);
//     assert.equal(eg.expressions[1].print(true), 5);
//   });
// });

// describe("Unresolvable Expression [e^d]", function() {
//   it("sb: e ^ d", function() {
//     let eg = new XCalc.ExpressionGroup(["e^d"]).evaluate();
//     let e = eg.expressions[0];
//     assert.equal(eg.expressions[0].print(true), "e ^ d");
//   });
// });
