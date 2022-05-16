import React,{useContext} from 'react';
import AuthContext from '../UI/Store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {

  const abc= useContext(AuthContext)
  return (
    // <AuthContext.Consumer>
      // {(abc)=>{
        // return(
          <nav className={classes.nav}>
          <ul>
            {abc.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {abc.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {abc.isLoggedIn && (
              <li>
                <button onClick={abc.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        )
//       }}
   
//     </AuthContext.Consumer>
//   );
};

export default Navigation;
