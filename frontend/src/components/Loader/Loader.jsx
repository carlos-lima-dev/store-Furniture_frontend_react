import styles from "./Loader.module.css";
import React from "react";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
