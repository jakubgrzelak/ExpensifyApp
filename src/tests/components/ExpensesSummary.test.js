import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render Expenses summary page correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={2500} expenseCount={25}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render correctly one expense on Expenses summary page', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={250} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
});
