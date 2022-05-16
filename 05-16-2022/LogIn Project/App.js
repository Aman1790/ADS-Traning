import React, { useContext} from 'react';

import Login from './components/Login//Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/UI/Store/auth-context';

function App() {

 const abc= useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
 
  
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
   
  // };

  // const logoutHandler = () => {
   
  //   setIsLoggedIn(false);
  // };

  return (
    
      <React.Fragment>
      <MainHeader  />
      <main>
        {!abc.isLoggedIn && <Login  />}
        {abc.isLoggedIn && <Home />}
      </main>
      </React.Fragment >
   
  );
}

export default App;

