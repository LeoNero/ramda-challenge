// Crie uma função "add10" que some 10 em um número.
const add10 = R.add(10)
add10(5)

// Crie uma função que receba um numero, 
// some 30 depois multiplique o resultado por 2
const add30 = R.add(30)
const double = R.multiply(2)
const addAndDouble = R.pipe(add30, double)
addAndDouble(5)

// Crie uma função que receba uma transação e retorne o amount dela.
const transaction = { id: 12345, amount: 5000 }
const getAmountProperty = R.prop('amount')
getAmountProperty(transaction)


// Dada uma lista de transações, 
// ache a transação com id 1337 e retorne o amount dela;
const transactions = [
  { id: 12345, amount: 2500 },
  { id: 1337, amount: 1500 },
  { id: 2345678, amount: 3550 },
  { id: 54321, amount: 1200 },
]

const getTransactionById = (id) => {  
  const filteredList = R.find(R.propEq('id', id))
  const filteredAmount = R.prop('amount')

  return R.pipe(filteredList, filteredAmount)
}

getTransactionById(1337)(transactions)

// Com a mesma lista acima, crie uma 
// função que some o amount de todas as transações com id maior que 50000

const isItOver50000 = x => x.id > 50000
const filteredList = R.filter(isItOver50000)

const sumAmount = R.pipe(filteredList, R.map(R.prop('amount')), R.sum)
sumAmount(transactions)
