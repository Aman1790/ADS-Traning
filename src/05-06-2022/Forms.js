import { useState } from 'react'
import './Form.css'
const Fom = ( props ) => {
    const [text, enteredText] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const inputText = (event) => {
        enteredText(event.target.value);
    }

    const inputAmount = (event) => {
        setAmount(event.target.value);

    }

    const inputDate = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData =  {
            texts: text,
            amounts: amount,
            dates: new Date(date)
        };
        console.log(expenseData)
        props.onsavedata(expenseData );
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
            <div className="Inp"><input type="text" placeholder='Text' onChange={inputText} value={text}></input></div>
            <div className="date"><input type="date" min="2020-05-12" max="2022-05-12" onChange={inputDate} value={date}></input></div>
            <div className="amount"><input type="number" min="0.01" step="0.01" placeholder='Amount' onChange={inputAmount} value={amount}></input></div>
            <div className='sub_btn'><button type="submit" onClick={submitHandler}>Submit</button></div>
        </div>
    )
}
export default Fom;
