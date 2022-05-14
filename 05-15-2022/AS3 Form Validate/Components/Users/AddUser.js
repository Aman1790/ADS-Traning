
import React, { useState, useRef } from 'react'
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import Error from './Error';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef =useRef();

    const [error, setError] = useState();
  

    const UserHandler = (event) => {
        event.preventDefault();
        const enteredName= nameInputRef.current.value ;
        const enteredUserAge= ageInputRef.current.value;
        
      
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({ title: 'An Error occured', message: 'Enter a valid Input' });
            return;
        }
        
        props.onAdduser(enteredName, enteredUserAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    }

    const errorHandler = () => {
        setError(null,);
    }

    return (
        <Wrapper>
            {error && <Error message={error.title} title={error.message} onclear={errorHandler}/>}
            <Card styling={style.input}>
                <form onSubmit={UserHandler}>
                    <label value="name">Name</label>
                    <input
                        type="text"
           
                        id="name"
                        
                        ref={nameInputRef} />

                    <label value="age" >Age</label>
                    <input
                        type="number"
                     
                        id="age"
                      
                        ref={ageInputRef}/>
                       
                    <Button type="submit">Submit</Button>

                </form>

            </Card>
        </Wrapper>
    );
}
export default AddUser;