import { useParams } from "react-router-dom";
import { Fragment } from "react";
const QuotesDetails= ()=>{
const paramas= useParams()
    return(
        <Fragment>
        <h1>All Quotes Details are here</h1>
        {paramas.quoteId}
        </Fragment>
    )

}

export default QuotesDetails ;