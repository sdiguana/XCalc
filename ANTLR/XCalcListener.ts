// Generated from ./ANTLR/XCalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParenContext } from "./XCalcParser";
import { CurlyContext } from "./XCalcParser";
import { BracketContext } from "./XCalcParser";
import { AbsValueContext } from "./XCalcParser";
import { PowerContext } from "./XCalcParser";
import { RootContext } from "./XCalcParser";
import { MultiplyContext } from "./XCalcParser";
import { NegateContext } from "./XCalcParser";
import { DivideContext } from "./XCalcParser";
import { ModuloContext } from "./XCalcParser";
import { AddContext } from "./XCalcParser";
import { SubtractContext } from "./XCalcParser";
import { FunctionContext } from "./XCalcParser";
import { ValContext } from "./XCalcParser";
import { AssignmentContext } from "./XCalcParser";
import { XcalcExprContext } from "./XCalcParser";
import { ExprContext } from "./XCalcParser";
import { FuncContext } from "./XCalcParser";
import { ValueContext } from "./XCalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XCalcParser`.
 */
export interface XCalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `paren`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by the `paren`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;

	/**
	 * Enter a parse tree produced by the `curly`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCurly?: (ctx: CurlyContext) => void;
	/**
	 * Exit a parse tree produced by the `curly`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCurly?: (ctx: CurlyContext) => void;

	/**
	 * Enter a parse tree produced by the `bracket`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBracket?: (ctx: BracketContext) => void;
	/**
	 * Exit a parse tree produced by the `bracket`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBracket?: (ctx: BracketContext) => void;

	/**
	 * Enter a parse tree produced by the `absValue`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAbsValue?: (ctx: AbsValueContext) => void;
	/**
	 * Exit a parse tree produced by the `absValue`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAbsValue?: (ctx: AbsValueContext) => void;

	/**
	 * Enter a parse tree produced by the `power`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by the `power`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by the `root`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by the `root`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by the `multiply`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultiply?: (ctx: MultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `multiply`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultiply?: (ctx: MultiplyContext) => void;

	/**
	 * Enter a parse tree produced by the `negate`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNegate?: (ctx: NegateContext) => void;
	/**
	 * Exit a parse tree produced by the `negate`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNegate?: (ctx: NegateContext) => void;

	/**
	 * Enter a parse tree produced by the `divide`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDivide?: (ctx: DivideContext) => void;
	/**
	 * Exit a parse tree produced by the `divide`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDivide?: (ctx: DivideContext) => void;

	/**
	 * Enter a parse tree produced by the `modulo`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterModulo?: (ctx: ModuloContext) => void;
	/**
	 * Exit a parse tree produced by the `modulo`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitModulo?: (ctx: ModuloContext) => void;

	/**
	 * Enter a parse tree produced by the `add`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by the `add`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by the `subtract`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSubtract?: (ctx: SubtractContext) => void;
	/**
	 * Exit a parse tree produced by the `subtract`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSubtract?: (ctx: SubtractContext) => void;

	/**
	 * Enter a parse tree produced by the `function`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `function`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `val`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVal?: (ctx: ValContext) => void;
	/**
	 * Exit a parse tree produced by the `val`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVal?: (ctx: ValContext) => void;

	/**
	 * Enter a parse tree produced by the `assignment`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `assignment`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.xcalcExpr`.
	 * @param ctx the parse tree
	 */
	enterXcalcExpr?: (ctx: XcalcExprContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.xcalcExpr`.
	 * @param ctx the parse tree
	 */
	exitXcalcExpr?: (ctx: XcalcExprContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

