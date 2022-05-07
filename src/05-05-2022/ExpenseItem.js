import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

import Card from './Card'
function Out(props) {
    const [car, newCar] = useState(props.car);
    const [amount,newAmount] =useState(props.amount);

    const eventHandler = () => {
        newCar("Audi");
        newAmount(500000);
    }

    return (
        <div>
           
        <div className='main'>

            <Card className='had'>
                <div className='dat'>
                    <ExpenseDate date={props.date} />

                </div>
                <div className='nam'>
                    <p>{car}</p>

                </div>
                <div className='btn'>
                <button>{amount}</button>
                   </div>
                   <div>
                   <button id='but' onClick={eventHandler}>Top Model</button>
                   </div>
            </Card >
        </div>

        </div>
    )
}

export default Out;