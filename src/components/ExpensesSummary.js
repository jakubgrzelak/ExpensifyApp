import React from 'react';
import { connect } from 'react-redux';
import expesnsesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <p>Viewing {props.numberOfExpenses} {props.numberOfExpenses === 1 ? 'expense' : 'expenses'} totalling {numeral(expesnsesTotal(props.expenses) / 100).format('$0,0.00')}</p>
);

const mapStateToProps = (state, props) => ({
    expenses: state.expenses,
    numberOfExpenses : state.expenses.length
})

export default connect(mapStateToProps)(ExpensesSummary);