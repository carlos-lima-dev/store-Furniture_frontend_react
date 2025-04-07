import Card from "../../../components/Card/Card";
import styles from "./Newarrivals.module.css";
import {DashBoardContext} from "../../../context/dashboardcontext";
import React, {useContext, useRef} from "react";
import {Link} from "react-router-dom";

const Newarrivals = () => {
  const {products} = useContext(DashBoardContext);
  const containerRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.title_flex}>
        <p>New Arrivals</p>
        <div className={styles.arrow}>
          <Link to="/shop" onClick={scrollToTop}>
            <span>More Products</span>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M4.16669 10H15.8333"
              stroke="#141718"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8333 15L15.8333 10"
              stroke="#141718"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8333 5L15.8333 10"
              stroke="#141718"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowLeft} onClick={scrollLeft}>
          &larr;
        </button>
        <button className={styles.arrowRight} onClick={scrollRight}>
          &rarr;
        </button>
      </div>
      <div className={styles.products_container} ref={containerRef}>
        {products?.length > 0 ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Newarrivals;
