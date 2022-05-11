import Newexpense from './05-06-2022/Newexpense';
import Out from './05-05-2022/ExpenseItem'
import { useState } from 'react';
import ExpenseFilter from './expenseFilter';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020')

  const [ExpenseItem, SetExpense] = useState([
    { id: "e1", dates: new Date(2021, 5, 8), texts: "Kia", amounts: "300" },
    { id: "e2", dates: new Date(2020, 7, 7), texts: "Light", amounts: "200" },
    { id: "e3", dates: new Date(2022, 8, 9), texts: "Ford", amounts: "1000" }
  ]);

  const addEventHandler = (expense) => {

    SetExpense(Prevexpense => {
      return ([expense, ...Prevexpense]);
    });
  }


  const filteredExpenses = ExpenseItem.filter((value) => {
    return value.dates.getFullYear().toString() === filteredYear;
  });

  let toPrint = filteredExpenses.length === 0 ? <p>Not found</p> : filteredExpenses.map(value => {
    return (<Out key={value.id} texts={value.texts} amounts={value.amounts} dates={value.dates} />)
  })

  const filterChangeHandler = (SelectedYear) => {
    setfilteredYear(SelectedYear);
  }

  return (
    <div>
      <Newexpense inputdata={addEventHandler} />
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler} />
      <ExpenseChart expense={filteredExpenses} />
      {toPrint}
    </div>
  );
}
export default Expense;