import Fom from './Forms'

function Newexpense(props) {
    const onsavedataHandler = (entereddata) => {
        console.log(entereddata,'this is entereddata')
        const expenseData = {
            ...entereddata,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.inputdata(expenseData)
    }
    return (
        <div>
            <Fom onsavedata={onsavedataHandler} />
        </div>
    )

}

export default Newexpense;