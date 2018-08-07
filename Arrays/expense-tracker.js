const account = {
    name: 'Ethan',
    expenses: [],
    income: []
}

const addExpense = function (description, amount) {
    return account.expenses.push({description: description, amount: amount})
}

const addIncome = function(description, amount)  {
    return account.income.push({description: description, amount: amount});
}

const getAccountSummary = function(){
    return `${account.name} has a balance of $${sumIncome - sumExpenses}. $${sumIncome} in income and $${sumExpenses} in expenses.`
}

addExpense('food', 10);
addExpense('haircut', 25);
addIncome('Job', 3000);

const initValue = 0 

const sumExpenses = account.expenses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
}, initValue);

const sumIncome = account.income.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
}, initValue);


console.log(getAccountSummary())

