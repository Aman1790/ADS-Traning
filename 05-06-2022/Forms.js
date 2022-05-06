import { useState } from 'react'
import './Form.css'
const Fom =() =>{
    const [text,enteredText]= useState('')

    const inputText =(event) =>{
        console.log("hello");
        enteredText(event.target.value);        

    }
    return(
        <div className="main_form">
            <div className="Inp"><input type = "text"  placeholder='Text' onChange={inputText}></input></div>
            <div className="date"><input type="date" min="2020-05-12"  max="2022-05-12"></input></div>
            <div className="amount"><input type="number" min="0.01" step="0.01" placeholder='Amount'></input></div>
            <div className='sub_btn'><button type="submit">Submit</button></div>
        </div>
    )
}
export default Fom;