import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from './Card'
function Out(props) {
  

    return (
        <div className='main'>
          
        <Card className='had'>
            <div className='dat'>
            <ExpenseDate date={props.date}/>

            </div>
                <div className='nam'>
                    <p>{props.car}</p>

                </div>
                <div className='btn'><button id='but'>{props.amount}</button></div>
        </Card >
        </div>
    )
}

export default Out;