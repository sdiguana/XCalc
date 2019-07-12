// Generated from ./ANTLR/XCalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XCalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XCalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `paren`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParen?: (ctx: ParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `curly`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurly?: (ctx: CurlyContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracket`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracket?: (ctx: BracketContext) => Result;

	/**
	 * Visit a parse tree produced by the `absValue`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsValue?: (ctx: AbsValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `power`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by the `root`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiply`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiply?: (ctx: MultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by the `negate`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegate?: (ctx: NegateContext) => Result;

	/**
	 * Visit a parse tree produced by the `divide`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivide?: (ctx: DivideContext) => Result;

	/**
	 * Visit a parse tree produced by the `modulo`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModulo?: (ctx: ModuloContext) => Result;

	/**
	 * Visit a parse tree produced by the `add`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by the `subtract`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtract?: (ctx: SubtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `function`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `val`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVal?: (ctx: ValContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.xcalcExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXcalcExpr?: (ctx: XcalcExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

