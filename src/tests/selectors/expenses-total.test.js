import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return total amount', () => {
    expect(selectExpensesTotal(expenses)).toBe(114195);
})

test('should return 0 if there is no expenses at all', () => {
    expect(selectExpensesTotal([])).toBe(0);
})

test('should correctly add one expense amount', () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(195);
})