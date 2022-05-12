
import React from 'react'
import Card from '../UI/Card';
import style from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser =(props)=>{
    const UserHandler=(event)=>{
        event.preventDefault();
   
}
    return(
<Card styling={style.input}>
    <form  onClick={UserHandler}>
    <label value="name">Name</label>
    <input type="text" id="name"  />

    <label value="age">Age</label>
    <input type="number" id="age"/>
    <Button type="submit">Submit</Button>

    </form>

</Card>
    );
}
export default AddUser;