import { useContext,useEffect,useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../Store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
   const[highlighted,setHighlighted]=useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

const{items}=cartCtx;

  const btnclasses= `${classes.button} ${highlighted ? classes.bump: ''}`;

  useEffect(()=>{
    if(items.length ===0 ){
      return;
    }
    setHighlighted(true);
    setTimeout(() => {
      setHighlighted(false);
    }, 300);

return()=>{
  clearTimeout()
}

  },[items]);

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;