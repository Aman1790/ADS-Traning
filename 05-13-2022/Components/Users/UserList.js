import React, { useReducer } from 'react';
import Card from '../UI/Card';

const UserList=(props)=>{
// console.log((Array.isArray(props.Users)),'this is map')
console.log((props.Users),'this is map')
let fgf=props.Users


    return(
        <Card>
           
        <ul>{props.Users.map((user)=>{return(<li key={user.id}>{user.name} ({user.age},years old) </li>)})}</ul>
        
        </Card>
    )
    
}
export default UserList;