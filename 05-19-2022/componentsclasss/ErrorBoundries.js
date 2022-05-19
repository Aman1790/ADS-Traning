import { Component } from "react";

class ErrorBoundries extends Component{
constructor(){
    super();
    this.state ={
        haserror:false
    }
}
    componentDidCatch(error){
        this.setState({haserror:true})
    }

    render(){
        if(this.state.haserror){
            return<p>Something is not fine</p>
        }
        return(
         
            this.props.children
        )
    }
}
export default ErrorBoundries;