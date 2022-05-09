import Newexpense from './05-06-2022/Newexpense';
import Out from './05-05-2022/ExpenseItem'
import { useState } from 'react';
import ExpenseFilter from './expenseFilter';

const Expense = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020')


  const [ExpenseItem, SetExpense] = useState([
    { id: "e1", dates: new Date(2003, 5, 8), texts: "Kia", amounts: "$300" },
    { id: "e2", dates: new Date(2001, 7, 7), texts: "Light", amounts: "$200" },
    { id: "e3", dates: new Date(2005, 8, 9), texts: "Ford", amounts: "$1000" }
  ]);

  const addEventHandler = (expense) => {
    SetExpense(Prevexpense => {
      return ([expense, ...Prevexpense]);
    });
  
  }


  const filterChangeHandler = (SelectedYear) => {
    setfilteredYear(SelectedYear);
    console.log(SelectedYear);
  }




  return (
    <div>
      <Newexpense inputdata={addEventHandler} />
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler} />
        
        {ExpenseItem.length ===0 ? <p>Not found</p> : ExpenseItem.map(expense => { 
         return(<Out  key={expense.id} texts={expense.texts} amounts={expense.amounts} dates={expense.dates} />)})}

    
    </div>
  );
}
export default Expense;