import styles from "./Productgrid.module.css";
import {Link} from "react-router-dom";

const Productgrid = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.Productgrid_sec3}>
      <div className={styles.container_sec3}>
        <div className={styles.image_1__position}>
          <img src="assets\imgs\product1.png" alt="" />
          <div className={styles.image_1__position_abs}>
            <p className={styles.font_grid__text}>Living Room</p>
            <div className={styles.arrow_flex}>
              <Link to="/shop?category=living room" onClick={scrollToTop}>
                <p className={styles.border_under}>Shop Now</p>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M4.16663 10H15.8333"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 15L15.8334 10"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 5L15.8334 10"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.image_2__position}>
          <img src="assets\imgs\product2.png" alt="" />
          <div className={styles.image_2__position_abs}>
            <p className={styles.font_grid__text}>Bedroom</p>
            <div className={styles.arrow_flex}>
              <Link to="/shop?category=bedroom" onClick={scrollToTop}>
                <p className={styles.border_under}>Shop Now</p>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M4.16663 10H15.8333"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 15L15.8334 10"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 5L15.8334 10"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.image_3__position}>
          <img src="assets\imgs\product3.png" alt="" />
          <div className={styles.image_3__position_abs}>
            <p className={styles.font_grid__text}>Kitchen</p>
            <div className={styles.arrow_flex}>
              <Link to="/shop?category=kitchen" onClick={scrollToTop}>
                <p className={styles.border_under}>Shop Now</p>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M4.16663 10H15.8333"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 15L15.8334 10"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 5L15.8334 10"
                  stroke="#121212"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productgrid;
