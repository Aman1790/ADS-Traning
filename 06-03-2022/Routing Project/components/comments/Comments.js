import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from './CommentsList'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';



const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)

  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddedCommentHandler = useCallback(()=>{
    sendRequest(quoteId)
  },[sendRequest,quoteId])

  let comments;
  if (status === 'pending') {
    comments = (<div><LoadingSpinner /></div>)
  }

  if (status === 'completed' && (loadedComments && loadedComments.length >0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if(status ==='completed' && (!loadedComments || loadedComments.length===0)){
    comments =<p> No Comments Were Added</p>
  }


  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={onAddedCommentHandler} />}
    {comments}
    </section>
  );
};

export default Comments;
