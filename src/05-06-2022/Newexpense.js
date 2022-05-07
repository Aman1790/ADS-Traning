import Fom from './Forms'

const Newexpense =()=>{
 const onsavedataHandler=(entereddata)=>{
const expenseData={
    ...entereddata,
    id:Math.random().toString()
}
console.log(expenseData)
 }
    return (
        <div>
        <Fom onsavedata={onsavedataHandler} />
        </div>
    )

}

export default Newexpense;