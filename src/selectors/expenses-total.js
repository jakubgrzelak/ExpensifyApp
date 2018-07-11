export default (expenses) => {
    const arrayOfAmounts =  expenses.map((expense) => {
        return expense.amount;
    });
    const sumOfExpenses = (total, amount) => {
        return total + amount; 
    }
    return arrayOfAmounts.reduce(sumOfExpenses, 0);
}
