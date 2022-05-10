import { useState } from 'react'
import './Form.css'
const Fom = (props) => {
    const [texts, enteredText] = useState('')
    const [amounts, setAmount] = useState('')
    const [dates, setDate] = useState('')


    const inputText = (event) => {
        enteredText(event.target.value);
    }

    const inputAmount = (event) => {
        setAmount(event.target.value);
    }

    const inputDate = (event) => {
        console.log('in inputdate')
        setDate(event.target.value)
    }
    console.log(dates, 'in forms ')
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            texts: texts,
            amounts: amounts,
            dates: new Date(dates)
        };
        console.log(expenseData)
        props.onsavedata(expenseData);
        enteredText('');
        setDate('');
        setAmount('');

    };

    // const [userInput,setuserInput]=useState({
    //     enteredtext:'',
    //     enteredamount:'',
    //     entereddate:''
    // })

    // const titlechangehandler=()=>{
    //     setuserInput((prevState)=>{
    //         return {...prevState,enteredText : event.target.value};
    //     });

    return (
        <div className="main_form">
            <div className="Inp"><input type="text" placeholder='Text' onChange={inputText} value={texts}></input></div>
            <div className="date"><input type="date" min="2020-05-12" max="2022-05-12" onChange={inputDate} value={dates}></input></div>
            <div className="amount"><input type="number" min="0.01" step="0.01" placeholder='Amount' onChange={inputAmount} value={amounts}></input></div>
            <div className='sub_btn'><button type="submit" onClick={submitHandler}>Submit</button></div>
        </div>
    )
}
export default Fom;
