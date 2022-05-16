import { Fragment } from 'react';
import classes from './Header.module.css'
import meals from '../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <button><HeaderCartButton/></button>
            </header>

            <div className={classes['main-image']}>
                <img   src={meals}  alt='A table Full of food' />
            </div>
        </Fragment>
    )
}

export default Header;