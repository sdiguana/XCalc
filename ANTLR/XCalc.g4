grammar XCalc;

//https://github.com/tunnelvisionlabs/antlr4ts
xcalcExpr: expr EOF;

expr:
	'(' expr ')'											# paren
	| '(' expr '}'											# curly
	| '[' expr ']'											# bracket
	| '|' expr '|'											# absValue
	| <assoc = right>left = expr op = POWER right = expr	# power
	| op = ROOT '(' (left = expr '&')? right = expr ')'		# root //left is root-power
	| left = expr op = MULT right = expr					# multiply
	//| left = expr right = expr								# implicitMultiply
	| '-' expr											# negate
	| left = expr op = '/' right = expr					# divide
	| left = expr op = '%' right = expr					# modulo
	| left = expr op = '+' right = expr					# add
	| left = expr op = '-' right = expr					# subtract
	| fn = func '(' arg = expr (',' arg2 = expr)? ')'	# function
	| value												# val
	| left = expr '=' right = expr						# assignment; //how to deal with multiple-assignment equations?
func:
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
value: NUMBER | STRING | ID;

/*
 * Lexer Rules
 */
MULT:
	('*' | '\u2219' | '\u00d7'); // '\u2219' = bullet | '\u00d7' = cross
POWER: ('^' | '**');
ROOT: ('sqrt' | '\u221a');
NUMBER: '-'? DIGIT* '.' DIGIT* E? | '-'? DIGIT+ E?;
E: ('E' | 'e') ('+' | '-')? DIGIT+;
STRING: '"' ID (ID | DIGIT)* '"';
ID: Char ('_'? (Char | DIGIT)+)* | PI;
PI: '\u03c0'; //lower pi

fragment DIGIT: [0-9];

fragment Char: ([a-zA-Z] | '\u0370' ..'\u03FF');
WS: (' ' | '\r' | '\t' | '\u000C' | '\n') -> channel(HIDDEN);
