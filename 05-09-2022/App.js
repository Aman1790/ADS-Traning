import Newexpense from './05-06-2022/Newexpense';
import Expenses from './Expenses'
function App() {

  
  const addExpenseHandler=(ExpenseItem)=>{
console.log(ExpenseItem)
  }
  return(
    <div>
      <Newexpense onaddExpense={addExpenseHandler}/>
      <Expenses/>
    
      {/* <Expenses items={Expenses}/> */}
    </div>
  )
}
export default App;
