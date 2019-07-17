// Credit to Tom Everett on grammar design. Grammar under BSD License.
// https://github.com/antlr/grammars-v4/blob/master/calculator/calculator.g4
grammar XCalc;

xcalc: (expression | equation) EOF;

equation:
	expression (EQUALS expression)+		# assignment
	| expression (relOp expression)+	# equality;

expression: multExpr ((PLUS | MINUS) multExpr)*;
multExpr: expExpr ((MULT | DIV | MODULO) expExpr)*;
expExpr: signedAtom (POWER signedAtom)*;

signedAtom: PLUS signedAtom | MINUS signedAtom | func | atom;

atom: term | group;
term: NUMBER | CONSTANT | ID;
group:
	op = ROOT LPAREN (left = expression AMPERSAND)? right = expression RPAREN
	| LPAREN expression RPAREN
	| LBRKT expression RBRKT
	| LCURLY expression RCURLY
	| PIPE signedAtom PIPE;

// # root //L is 1/Pwr 

func: FN LPAREN expression (COMMA expression)? RPAREN;

/*
 * Lexer Rules
 */
relOp: GT | GTE | LT | LTE | NE | EQ;
FN:
	'cos'
	| 'sin'
	| 'tan'
	| 'acos'
	| 'asin'
	| 'atan'
	| 'abs'
	| 'ceil'
	| 'floor'
	| 'log10'
	| 'ln'
	| 'exp'
	| 'sqrt'
	//2 arg functions:
	| 'atan2'
	| 'log'
	| 'pow';

//TERMS
NUMBER: DIGIT+ ('.' DIGIT*)?;
ID: LETTER+ ('_'? (LETTER | DIGIT)+)*;
CONSTANT: PI;
PI: '\u03c0' | 'PI';

//OPERATORS
MINUS: '-';
PLUS: '+';
MULT: ('*' | '\u2219' | '\u00d7');
// '\u2219' = bullet | '\u00d7' = cross
DIV: ('/' | '\u00f7');
POWER: ('^' | '**');
ROOT: ('sqrt' | '\u221a');
MODULO: '%';
EQUALS: '=';

//GROUPING
LPAREN: '(';
RPAREN: ')';
LBRKT: '[';
RBRKT: ']';
LCURLY: '{';
RCURLY: '}';
// LANGBRACE: '\u27E8'; RANGBRACE: '\u27E9';

//MISC
PIPE: '|';
COMMA: ',';
AMPERSAND: '&';

//EQUALITY
GT: '>';
GTE: '>=' | '\u2265';
LT: '<';
LTE: '\u2264';
NE: '!=' | '\u2260';
EQ: '==';

fragment DIGIT: [0-9];
fragment LETTER: [a-zA-Z];
//fragment UNICODE: '\u0370' ..'\u03FF';

WS: (' ' | '\r' | '\t' | '\u000C' | '\n') -> channel(HIDDEN);
