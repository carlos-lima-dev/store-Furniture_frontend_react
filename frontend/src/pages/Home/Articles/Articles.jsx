import styles from "./Articles.module.css";
import {Link} from "react-router-dom";

const Articles = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.content}>
      <div className={styles.title_flex}>
        <p>Articles</p>
        <div className={styles.arrow}>
          <Link to="/blog" onClick={scrollToTop}>
            <span>More Articles</span>
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
      <div className={styles.articles_container}>
        <div className={styles.article_card}>
          <img src="assets\imgs\Article.png" alt="" />
          <p className={styles.color_grey}>7 ways to decor your home</p>
          <div className={styles.arrow_flex}>
            <Link to="/blog" onClick={scrollToTop}>
              <p>Read More</p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M4.16666 10H15.8333"
                stroke="#6C7275"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 15L15.8333 10"
                stroke="#6C7275"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10"
                stroke="#6C7275"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={styles.article_card}>
          <img src="assets\imgs\blog2.png" alt="" />
          <p className={styles.color_grey}>Kitchen organization</p>
          <div className={styles.arrow_flex}>
            <Link to="/blog" onClick={scrollToTop}>
              <p>Read More</p>
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
        <div className={styles.article_card}>
          <img src="assets\imgs\blog3.png" alt="" />
          <p className={styles.color_grey}>Decor your bedroom</p>
          <div className={styles.arrow_flex}>
            <Link to="/blog" onClick={scrollToTop}>
              <p>Read More</p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M4.16666 10H15.8333"
                stroke="#6C7275"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 15L15.8333 10"
                stroke="#6C7275"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 5L15.8333 10"
                stroke="#6C7275"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
