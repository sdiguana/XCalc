var assert = require("assert");
var XCalc = {
  ExpressionGroup: require("../dist/Expressions/ExpressionGroup")
    .ExpressionGroup,
  Binary: require("../dist/Expressions/Binary").Binary,
  BinaryOperator: require("../dist/Expressions/Binary").BinaryOperator,
  Unary: require("../dist/Expressions/Unary").Unary,
  UnaryOperator: require("../dist/Expressions/Unary").UnaryOperator,
  Value: require("../dist/Expressions/Value").Value,
  ValueType: require("../dist/Expressions/Value").ValueType,
  Function1: require("../dist/Expressions/Function1").Function1,
  Function1Operator: require("../dist/Expressions/Function1").Function1Operator,
  Function2: require("../dist/Expressions/Function2").Function2,
  Function2Operator: require("../dist/Expressions/Function2").Function2Operator
};

// describe("Multiple Assignments", function() {
//   describe("#Multi-Assign", function() {
//     it("sb:7", function() {
//       let eg = new XCalc.ExpressionGroup(["d=4", "n=3", "(d^2 - n^2)"]);
//       eg.evaluate();
//       eg.WriteTreeStringTrees();
//       console.log(eg.expressions[2].printExpr(true));
//       assert.equal(eg.expressions[2].print(true), 7);
//     });
//   });
// });
describe("chain Assignment", function() {
  describe("#chain-Assign", function() {
    it("sb:6", function() {
      let eg = new XCalc.ExpressionGroup(["d=4", "2+d"]).evaluate();
      assert.equal(eg.expressions[1].print(true), 6);
    });
  });
});

describe("chain Assignment #2", function() {
  describe("#chain-Assign", function() {
    it("sb:2", function() {
      let eg = new XCalc.ExpressionGroup([
        "D=4",
        "t=1",
        "d=D - 2*t",
        "f=d"
      ]).evaluate();
      assert.equal(eg.expressions[3].print(true), 2);
    });
  });
});
