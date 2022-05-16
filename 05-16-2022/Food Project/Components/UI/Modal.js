import classes from './Modal.module.css'
import ReactDom from 'react-dom'
import { Fragment } from 'react'


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}>

        </div>
    )
}


const Modaloverlay = (props) => {
    return (

        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )

}

const portalElement=document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
         
          

            {ReactDom.createPortal(<Backdrop />,portalElement)}

            {ReactDom.createPortal(<Modaloverlay >{props.children}</Modaloverlay>,portalElement)}
        </Fragment>
    )
}
export default Modal;