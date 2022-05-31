import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigations from '../layout/MainNavigations';

const Layout = (props) => {
  return (
    <Fragment>
       <MainNavigations />
       <main className={classes.main}>{props.children}</main>
      {props.children}
    </Fragment>
  );
};

export default Layout;