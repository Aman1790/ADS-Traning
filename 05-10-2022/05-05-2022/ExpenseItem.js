import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

import Card from './Card'
function Out(props) {
    return (
        <div>

            <div className='main'>

                <Card className='had'>
                    <div className='dat'>
                        <ExpenseDate date={props.dates} />

                    </div>
                    <div className='nam'>
                        <p>{props.texts}</p>

                    </div>
                    <div className='btn'>
                        ${props.amounts}
                    </div>
                    <div>
                        <button id='but'

                        >Top Model</button>
                    </div>
                </Card >
            </div>

        </div>
    )
}

export default Out;