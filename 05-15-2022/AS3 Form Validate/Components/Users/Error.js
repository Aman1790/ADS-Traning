import React from "react";
import Button from "../UI/Button";
// import Card from '../UI/Card'
import ReactDom from 'react-dom'
const Backdrop =(props)=>{
    return <div onClick={props.onclear} ></div>
};
const ModalOverlay =(props)=>{
    return (
    <div style={{"backgroundColor":"gray"}} >
    <h1> {props.title}</h1>

    <h2>{props.message}</h2>
    <Button onClick={props.toHide} >okay </Button>
    </div>

    )
}

const Error=(props)=>{
    return(
       < React.Fragment>
        {ReactDom.createPortal(<Backdrop onClick={props.onclear}/>, document.getElementById('backdrop-root'))}
        {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message}  toHide={props.onclear}/>, document.getElementById('Modal-root'))}
       
        </React.Fragment>
    )}

    export default Error;