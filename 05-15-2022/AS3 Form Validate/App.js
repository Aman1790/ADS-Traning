import React, { Fragment, useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

  const [userList, setUserList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    console.log(uName, uAge, 'THis is in app')
    setUserList((prev) => {
      console.log(...prev, 'this is prev')
      return [...prev, { name: uName, age: uAge, id: Math.random().toString() }]
    })
    console.log(userList, 'this is su ghjkl')

  }
  console.log(userList, 'bjkl')

  return (
    <Fragment>
      {/* Getting data form th user from Add user.js  */}
      <AddUser onAdduser={AddUserHandler} />

      {/* Sending input Data for Print */}
      <UserList Users={userList} />
    </Fragment>
  );
}

export default App;
