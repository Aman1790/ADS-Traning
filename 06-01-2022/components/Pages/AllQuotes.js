import QuoteList  from "../quotes/QuoteList";


const Dummy =[
    { id:'1', author:'Max' , text:'Learning React is Fun'    },
    { id:'2', author:'Max' , text:'Learning React is Not Fun'    },
]
const AllQutoes=()=>{

  
    return(
        <QuoteList quotes={Dummy}/>

    )

}

export default AllQutoes;

