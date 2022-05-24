import useInput from "./FormHooks/inputFormHooks";


const BasicForm = (props) => {
  const { value: firstNameValue, isvalid: firstNameIsValid, valueChangeHandler: firstNameChangeHandler, inputBlurHandler: firstNameblurHandler, reset: resetFirstName, hasError:firstNameHasError} = useInput(value => value.trim() !== '');
  const { value: lastNameValue, isvalid: lastNameIsValid, valueChangeHandler: lastNameChangeHandler, inputBlurHandler: lastNameblurHandler, reset: resetLastName, hasError:lastNameHasError } = useInput(value => value.trim() !== '');
  const {  value: emailValue, isvalid: emailIsValid, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailblurHandler, reset: resetEmail, hasError:emailHasError} = useInput(value => value.includes('@'));
  
  const firstNameClasses = firstNameHasError ? 'form-control invalid' :'form-control'
  const lastNameClasses = lastNameHasError ? 'form-control invalid' :'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' :'form-control'

 let formIsValid =false ;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid=true;
  }

  const SubmitHandler =event =>{
    event.preventDefault()
if(!formIsValid){
  return;
}
resetFirstName()
resetLastName()
resetEmail()


  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameblurHandler} />
        {firstNameHasError && <p> Please Enter First Name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameblurHandler} />
          {lastNameHasError && <p> Please Enter Last Name</p>}

        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailblurHandler}/>
        {firstNameHasError && <p> Please Enter Valid Email </p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
