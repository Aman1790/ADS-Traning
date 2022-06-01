import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import HighlightedQuote from '../quotes/HighlightedQuote'
import Comments from '../comments/Comments';
import NotFound from './NotFound';

export const Dummy =[
    { id:'1', author:'Max' , text:'Learning React is Fun'    },
    { id:'2', author:'Max' , text:'Learning React is Not Fun'    },
]

const QuoteDetail = () => {
const params = useParams();

const quote = Dummy.find(quote=>  quote.id == params.quoteId)
if(!quote){
return(<NotFound/>)
}


    return (
        <Fragment>
            {/* <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p> */}

<HighlightedQuote text={quote?.text} author={quote?.author}/>

            {console.log(params)}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;