// Missing.js
import React from "react";
import {Link} from "react-router-dom";
import styles from "./Missing.module.css";

const Missing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops! Page Not Found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist.
        </p>
        <Link to="/" className={styles.link}>
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default Missing;
