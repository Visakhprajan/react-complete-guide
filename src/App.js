import ExpenseItem from './component/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet paper', amount: 264.67, date: new Date(2021, 6, 17) },
    { id: 'e2', title: 'New Tv', amount: 264.67, date: new Date(2021, 6, 17) },
    { id: 'e3', title: 'Car Insurance', amount: 264.67, date: new Date(2021, 6, 17) },
    { id: 'e4', title: 'New desk(wooden)', amount: 264.67, date: new Date(2021, 6, 17) }
  ];
  return (
    <div className="App">
      <h1>Let's started React</h1>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}> 
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}> 
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}> 
      </ExpenseItem>
    </div>
  );
}

export default App;
