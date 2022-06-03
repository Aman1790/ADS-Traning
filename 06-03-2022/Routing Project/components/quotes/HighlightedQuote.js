import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {

  return (
    <figure className={classes.quote}>
      <p>{props.datatext}</p>
      <figcaption>{props.authortext}</figcaption>
    </figure> 
  );
};

export default HighlightedQuote;
