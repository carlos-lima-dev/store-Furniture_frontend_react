import styles from "./Text.module.css";
const Text = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.font_big}>
        <p>Simply Unique/ Simply Better.</p>
      </div>
      <div className={styles.font_small}>
        <p>
          <b>3legant </b>is a gift & decorations store based in HCMC, Vietnam.
          Est since 2019.
        </p>
      </div>
    </div>
  );
};

export default Text;
