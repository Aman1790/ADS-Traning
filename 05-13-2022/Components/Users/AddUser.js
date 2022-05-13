
import React, { useState } from 'react'
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import Error from './Error';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

const [error,setError]=useState();
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');

    const UserHandler = (event) => {
        event.preventDefault();
        console.log("'inside button")
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError ({title:'An Error occured' ,message:'Enter a valid Input'});
            return;
        }
        console.log(enteredUsername, enteredAge, "This si sending")
        props.onAdduser(enteredUsername, enteredAge);


        
        setEnteredAge('');
        setEnteredUsername('');


    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
       

    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
      
    }

const errorHandler=()=>{
    setError(null);
}

    return (
      <Wrapper>
        {error &&  <Error message={error.title} title ={error.message} onclear={errorHandler}/>}
           <Card styling={style.input}>
            <form onSubmit={UserHandler}>
                <label value="name">Name</label>
                <input type="text" value={enteredUsername} id="name" onChange={usernameChangeHandler} />

                <label value="age" >Age</label>
                <input type="number"  value={enteredAge} id="age" onChange={ageChangeHandler} />
                <Button type="submit">Submit</Button>

            </form>

        </Card>
        </Wrapper> 
    );
}
export default AddUser;