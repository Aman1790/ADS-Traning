import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../Store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [submitting,setSubmitting] =useState(false)
  const [didSubmit,setDidSubmit] =useState(false)
  const cartCtx = useContext(CartContext);
  const [ordered, setordered] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  console.log(cartCtx.items,'"tjdfjk')
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (userData) => {
    setSubmitting(true)
  await fetch('https://my-project-78b0c-default-rtdb.firebaseio.com/Orders.json',
    { method:'POST',
      body:JSON.stringify({
        userData,
        orderItems: cartCtx.items
      })
  });
  setSubmitting(false)
  setDidSubmit(true)
  cartCtx.clearCart();
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setordered(true)
  }

  const cartModal =(<React.Fragment>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>

      </div>
      {ordered && <Checkout onSubmit={submitOrderHandler} onCut={props.onClose} />}
      {!ordered && <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>}
  </React.Fragment>)

  const issubmittingModalContent =<p>Sending Data</p>

  const didSubmitModalContent =<React.Fragment><p>Successfully ordered</p>
  <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
  </React.Fragment>

  return (
    <Modal onClose={props.onClose}>
      { !submitting &&! didSubmit &&cartModal}
      {submitting &&issubmittingModalContent}
      {! submitting &&didSubmit&&didSubmitModalContent }
    </Modal>
  );
};

export default Cart;