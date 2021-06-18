import Expenses from './component/Expenses/Expenses';

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
