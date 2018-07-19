import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expesnsesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom'

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseCount === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="login-button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
  
);

const mapStateToProps = (state, props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expesnsesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);