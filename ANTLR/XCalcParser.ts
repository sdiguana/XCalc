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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly MULT = 30;
	public static readonly POWER = 31;
	public static readonly ROOT = 32;
	public static readonly NUMBER = 33;
	public static readonly E = 34;
	public static readonly STRING = 35;
	public static readonly ID = 36;
	public static readonly PI = 37;
	public static readonly WS = 38;
	public static readonly RULE_xcalcExpr = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_func = 2;
	public static readonly RULE_value = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"xcalcExpr", "expr", "func", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'}'", "'['", "']'", "'|'", "'&'", "'-'", "'/'", 
		"'%'", "'+'", "','", "'='", "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", 
		"'atan'", "'abs'", "'ceil'", "'floor'", "'log10'", "'ln'", "'exp'", "'sqrt'", 
		"'atan2'", "'log'", "'pow'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'\u03C0'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "MULT", "POWER", "ROOT", "NUMBER", "E", "STRING", 
		"ID", "PI", "WS",
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
	public xcalcExpr(): XcalcExprContext {
		let _localctx: XcalcExprContext = new XcalcExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XCalcParser.RULE_xcalcExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.expr(0);
			this.state = 9;
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, XCalcParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 12;
				this.match(XCalcParser.T__0);
				this.state = 13;
				this.expr(0);
				this.state = 14;
				this.match(XCalcParser.T__1);
				}
				break;

			case 2:
				{
				_localctx = new CurlyContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 16;
				this.match(XCalcParser.T__0);
				this.state = 17;
				this.expr(0);
				this.state = 18;
				this.match(XCalcParser.T__2);
				}
				break;

			case 3:
				{
				_localctx = new BracketContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				this.match(XCalcParser.T__3);
				this.state = 21;
				this.expr(0);
				this.state = 22;
				this.match(XCalcParser.T__4);
				}
				break;

			case 4:
				{
				_localctx = new AbsValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.match(XCalcParser.T__5);
				this.state = 25;
				this.expr(0);
				this.state = 26;
				this.match(XCalcParser.T__5);
				}
				break;

			case 5:
				{
				_localctx = new RootContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				(_localctx as RootContext)._op = this.match(XCalcParser.ROOT);
				this.state = 29;
				this.match(XCalcParser.T__0);
				this.state = 33;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 30;
					(_localctx as RootContext)._left = this.expr(0);
					this.state = 31;
					this.match(XCalcParser.T__6);
					}
					break;
				}
				this.state = 35;
				(_localctx as RootContext)._right = this.expr(0);
				this.state = 36;
				this.match(XCalcParser.T__1);
				}
				break;

			case 6:
				{
				_localctx = new NegateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 38;
				this.match(XCalcParser.T__7);
				this.state = 39;
				this.expr(8);
				}
				break;

			case 7:
				{
				_localctx = new FunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 40;
				(_localctx as FunctionContext)._fn = this.func();
				this.state = 41;
				this.match(XCalcParser.T__0);
				this.state = 42;
				(_localctx as FunctionContext)._arg = this.expr(0);
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XCalcParser.T__11) {
					{
					this.state = 43;
					this.match(XCalcParser.T__11);
					this.state = 44;
					(_localctx as FunctionContext)._arg2 = this.expr(0);
					}
				}

				this.state = 47;
				this.match(XCalcParser.T__1);
				}
				break;

			case 8:
				{
				_localctx = new ValContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 49;
				this.value();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 75;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 73;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowerContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 52;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 53;
						(_localctx as PowerContext)._op = this.match(XCalcParser.POWER);
						this.state = 54;
						(_localctx as PowerContext)._right = this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MultiplyContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 55;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 56;
						(_localctx as MultiplyContext)._op = this.match(XCalcParser.MULT);
						this.state = 57;
						(_localctx as MultiplyContext)._right = this.expr(10);
						}
						break;

					case 3:
						{
						_localctx = new DivideContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DivideContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 58;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 59;
						(_localctx as DivideContext)._op = this.match(XCalcParser.T__8);
						this.state = 60;
						(_localctx as DivideContext)._right = this.expr(8);
						}
						break;

					case 4:
						{
						_localctx = new ModuloContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ModuloContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 61;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 62;
						(_localctx as ModuloContext)._op = this.match(XCalcParser.T__9);
						this.state = 63;
						(_localctx as ModuloContext)._right = this.expr(7);
						}
						break;

					case 5:
						{
						_localctx = new AddContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 64;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 65;
						(_localctx as AddContext)._op = this.match(XCalcParser.T__10);
						this.state = 66;
						(_localctx as AddContext)._right = this.expr(6);
						}
						break;

					case 6:
						{
						_localctx = new SubtractContext(new ExprContext(_parentctx, _parentState));
						(_localctx as SubtractContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 67;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 68;
						(_localctx as SubtractContext)._op = this.match(XCalcParser.T__7);
						this.state = 69;
						(_localctx as SubtractContext)._right = this.expr(5);
						}
						break;

					case 7:
						{
						_localctx = new AssignmentContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AssignmentContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XCalcParser.RULE_expr);
						this.state = 70;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 71;
						this.match(XCalcParser.T__12);
						this.state = 72;
						(_localctx as AssignmentContext)._right = this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XCalcParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XCalcParser.T__13) | (1 << XCalcParser.T__14) | (1 << XCalcParser.T__15) | (1 << XCalcParser.T__16) | (1 << XCalcParser.T__17) | (1 << XCalcParser.T__18) | (1 << XCalcParser.T__19) | (1 << XCalcParser.T__20) | (1 << XCalcParser.T__21) | (1 << XCalcParser.T__22) | (1 << XCalcParser.T__23) | (1 << XCalcParser.T__24) | (1 << XCalcParser.T__25) | (1 << XCalcParser.T__26) | (1 << XCalcParser.T__27) | (1 << XCalcParser.T__28))) !== 0))) {
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XCalcParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XCalcParser.NUMBER - 33)) | (1 << (XCalcParser.STRING - 33)) | (1 << (XCalcParser.ID - 33)))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(U\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03$\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x030\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x035\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03L" +
		"\n\x03\f\x03\x0E\x03O\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02" +
		"\x02\x03\x04\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x04\x03\x02\x10\x1F" +
		"\x04\x02##%&\x02`\x02\n\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06P\x03" +
		"\x02\x02\x02\bR\x03\x02\x02\x02\n\v\x05\x04\x03\x02\v\f\x07\x02\x02\x03" +
		"\f\x03\x03\x02\x02\x02\r\x0E\b\x03\x01\x02\x0E\x0F\x07\x03\x02\x02\x0F" +
		"\x10\x05\x04\x03\x02\x10\x11\x07\x04\x02\x02\x115\x03\x02\x02\x02\x12" +
		"\x13\x07\x03\x02\x02\x13\x14\x05\x04\x03\x02\x14\x15\x07\x05\x02\x02\x15" +
		"5\x03\x02\x02\x02\x16\x17\x07\x06\x02\x02\x17\x18\x05\x04\x03\x02\x18" +
		"\x19\x07\x07\x02\x02\x195\x03\x02\x02\x02\x1A\x1B\x07\b\x02\x02\x1B\x1C" +
		"\x05\x04\x03\x02\x1C\x1D\x07\b\x02\x02\x1D5\x03\x02\x02\x02\x1E\x1F\x07" +
		"\"\x02\x02\x1F#\x07\x03\x02\x02 !\x05\x04\x03\x02!\"\x07\t\x02\x02\"$" +
		"\x03\x02\x02\x02# \x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02" +
		"%&\x05\x04\x03\x02&\'\x07\x04\x02\x02\'5\x03\x02\x02\x02()\x07\n\x02\x02" +
		")5\x05\x04\x03\n*+\x05\x06\x04\x02+,\x07\x03\x02\x02,/\x05\x04\x03\x02" +
		"-.\x07\x0E\x02\x02.0\x05\x04\x03\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x02" +
		"01\x03\x02\x02\x0212\x07\x04\x02\x0225\x03\x02\x02\x0235\x05\b\x05\x02" +
		"4\r\x03\x02\x02\x024\x12\x03\x02\x02\x024\x16\x03\x02\x02\x024\x1A\x03" +
		"\x02\x02\x024\x1E\x03\x02\x02\x024(\x03\x02\x02\x024*\x03\x02\x02\x02" +
		"43\x03\x02\x02\x025M\x03\x02\x02\x0267\f\r\x02\x0278\x07!\x02\x028L\x05" +
		"\x04\x03\r9:\f\v\x02\x02:;\x07 \x02\x02;L\x05\x04\x03\f<=\f\t\x02\x02" +
		"=>\x07\v\x02\x02>L\x05\x04\x03\n?@\f\b\x02\x02@A\x07\f\x02\x02AL\x05\x04" +
		"\x03\tBC\f\x07\x02\x02CD\x07\r\x02\x02DL\x05\x04\x03\bEF\f\x06\x02\x02" +
		"FG\x07\n\x02\x02GL\x05\x04\x03\x07HI\f\x03\x02\x02IJ\x07\x0F\x02\x02J" +
		"L\x05\x04\x03\x04K6\x03\x02\x02\x02K9\x03\x02\x02\x02K<\x03\x02\x02\x02" +
		"K?\x03\x02\x02\x02KB\x03\x02\x02\x02KE\x03\x02\x02\x02KH\x03\x02\x02\x02" +
		"LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\x05\x03\x02\x02" +
		"\x02OM\x03\x02\x02\x02PQ\t\x02\x02\x02Q\x07\x03\x02\x02\x02RS\t\x03\x02" +
		"\x02S\t\x03\x02\x02\x02\x07#/4KM";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XCalcParser.__ATN) {
			XCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XCalcParser._serializedATN));
		}

		return XCalcParser.__ATN;
	}

}

