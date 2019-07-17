// Generated from ./ANTLR/XCalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { XCalcListener } from "./XCalcListener";
import { XCalcVisitor } from "./XCalcVisitor";


export class XCalcParser extends Parser {
	public static readonly FN = 1;
	public static readonly NUMBER = 2;
	public static readonly ID = 3;
	public static readonly CONSTANT = 4;
	public static readonly PI = 5;
	public static readonly MINUS = 6;
	public static readonly PLUS = 7;
	public static readonly MULT = 8;
	public static readonly DIV = 9;
	public static readonly POWER = 10;
	public static readonly ROOT = 11;
	public static readonly MODULO = 12;
	public static readonly EQUALS = 13;
	public static readonly LPAREN = 14;
	public static readonly RPAREN = 15;
	public static readonly LBRKT = 16;
	public static readonly RBRKT = 17;
	public static readonly LCURLY = 18;
	public static readonly RCURLY = 19;
	public static readonly PIPE = 20;
	public static readonly COMMA = 21;
	public static readonly AMPERSAND = 22;
	public static readonly GT = 23;
	public static readonly GTE = 24;
	public static readonly LT = 25;
	public static readonly LTE = 26;
	public static readonly NE = 27;
	public static readonly EQ = 28;
	public static readonly WS = 29;
	public static readonly RULE_xcalc = 0;
	public static readonly RULE_equation = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_multExpr = 3;
	public static readonly RULE_expExpr = 4;
	public static readonly RULE_signedAtom = 5;
	public static readonly RULE_atom = 6;
	public static readonly RULE_term = 7;
	public static readonly RULE_group = 8;
	public static readonly RULE_func = 9;
	public static readonly RULE_relOp = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"xcalc", "equation", "expression", "multExpr", "expExpr", "signedAtom", 
		"atom", "term", "group", "func", "relOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'-'", 
		"'+'", undefined, undefined, undefined, undefined, "'%'", "'='", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "'|'", "','", "'&'", "'>'", undefined, 
		"'<'", "'\u2264'", undefined, "'=='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FN", "NUMBER", "ID", "CONSTANT", "PI", "MINUS", "PLUS", "MULT", 
		"DIV", "POWER", "ROOT", "MODULO", "EQUALS", "LPAREN", "RPAREN", "LBRKT", 
		"RBRKT", "LCURLY", "RCURLY", "PIPE", "COMMA", "AMPERSAND", "GT", "GTE", 
		"LT", "LTE", "NE", "EQ", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XCalcParser._LITERAL_NAMES, XCalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XCalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return XCalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XCalcParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XCalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public xcalc(): XcalcContext {
		let _localctx: XcalcContext = new XcalcContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XCalcParser.RULE_xcalc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 22;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 23;
				this.equation();
				}
				break;
			}
			this.state = 26;
			this.match(XCalcParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XCalcParser.RULE_equation);
		let _la: number;
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new AssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.expression();
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 29;
					this.match(XCalcParser.EQUALS);
					this.state = 30;
					this.expression();
					}
					}
					this.state = 33;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XCalcParser.EQUALS);
				}
				break;

			case 2:
				_localctx = new EqualityContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.expression();
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 36;
					this.relOp();
					this.state = 37;
					this.expression();
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XCalcParser.GT) | (1 << XCalcParser.GTE) | (1 << XCalcParser.LT) | (1 << XCalcParser.LTE) | (1 << XCalcParser.NE) | (1 << XCalcParser.EQ))) !== 0));
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XCalcParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.multExpr();
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XCalcParser.MINUS || _la === XCalcParser.PLUS) {
				{
				{
				this.state = 46;
				_la = this._input.LA(1);
				if (!(_la === XCalcParser.MINUS || _la === XCalcParser.PLUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 47;
				this.multExpr();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multExpr(): MultExprContext {
		let _localctx: MultExprContext = new MultExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XCalcParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.expExpr();
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XCalcParser.MULT) | (1 << XCalcParser.DIV) | (1 << XCalcParser.MODULO))) !== 0)) {
				{
				{
				this.state = 54;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XCalcParser.MULT) | (1 << XCalcParser.DIV) | (1 << XCalcParser.MODULO))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 55;
				this.expExpr();
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expExpr(): ExpExprContext {
		let _localctx: ExpExprContext = new ExpExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XCalcParser.RULE_expExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.signedAtom();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XCalcParser.POWER) {
				{
				{
				this.state = 62;
				this.match(XCalcParser.POWER);
				this.state = 63;
				this.signedAtom();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedAtom(): SignedAtomContext {
		let _localctx: SignedAtomContext = new SignedAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XCalcParser.RULE_signedAtom);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XCalcParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.match(XCalcParser.PLUS);
				this.state = 70;
				this.signedAtom();
				}
				break;
			case XCalcParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.match(XCalcParser.MINUS);
				this.state = 72;
				this.signedAtom();
				}
				break;
			case XCalcParser.FN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 73;
				this.func();
				}
				break;
			case XCalcParser.NUMBER:
			case XCalcParser.ID:
			case XCalcParser.CONSTANT:
			case XCalcParser.ROOT:
			case XCalcParser.LPAREN:
			case XCalcParser.LBRKT:
			case XCalcParser.LCURLY:
			case XCalcParser.PIPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 74;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XCalcParser.RULE_atom);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XCalcParser.NUMBER:
			case XCalcParser.ID:
			case XCalcParser.CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.term();
				}
				break;
			case XCalcParser.ROOT:
			case XCalcParser.LPAREN:
			case XCalcParser.LBRKT:
			case XCalcParser.LCURLY:
			case XCalcParser.PIPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.group();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XCalcParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XCalcParser.NUMBER) | (1 << XCalcParser.ID) | (1 << XCalcParser.CONSTANT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XCalcParser.RULE_group);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XCalcParser.ROOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				_localctx._op = this.match(XCalcParser.ROOT);
				this.state = 84;
				this.match(XCalcParser.LPAREN);
				this.state = 88;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 85;
					_localctx._left = this.expression();
					this.state = 86;
					this.match(XCalcParser.AMPERSAND);
					}
					break;
				}
				this.state = 90;
				_localctx._right = this.expression();
				this.state = 91;
				this.match(XCalcParser.RPAREN);
				}
				break;
			case XCalcParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.match(XCalcParser.LPAREN);
				this.state = 94;
				this.expression();
				this.state = 95;
				this.match(XCalcParser.RPAREN);
				}
				break;
			case XCalcParser.LBRKT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.match(XCalcParser.LBRKT);
				this.state = 98;
				this.expression();
				this.state = 99;
				this.match(XCalcParser.RBRKT);
				}
				break;
			case XCalcParser.LCURLY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 101;
				this.match(XCalcParser.LCURLY);
				this.state = 102;
				this.expression();
				this.state = 103;
				this.match(XCalcParser.RCURLY);
				}
				break;
			case XCalcParser.PIPE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 105;
				this.match(XCalcParser.PIPE);
				this.state = 106;
				this.signedAtom();
				this.state = 107;
				this.match(XCalcParser.PIPE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XCalcParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(XCalcParser.FN);
			this.state = 112;
			this.match(XCalcParser.LPAREN);
			this.state = 113;
			this.expression();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XCalcParser.COMMA) {
				{
				this.state = 114;
				this.match(XCalcParser.COMMA);
				this.state = 115;
				this.expression();
				}
			}

			this.state = 118;
			this.match(XCalcParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relOp(): RelOpContext {
		let _localctx: RelOpContext = new RelOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XCalcParser.RULE_relOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XCalcParser.GT) | (1 << XCalcParser.GTE) | (1 << XCalcParser.LT) | (1 << XCalcParser.LTE) | (1 << XCalcParser.NE) | (1 << XCalcParser.EQ))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F}\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x05\x02\x1B\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x06\x03\"\n" +
		"\x03\r\x03\x0E\x03#\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03*\n\x03\r\x03" +
		"\x0E\x03+\x05\x03.\n\x03\x03\x04\x03\x04\x03\x04\x07\x043\n\x04\f\x04" +
		"\x0E\x046\v\x04\x03\x05\x03\x05\x03\x05\x07\x05;\n\x05\f\x05\x0E\x05>" +
		"\v\x05\x03\x06\x03\x06\x03\x06\x07\x06C\n\x06\f\x06\x0E\x06F\v\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07N\n\x07\x03\b\x03" +
		"\b\x05\bR\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n[\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\np\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\vw\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x02\x06\x03\x02\b\t\x04\x02\n\v\x0E\x0E\x03\x02\x04\x06\x03\x02\x19" +
		"\x1E\x02\x82\x02\x1A\x03\x02\x02\x02\x04-\x03\x02\x02\x02\x06/\x03\x02" +
		"\x02\x02\b7\x03\x02\x02\x02\n?\x03\x02\x02\x02\fM\x03\x02\x02\x02\x0E" +
		"Q\x03\x02\x02\x02\x10S\x03\x02\x02\x02\x12o\x03\x02\x02\x02\x14q\x03\x02" +
		"\x02\x02\x16z\x03\x02\x02\x02\x18\x1B\x05\x06\x04\x02\x19\x1B\x05\x04" +
		"\x03\x02\x1A\x18\x03\x02\x02\x02\x1A\x19\x03\x02\x02\x02\x1B\x1C\x03\x02" +
		"\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03\x02\x02\x02\x1E!\x05\x06" +
		"\x04\x02\x1F \x07\x0F\x02\x02 \"\x05\x06\x04\x02!\x1F\x03\x02\x02\x02" +
		"\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$.\x03\x02\x02" +
		"\x02%)\x05\x06\x04\x02&\'\x05\x16\f\x02\'(\x05\x06\x04\x02(*\x03\x02\x02" +
		"\x02)&\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02" +
		"\x02,.\x03\x02\x02\x02-\x1E\x03\x02\x02\x02-%\x03\x02\x02\x02.\x05\x03" +
		"\x02\x02\x02/4\x05\b\x05\x0201\t\x02\x02\x0213\x05\b\x05\x0220\x03\x02" +
		"\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x025\x07\x03" +
		"\x02\x02\x0264\x03\x02\x02\x027<\x05\n\x06\x0289\t\x03\x02\x029;\x05\n" +
		"\x06\x02:8\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02" +
		"\x02\x02=\t\x03\x02\x02\x02><\x03\x02\x02\x02?D\x05\f\x07\x02@A\x07\f" +
		"\x02\x02AC\x05\f\x07\x02B@\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02DE\x03\x02\x02\x02E\v\x03\x02\x02\x02FD\x03\x02\x02\x02GH\x07" +
		"\t\x02\x02HN\x05\f\x07\x02IJ\x07\b\x02\x02JN\x05\f\x07\x02KN\x05\x14\v" +
		"\x02LN\x05\x0E\b\x02MG\x03\x02\x02\x02MI\x03\x02\x02\x02MK\x03\x02\x02" +
		"\x02ML\x03\x02\x02\x02N\r\x03\x02\x02\x02OR\x05\x10\t\x02PR\x05\x12\n" +
		"\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\x0F\x03\x02\x02\x02ST\t\x04" +
		"\x02\x02T\x11\x03\x02\x02\x02UV\x07\r\x02\x02VZ\x07\x10\x02\x02WX\x05" +
		"\x06\x04\x02XY\x07\x18\x02\x02Y[\x03\x02\x02\x02ZW\x03\x02\x02\x02Z[\x03" +
		"\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\x06\x04\x02]^\x07\x11\x02\x02^" +
		"p\x03\x02\x02\x02_`\x07\x10\x02\x02`a\x05\x06\x04\x02ab\x07\x11\x02\x02" +
		"bp\x03\x02\x02\x02cd\x07\x12\x02\x02de\x05\x06\x04\x02ef\x07\x13\x02\x02" +
		"fp\x03\x02\x02\x02gh\x07\x14\x02\x02hi\x05\x06\x04\x02ij\x07\x15\x02\x02" +
		"jp\x03\x02\x02\x02kl\x07\x16\x02\x02lm\x05\f\x07\x02mn\x07\x16\x02\x02" +
		"np\x03\x02\x02\x02oU\x03\x02\x02\x02o_\x03\x02\x02\x02oc\x03\x02\x02\x02" +
		"og\x03\x02\x02\x02ok\x03\x02\x02\x02p\x13\x03\x02\x02\x02qr\x07\x03\x02" +
		"\x02rs\x07\x10\x02\x02sv\x05\x06\x04\x02tu\x07\x17\x02\x02uw\x05\x06\x04" +
		"\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07\x11\x02" +
		"\x02y\x15\x03\x02\x02\x02z{\t\x05\x02\x02{\x17\x03\x02\x02\x02\x0E\x1A" +
		"#+-4<DMQZov";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XCalcParser.__ATN) {
			XCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XCalcParser._serializedATN));
		}

		return XCalcParser.__ATN;
	}

}

