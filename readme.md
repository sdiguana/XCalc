# XCalc

XCalc is an ANTLR4/TypeScript based expression calculator, supporting variable assignment.

### Dependencies:

```sh
$ npm i --save antlr4ts
```

### Usage

**tsconfig.json**
_"module":"commonjs"_ for testing with mocha
_"module":"es2015"_ for deployment on web applications

```javascript
let eg = new XCalc.ExpressionGroup(["D=4", "E=1", "F=D + 3 * E"]).evaluate();
//To print F as the original equations:
console.log(eg.expressions[2].printExpr(false));
//Print F as results:
console.log(eg.expressions[2].print(true));
//Show all variables with value-assignements:
console.log(eg.variableMap.print().join("\n"));
```
