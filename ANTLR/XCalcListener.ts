// Generated from ./ANTLR/XCalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `XCalcParser`.
 */
export interface XCalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `assignment`
	 * labeled alternative in `XCalcParser.equation`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `assignment`
	 * labeled alternative in `XCalcParser.equation`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `equality`
	 * labeled alternative in `XCalcParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquality?: (ctx: EqualityContext) => void;
	/**
	 * Exit a parse tree produced by the `equality`
	 * labeled alternative in `XCalcParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquality?: (ctx: EqualityContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.xcalc`.
	 * @param ctx the parse tree
	 */
	enterXcalc?: (ctx: XcalcContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.xcalc`.
	 * @param ctx the parse tree
	 */
	exitXcalc?: (ctx: XcalcContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.multExpr`.
	 * @param ctx the parse tree
	 */
	enterMultExpr?: (ctx: MultExprContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.multExpr`.
	 * @param ctx the parse tree
	 */
	exitMultExpr?: (ctx: MultExprContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.expExpr`.
	 * @param ctx the parse tree
	 */
	enterExpExpr?: (ctx: ExpExprContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.expExpr`.
	 * @param ctx the parse tree
	 */
	exitExpExpr?: (ctx: ExpExprContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	enterSignedAtom?: (ctx: SignedAtomContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	exitSignedAtom?: (ctx: SignedAtomContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `XCalcParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

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
	 * Enter a parse tree produced by `XCalcParser.relOp`.
	 * @param ctx the parse tree
	 */
	enterRelOp?: (ctx: RelOpContext) => void;
	/**
	 * Exit a parse tree produced by `XCalcParser.relOp`.
	 * @param ctx the parse tree
	 */
	exitRelOp?: (ctx: RelOpContext) => void;
}

