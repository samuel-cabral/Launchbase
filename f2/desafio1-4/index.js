const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

// Adicionar transações
//  essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:
function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type == "credit") {
    user.balance = user.balance + transaction.value;
  } else {
    user.balance = user.balance - transaction.value;
  }
}

function getHigherTransactionByType(transactionType) {
  let higherTransaction;
  let higherValue = 0;
  for (let transaction of user.transactions) {
    if (
      transaction.type == transactionType &&
      transaction.value > higherValue
    ) {
      higherTransaction = transaction;
    }
  }

  return higherTransaction;
}

function getAverageTransactionValue() {
  let transactionValues = [];
  let totalValue = 0;
  let average;

  for (let transaction of user.transactions) {
    transactionValues.push(transaction.value);
    totalValue = totalValue + transaction.value;
  }
  average = totalValue / transactionValues.length;

  return average;
}

function getTransactionsCount() {
  
  let numberOfTransactions = {
    credit: 0,
    debit: 0,
  }

  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') {
      numberOfTransactions.credit += 1
    } else {
      numberOfTransactions.debit += 1
    }
  }

  // console.log(numberOfTransactions) -> só para mostrar no console
  return numberOfTransactions
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }