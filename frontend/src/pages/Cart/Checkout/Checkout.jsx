import React, {useContext, useState} from "react";
import {CartContext} from "../../../context/cartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const {getTotalPrice} = useContext(CartContext);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleShippingChange = (event) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);

    if (optionValue === "option1") {
      setShippingCost(0);
    } else if (optionValue === "option2") {
      setShippingCost(15);
    }
  };

  const subtotal = getTotalPrice();
  const total = subtotal + shippingCost;

  return (
    <div className={styles.cart_ship_method}>
      <div className={styles.cart_ship_method_title}>
        <p>Cart summary</p>
      </div>

      <label className={styles.cart_ship_method_radio}>
        <input
          type="radio"
          name="shippingOption"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleShippingChange}
        />
        Free shipping $0.00
      </label>

      <label className={styles.cart_ship_method_radio}>
        <input
          type="radio"
          name="shippingOption"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleShippingChange}
        />
        Express shipping +$15.00
      </label>

      <div className={styles.cart_ship_subtotal}>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.cart_ship_subtotal}>
        <span>Shipping</span>
        <span>${shippingCost.toFixed(2)}</span>
      </div>

      <div className={styles.cart_ship_subtotal}>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <input
        className={styles.cart_ship_checkout_btn}
        type="button"
        value="Checkout"
      />
    </div>
  );
};

export default Checkout;
