import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render Expenses summary page correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} numberOfExpenses={expenses.length}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render correctly one expense on Expenses summary page', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} numberOfExpenses={1} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with zero expeses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} numberOfExpenses={0}/>);
    expect(wrapper).toMatchSnapshot();
})