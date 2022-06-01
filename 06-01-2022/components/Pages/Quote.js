import { useHistory } from 'react-router-dom'
import QuoteForm from '../quotes/QuoteForm'
const Quote = () => {

const QuoteHandler=(Quotedata)=>{
    const history = useHistory()
    console.log(Quotedata)
    history.push('/quotes')
}
    return (
       <QuoteForm onAddQuote={QuoteHandler}/>
    )

}
export default Quote;



