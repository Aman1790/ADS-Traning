import classes from './User.module.css';
import { Component } from 'react';

// const User = (props) => {
//   return 
// };

// export default User;

class User extends Component{
  
  componentWillUnmount(){
    console.log('This is unmounted now')
  }
  
render(){
  return(
    <div>
      <li className={classes.user}>{this.props.name}</li>
    </div>
  )
}}

export default User;