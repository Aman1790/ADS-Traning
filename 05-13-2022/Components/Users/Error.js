import Button from "../UI/Button";
const Error=(props)=>{
    return(
        <div  onClick={props.onclear}>
            <h1> {props.title}</h1>

            <h2>{props.message}</h2>
            <Button>okay</Button>
        </div>
    )}

    export default Error;