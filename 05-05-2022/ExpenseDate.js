import './ExpenseItem.css';
function ExpenseDate(props){
    const date=props.date.toLocaleString('en-us', {month:'long'});
    const day =props.date.toLocaleString('en-us', {day:'2-digit'});
    const year=props.date.getFullYear();
    return(
     <div className="dmain" >
                    <div className="datec">{date}</div>
                    <div className="datec">{year}</div>
                    <div className="datec">{day}</div>
                </div>
    )}

export default ExpenseDate;