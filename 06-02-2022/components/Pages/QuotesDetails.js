import { Fragment ,useEffect} from 'react';
import { useParams, Route ,Link,useRouteMatch} from 'react-router-dom';
import HighlightedQuote from '../quotes/HighlightedQuote'
import Comments from '../comments/Comments';
import NotFound from './NotFound';
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

// export const Dummy =[
//     { id:'1', author:'Max' , text:'Learning React is Fun'    },
//     { id:'2', author:'Max' , text:'Learning React is Not Fun'    },
// ]

const QuoteDetail = () => {
const params = useParams();
const match = useRouteMatch();
const{quoteId} =params;
const {sendRequest,status, data:loadedQuote ,error}=useHttp(getSingleQuote,true)


useEffect(()=>{
    sendRequest(quoteId)
},[sendRequest,quoteId])

if(status==='pending'){
    return(<LoadingSpinner/>)
}

if(error){
    return{error}
}


// console.log(match)
// const quote = Dummy.find(quote=>  quote.id === params.quoteId)
if(!loadedQuote){
return(<NotFound/>)
}


    return (
        <Fragment>
            {/* <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p> */}
        {/* {console.log(loadedQuote.text ,error,'This is in quotes details')} */}

           <HighlightedQuote datatext={loadedQuote.text} authorText={loadedQuote.author}/>

           <Route path={match.path} exact >

            <Link  to={`/quotes/${params.quoteId}/comments`}>Comments</Link>

           </Route>
        
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;