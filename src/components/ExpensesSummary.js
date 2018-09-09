import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeraljs';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {

	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

	return (
		<div>
			<p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
		</div>

	);

};

const mapStateToProps = (state) => {

	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	const expensesTotal = getExpensesTotal(visibleExpenses);
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal
	};

};

export default connect(mapStateToProps)(ExpensesSummary);