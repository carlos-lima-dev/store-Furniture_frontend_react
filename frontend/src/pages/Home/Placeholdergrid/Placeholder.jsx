import styles from "./Placeholder.module.css";
import {Link} from "react-router-dom";
const Placeholder = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}>
        <img src="assets\imgs\placeholder.png" alt="" />
      </div>
      <div className={styles.placeholder_text}>
        <p className={styles.placeholder_text_blue}>SALE UP TO 35% OFF</p>
        <p className={styles.placeholder_text_big}>
          HUNDREDS of New lower prices!
        </p>
        <p className={styles.placeholder_text_small}>
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <div className={styles.placeholder_flex_btn}>
          <Link to="/shop" onClick={scrollToTop}>
            <p className={styles.placeholder_btn}>Shop Now</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M4.16666 10H15.8333"
              stroke="#141718"
              strokeWidth="1.25"
              strokewinecap="round"
              strokewinejoin="round"
            />
            <path
              d="M10.8333 15L15.8333 10"
              stroke="#141718"
              strokeWidth="1.25"
              strokewinecap="round"
              strokewinejoin="round"
            />
            <path
              d="M10.8333 5L15.8333 10"
              stroke="#141718"
              strokeWidth="1.25"
              strokewinecap="round"
              strokewinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
