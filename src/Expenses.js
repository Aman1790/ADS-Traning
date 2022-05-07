import './App.css';
import Out from './05-05-2022/ExpenseItem'
import Fom from './05-06-2022/Forms'
function Expense() {
  const ExpenseItem = [
    { date: new Date(2000, 8, 9), car: "Maruti", amount: "$2000" },
    { date: new Date(2001, 7, 7), car: "Light", amount: "$200" },
    { date: new Date(2005, 8, 9), car: "Ford", amount: "$1000" }
  ];
  return (
    <div>
       <div>
                <Fom/>
            </div>
      <Out date={ExpenseItem[0].date} car={ExpenseItem[0].car} amount={ExpenseItem[0].amount}></Out>
      <Out date={ExpenseItem[1].date} car={ExpenseItem[1].car} amount={ExpenseItem[1].amount}></Out>
      <Out date={ExpenseItem[2].date} car={ExpenseItem[2].car} amount={ExpenseItem[2].amount}></Out>
    </div>
  );
}
export default Expense;