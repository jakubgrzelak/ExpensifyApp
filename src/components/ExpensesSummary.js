import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expesnsesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => (
    <p>Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
);

const mapStateToProps = (state, props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expesnsesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);