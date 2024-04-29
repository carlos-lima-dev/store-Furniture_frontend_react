import styles from "./ShopBlogheader.module.css";
const Shopheader = ({page, title, description}) => {
  return (
    <>
      <div>
        <img
          className={styles.content_big_image}
          src="assets/imgs/shop_image.png"
          alt="Shop Image"
        />
      </div>
      <div className={styles.content_abs}>
        <div className={styles.text_flex_gap}>
          <span>Home</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none">
              <path
                d="M4.58423 3L7.58423 6L4.58423 9"
                stroke="#605F5F"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{page}</span>
        </div>
        <div className={styles.text_font_big}>
          <p>{title}</p>
        </div>
        <div className={styles.text_font_smaller}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Shopheader;
