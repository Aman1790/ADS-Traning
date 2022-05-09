const ExpenseFilter =(props)=>{
    const dropdownChangeHandler = (event) => {
        props.onchangeFilter(event.target.value);
      };
    return(
        <div>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
    )
}
export default ExpenseFilter;