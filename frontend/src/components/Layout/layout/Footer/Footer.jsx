import styles from "./Footer.module.css";
import {Link} from "react-router-dom";
function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.content}>
      <div className={styles.top_footer}>
        <div className={styles.top_footer_flex_space}>
          <Link to="/" onClick={scrollToTop}>
            <span className={styles.title}>3legant.</span>
          </Link>
          <span className={styles.line}></span>
          <span>Gift & Decoration Store</span>
        </div>
        <div className={styles.top_footer_flex_space}>
          <Link to="/" onClick={scrollToTop}>
            <span>Home</span>
          </Link>
          <Link to="/shop" onClick={scrollToTop}>
            <span>Shop</span>
          </Link>
          <Link to="/blog" onClick={scrollToTop}>
            <span>Blog</span>
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <div className={styles.bottom_footer}>
        <div className={styles.space_text}>
          <span>Copyright © 2023 3legant. All rights reserved</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <div className={styles.space_text_icons}>
          <span>
            <Link to="https://www.instagram.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                />
                <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </span>
          <span>
            <Link to="https://www.facebook.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </span>
          <span>
            <Link to="https://www.youtube.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="18"
                  rx="4"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                  stroke="#FEFEFE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
