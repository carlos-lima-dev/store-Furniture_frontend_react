import styles from "./sidebar.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../../../context/authContext";
import React, {useContext} from "react";
import {CartContext} from "../../../../../context/cartContext";
const Sidebar = ({openSideBar}) => {
  const {user, logout} = useContext(AuthContext);
  const {getTotalQuantity} = useContext(CartContext);

  const handleLogout = () => {
    logout();
  };

  const totalquantity = getTotalQuantity();

  return (
    <>
      <div className={`${styles.sidebar} ${openSideBar && styles.show}`}>
        <div className={styles.content}>
          <div className={styles.around_icons}>
            <h1 className={styles.title}>3legant.</h1>
            <img
              className={styles.close_btn}
              onClick={openSideBar}
              src="assets\imgs\close.png"
              alt=""
            />
          </div>
          <input type="search" placeholder="Search" className={styles.search} />
          <Link to="/" onClick={openSideBar}>
            <p>Home</p>
          </Link>

          <Link to="/shop" onClick={openSideBar}>
            <p>Shop</p>
          </Link>

          <Link to="/blog" onClick={openSideBar}>
            <p>Blog</p>
          </Link>

          <Link to="/contact" onClick={openSideBar}>
            <p>Contact Us</p>
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.cart_wish}>
            <Link to="/cart" onClick={openSideBar}>
              <div className={styles.around}>
                <span>Cart</span>
                <div className={styles.around_icons}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                      stroke="#141718"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
                      stroke="#141718"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.cart_icon}>{totalquantity}</span>
                </div>
              </div>
            </Link>
            <div>
              {user && (
                <div className={styles.around}>
                  <p>Welcome, {user.name}!</p>
                  <input
                    type="button"
                    className={styles.logout_button}
                    onClick={handleLogout}
                    value={"Log out"}
                  />
                </div>
              )}
            </div>
          </div>

          <Link to="/signin" onClick={openSideBar}>
            <button className={styles.signin_btn}>Sign in</button>
          </Link>

          <div className={styles.social}>
            <img src="assets\imgs\instagram.png" alt="" />
            <img src="assets\imgs\facebook.png" alt="" />
            <img src="assets\imgs\youtube.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
