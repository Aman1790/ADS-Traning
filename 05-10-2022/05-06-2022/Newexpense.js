import Fom from './Forms'

function Newexpense(props) {
    const onsavedataHandler = (entereddata) => {

        const expenseData = {
            ...entereddata,
            id: Math.random().toString()
        }

        props.inputdata(expenseData)

    }
    return (
        <div>
            <Fom onsavedata={onsavedataHandler} />
        </div>
    )

}

export default Newexpense;