export class XcalcExprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(XCalcParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_xcalcExpr; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterXcalcExpr) {
			listener.enterXcalcExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitXcalcExpr) {
			listener.exitXcalcExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitXcalcExpr) {
			return visitor.visitXcalcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterParen) {
			listener.enterParen(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitParen) {
			listener.exitParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitParen) {
			return visitor.visitParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurlyContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterCurly) {
			listener.enterCurly(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitCurly) {
			listener.exitCurly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitCurly) {
			return visitor.visitCurly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterBracket) {
			listener.enterBracket(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitBracket) {
			listener.exitBracket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitBracket) {
			return visitor.visitBracket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsValueContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterAbsValue) {
			listener.enterAbsValue(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitAbsValue) {
			listener.exitAbsValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitAbsValue) {
			return visitor.visitAbsValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public POWER(): TerminalNode { return this.getToken(XCalcParser.POWER, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RootContext extends ExprContext {
	public _op: Token;
	public _left: ExprContext;
	public _right: ExprContext;
	public ROOT(): TerminalNode { return this.getToken(XCalcParser.ROOT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MULT(): TerminalNode { return this.getToken(XCalcParser.MULT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterMultiply) {
			listener.enterMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitMultiply) {
			listener.exitMultiply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitMultiply) {
			return visitor.visitMultiply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegateContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterNegate) {
			listener.enterNegate(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitNegate) {
			listener.exitNegate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitNegate) {
			return visitor.visitNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivideContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterDivide) {
			listener.enterDivide(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitDivide) {
			listener.exitDivide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitDivide) {
			return visitor.visitDivide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuloContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterModulo) {
			listener.enterModulo(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitModulo) {
			listener.exitModulo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitModulo) {
			return visitor.visitModulo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterSubtract) {
			listener.enterSubtract(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitSubtract) {
			listener.exitSubtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitSubtract) {
			return visitor.visitSubtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionContext extends ExprContext {
	public _fn: FuncContext;
	public _arg: ExprContext;
	public _arg2: ExprContext;
	public func(): FuncContext {
		return this.getRuleContext(0, FuncContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValContext extends ExprContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterVal) {
			listener.enterVal(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitVal) {
			listener.exitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitVal) {
			return visitor.visitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentContext extends ExprContext {
	public _left: ExprContext;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
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


export class FuncContext extends ParserRuleContext {
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


export class ValueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XCalcParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XCalcParser.RULE_value; }
	// @Override
	public enterRule(listener: XCalcListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: XCalcListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XCalcVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