export class XcalcContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(XCalcParser.EOF, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public equation(): EquationContext | undefined {
		return this.tryGetRuleContext(0, EquationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_xcalc; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterXcalc) {
			listener.enterXcalc(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitXcalc) {
			listener.exitXcalc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitXcalc) {
			return visitor.visitXcalc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_equation; }
	public copyFrom(ctx: EquationContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentContext extends EquationContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.EQUALS);
		} else {
			return this.getToken(XCalcParser.EQUALS, i);
		}
	}
	constructor(ctx: EquationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityContext extends EquationContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public relOp(): RelOpContext[];
	public relOp(i: number): RelOpContext;
	public relOp(i?: number): RelOpContext | RelOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelOpContext);
		} else {
			return this.getRuleContext(i, RelOpContext);
		}
	}
	constructor(ctx: EquationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterEquality) {
			listener.enterEquality(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitEquality) {
			listener.exitEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitEquality) {
			return visitor.visitEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public multExpr(): MultExprContext[];
	public multExpr(i: number): MultExprContext;
	public multExpr(i?: number): MultExprContext | MultExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultExprContext);
		} else {
			return this.getRuleContext(i, MultExprContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.PLUS);
		} else {
			return this.getToken(XCalcParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.MINUS);
		} else {
			return this.getToken(XCalcParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_expression; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultExprContext extends ParserRuleContext {
	public expExpr(): ExpExprContext[];
	public expExpr(i: number): ExpExprContext;
	public expExpr(i?: number): ExpExprContext | ExpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpExprContext);
		} else {
			return this.getRuleContext(i, ExpExprContext);
		}
	}
	public MULT(): TerminalNode[];
	public MULT(i: number): TerminalNode;
	public MULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.MULT);
		} else {
			return this.getToken(XCalcParser.MULT, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.DIV);
		} else {
			return this.getToken(XCalcParser.DIV, i);
		}
	}
	public MODULO(): TerminalNode[];
	public MODULO(i: number): TerminalNode;
	public MODULO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.MODULO);
		} else {
			return this.getToken(XCalcParser.MODULO, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_multExpr; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterMultExpr) {
			listener.enterMultExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitMultExpr) {
			listener.exitMultExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitMultExpr) {
			return visitor.visitMultExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpExprContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext[];
	public signedAtom(i: number): SignedAtomContext;
	public signedAtom(i?: number): SignedAtomContext | SignedAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignedAtomContext);
		} else {
			return this.getRuleContext(i, SignedAtomContext);
		}
	}
	public POWER(): TerminalNode[];
	public POWER(i: number): TerminalNode;
	public POWER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.POWER);
		} else {
			return this.getToken(XCalcParser.POWER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_expExpr; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterExpExpr) {
			listener.enterExpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitExpExpr) {
			listener.exitExpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitExpExpr) {
			return visitor.visitExpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedAtomContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.PLUS, 0); }
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.MINUS, 0); }
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_signedAtom; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterSignedAtom) {
			listener.enterSignedAtom(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitSignedAtom) {
			listener.exitSignedAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitSignedAtom) {
			return visitor.visitSignedAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_atom; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.NUMBER, 0); }
	public CONSTANT(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.CONSTANT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_term; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public _op: Token;
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.RPAREN, 0); }
	public ROOT(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.ROOT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.AMPERSAND, 0); }
	public LBRKT(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.LBRKT, 0); }
	public RBRKT(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.RBRKT, 0); }
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.RCURLY, 0); }
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XCalcParser.PIPE);
		} else {
			return this.getToken(XCalcParser.PIPE, i);
		}
	}
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_group; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(XCalcParser.FN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(XCalcParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(XCalcParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_func; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelOpContext extends ParserRuleContext {
	public GT(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.GTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.LTE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.NE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_relOp; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterRelOp) {
			listener.enterRelOp(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitRelOp) {
			listener.exitRelOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitRelOp) {
			return visitor.visitRelOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


