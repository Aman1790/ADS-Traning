import { useRef ,useEffect} from 'react';
// import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api'; 
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  // const params =useParams()
const{sendRequest,status,error}=  useHttp(addComment)

const {onAddedcomments }=props;

  useEffect(()=>{
    if(status === 'completed' && !error){
      // onAddedcomments();
    }
  },[status,error,onAddedcomments]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server

    const enteredText = commentTextRef.current.value  
    sendRequest({commentData: {text:enteredText} , quoteId:props.quoteId})
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status==='pending ' && <LoadingSpinner/>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
