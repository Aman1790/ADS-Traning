import React,{useContext} from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import AuthContext from '../UI/Store/auth-context';
import classes from './Home.module.css';

const Home = (props) => {
  const autabc=useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onclick={autabc.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;

