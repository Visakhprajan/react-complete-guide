import React, {useState} from 'react';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/Expenses/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Toilet paper', amount: 264.67, date: new Date(2021, 6, 17) },
    { id: 'e2', title: 'New Tv', amount: 264.67, date: new Date(2021, 6, 17) },
    { id: 'e3', title: 'Car Insurance', amount: 264.67, date: new Date(2021, 6, 17) },
    { id: 'e4', title: 'New desk(wooden)', amount: 264.67, date: new Date(2021, 6, 17) }
  ];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return (
        [expense, ...prevExpenses]
      )
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
