// Generated from ./ANTLR/XCalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AssignmentContext } from "./XCalcParser";
import { EqualityContext } from "./XCalcParser";
import { XcalcContext } from "./XCalcParser";
import { EquationContext } from "./XCalcParser";
import { ExpressionContext } from "./XCalcParser";
import { MultExprContext } from "./XCalcParser";
import { ExpExprContext } from "./XCalcParser";
import { SignedAtomContext } from "./XCalcParser";
import { AtomContext } from "./XCalcParser";
import { TermContext } from "./XCalcParser";
import { GroupContext } from "./XCalcParser";
import { FuncContext } from "./XCalcParser";
import { RelOpContext } from "./XCalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XCalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XCalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `XCalcParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `equality`
	 * labeled alternative in `XCalcParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality?: (ctx: EqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.xcalc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXcalc?: (ctx: XcalcContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.multExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpr?: (ctx: MultExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.expExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpExpr?: (ctx: ExpExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.signedAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedAtom?: (ctx: SignedAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `XCalcParser.relOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelOp?: (ctx: RelOpContext) => Result;
}

