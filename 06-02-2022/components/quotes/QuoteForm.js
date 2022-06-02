import { Fragment, useRef,useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering,setIsEntering]=useState()

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({author: enteredAuthor , text:enteredText})
  };
  fetch('https://my-project-78b0c-default-rtdb.firebaseio.com/Book/.json', requestOptions)
      .then(response => response.json())
      // .then(data => this.setState({ postId: data.id }));


    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });


   

  }

  const FocusHandler=()=>{
    setIsEntering(true)
    console.log('focused')
  }

  return (
    <Fragment>
      <Prompt when={isEntering} 
      message={(location)=>'Are you surre You want to exit'}></Prompt>
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler} onFocus={FocusHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;

