import React, { Fragment, useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './NewExpense/ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return ( 
    <Fragment>
      <Card className="expenses">
        
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </Fragment>
  )
}

export default Expenses
