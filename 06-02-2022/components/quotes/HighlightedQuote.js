import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  console.log(props,'this si ')
  return (
    <figure className={classes.quote}>
      <p>{props.datatext}</p>
      <figcaption>{props.authortext}</figcaption>
    </figure> 
  );
};

export default HighlightedQuote;
