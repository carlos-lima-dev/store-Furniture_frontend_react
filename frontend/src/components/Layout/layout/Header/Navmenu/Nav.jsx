import React, {useState, useContext} from "react";
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {CartContext} from "../../../../../context/cartContext";

const Nav = () => {
  const {getTotalQuantity} = useContext(CartContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const totalquantity = getTotalQuantity();
  return (
    <>
      {isSidebarOpen && <Sidebar openSideBar={openSideBar} />}
      <div className={styles.container}>
        <div className={styles.top_menu}>
          <div className={styles.burger_menu_flex}>
            <svg
              id="sidebar"
              xmlns="http://www.w3.org/2000/svg"
              onClick={openSideBar}
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M7 8H17M7 12H17M7 16H17"
                stroke="#141718"
                strokeLinecap="round"
              />
            </svg>
            <Link to="/">
              <h1>3legant.</h1>
            </Link>
          </div>

          <div className={styles.list_flex}>
            <Link to="/">
              <p>Home</p>
            </Link>
            <div className={styles.svg_align}>
              <Link to="/Shop">
                <p>Shop</p>
              </Link>
            </div>
            <div className={styles.svg_align}>
              <Link to="/blog">
                <p>Blog</p>
              </Link>
            </div>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
          </div>
          <div className={styles.icon_list}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.none_icon_mobile}
              fill="none">
              <path
                d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                stroke="#141718"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link to="/signup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={styles.none_icon_mobile}
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                  stroke="#141718"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                  stroke="#141718"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
                  stroke="#141718"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/cart">
              <span>{totalquantity}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
