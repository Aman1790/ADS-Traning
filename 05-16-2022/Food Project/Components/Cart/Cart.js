import classes from '../Cart/Cart.module.css'
import Modal from '../UI/Modal'

const Cart = () => {

    const cartItems = <ul className={classes[`cart-items`]}>
        {[{id: 'c1' , name:'Aman', amount:2, price:12.99}].map((item) => { <li>{item.name}</li> })}
        </ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total </span>
                <span>21.05</span>
            </div>

            <div className={classes.actions}>
                <button className={classes[`button--alt`]}> Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;