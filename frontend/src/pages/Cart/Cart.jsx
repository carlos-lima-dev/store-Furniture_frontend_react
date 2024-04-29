import styles from "./Cart.module.css";
import Cartproduct from "./Cartproduct/Cartproduct";
import Checkout from "./Checkout/Checkout";
import React, {useContext} from "react";
import {CartContext} from "../../context/cartContext";

const Cart = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className={styles.content}>
      <div className={styles.cart_title}>
        <p>Cart</p>
      </div>
      <div className={styles.cart_steps}>
        <div className={styles.cart_ball_step1}>
          <span>1</span>
          <span>Shopping cart</span>
        </div>
        <div className={styles.cart_ball}>
          <span>2</span>
          <p>Checkout details</p>
        </div>
        <div className={styles.cart_ball}>
          <span>3</span>
          <p>Order complete</p>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className={styles.cart_empty}>
          <p>Oops! It seems like your cart is empty. </p>
          <p>
            {" "}
            Keep exploring our store to find great products and add them to your
            cart.
          </p>
        </div>
      ) : (
        <div className={styles.cart_products_grid}>
          <div>
            <div className={styles.cart_products_header}>
              <div>
                <p>Product</p>
              </div>
              <div className={styles.cart_products_header_flex}>
                <p>Quantity</p>
                <p>Price</p>
                <p>Subtotal</p>
              </div>
            </div>
            {cartItems.map((product) => (
              <Cartproduct key={product._id} product={product} />
            ))}
          </div>
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cart;
