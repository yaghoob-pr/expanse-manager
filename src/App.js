import Expenses from './components/Expenses.js'
import NewExpense from './components/NewExpense/NewExpense.js';
import './App.css';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12, 
      date:  new Date(2021, 2, 3)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 66.92,
      date:  new Date(2021, 12, 5)

    },
    {
      id: 'e3',
      title: 'Pen',
      amount: 87.12,
      date:  new Date(2021, 8, 23)

    },
    {
      id: 'e4',
      title: 'Book',
      amount: 27.09,
      date:  new Date(2021, 7, 6)

    },
  ]
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
