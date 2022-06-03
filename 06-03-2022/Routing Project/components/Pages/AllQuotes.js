import {useEffect} from 'react';
import QuoteList  from "../quotes/QuoteList";
import useHttp from '../../hooks/use-http'
import LoadingSpinner from '../UI/LoadingSpinner';
import { getAllQuotes } from "../../lib/api";
import NotFound from './NotFound';
import NoQuotesFound from '../quotes/NoQuotesFound';



const AllQutoes=()=>{

    const {sendRequest,status, data:loadedQuotes , error }=useHttp(getAllQuotes,true)
  
    useEffect(()=>{
        sendRequest()
    },[sendRequest])

    if(status==='pending'){
        return (<LoadingSpinner/>)
    }

    if(error){
        return {error}
    }
if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
}
    return(
        <QuoteList quotes={loadedQuotes}/>

    )

}

export default AllQutoes;


