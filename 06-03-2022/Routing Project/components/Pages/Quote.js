import { useHistory } from 'react-router-dom'

import { useEffect } from 'react'
import QuoteForm from '../quotes/QuoteForm'
import usehttp from '../../hooks/use-http'
import {addQuote} from '../../lib/api'
const Quote = () => {
    const {SendRequest,status}= usehttp(addQuote)
    const history = useHistory()


const QuoteHandler=(Quotedata)=>{
    SendRequest(Quotedata)
    console.log(Quotedata,'This is my Quote Data')

    useEffect(()=>{
        if(status==='completed'){
            history.push('/quotes')
        }

    },[status,history])
    //   history.push('/quotes')
    }
        return (
        <QuoteForm isloading={status==='pending'} onAddQuote={QuoteHandler}/>
        )

    }
    export default Quote;



