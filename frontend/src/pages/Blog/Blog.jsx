import React, {useState, useEffect} from "react";
import Shopheader from "../../components/ShopBlogheader/ShopBlogheader";
import styles from "./Blog.module.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import Blogcard from "../../components/Blogcard/Blogcard";
import Loader from "../../components/Loader/Loader";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? ( // Mostra o Loader durante o carregamento inicial
        <Loader />
      ) : (
        <>
          <div className={styles.content}>
            <Shopheader
              page={"Blog"}
              title={"Our Blog"}
              description={"Home ideas and design inspiration"}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.blog_text}>
              <p>All Blog</p>
            </div>
            <div className={styles.blogpost_grid}>
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
            </div>
          </div>
          <div>
            <Newsletter />
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
