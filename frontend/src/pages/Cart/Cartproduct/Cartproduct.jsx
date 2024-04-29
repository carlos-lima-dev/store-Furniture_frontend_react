import styles from "./Cartproduct.module.css";
import React, {useContext} from "react";
import {CartContext} from "../../../context/cartContext";

const Cartproduct = ({product}) => {
  const {removeFromCart, increaseQuantity, decreaseQuantity} =
    useContext(CartContext);

  return (
    <div className={styles.cart_product_component}>
      <div className={styles.cart_product_component_flex}>
        <div className={styles.cart_product_image_text}>
          <div>
            <img
              src={`https://store-api-rgq8.onrender.com/${product.image}`}
              alt={product.title}
              className={styles.cart_product_image_size}
            />
          </div>
          <div className={styles.cart_product_component_text}>
            <b>{product.title}</b>
            <p>{product.category}</p>
            <div
              className={styles.cart_product_svg_textalign}
              onClick={() => removeFromCart(product._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className={styles.remove_icon}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                  fill="#6C7275"
                />
              </svg>
              <span>Remove</span>
            </div>
          </div>
        </div>

        <div className={styles.cart_product_add_remove}>
          <div className={styles.cart_product_add_remove_flex}>
            <svg
              onClick={() => decreaseQuantity(product._id)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none">
              <path
                d="M3.22925 8.5H12.5626"
                stroke="#121212"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{product.quantity}</p>
            <svg
              onClick={() => increaseQuantity(product._id)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.375 3.83398C8.375 3.62688 8.20711 3.45898 8 3.45898C7.79289 3.45898 7.625 3.62688 7.625 3.83398V8.12567H3.33325C3.12615 8.12567 2.95825 8.29356 2.95825 8.50067C2.95825 8.70778 3.12615 8.87567 3.33325 8.87567H7.625V13.1673C7.625 13.3744 7.79289 13.5423 8 13.5423C8.20711 13.5423 8.375 13.3744 8.375 13.1673V8.87567H12.6666C12.8737 8.87567 13.0416 8.70778 13.0416 8.50067C13.0416 8.29356 12.8737 8.12567 12.6666 8.12567H8.375V3.83398Z"
                fill="#121212"
              />
            </svg>
          </div>
          <p className={styles.cart_product_add_remove_mobile_none}>
            ${product.price.toFixed(2)}
          </p>
          <p>${(product.price * product.quantity).toFixed(2)} </p>
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
