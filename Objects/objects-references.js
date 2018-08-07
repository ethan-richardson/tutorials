let myAccount = {
    name: 'Ethan Richardson',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome(myAccount, 45000)
addIncome(myAccount, 15000)
addExpense(myAccount, 6667)
getAccountSummary(myAccount)
console.log(getAccountSummary(myAccount))