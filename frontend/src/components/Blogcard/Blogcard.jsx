import styles from "./Blogcard.module.css";
const Blogcard = () => {
  return (
    <div className={styles.blogpost_card}>
      <img src="assets\imgs\blogimg.png" alt="" />
      <p>7 ways to decor your home like a professional</p>
      <p>October 16, 2023</p>
    </div>
  );
};

export default Blogcard;
