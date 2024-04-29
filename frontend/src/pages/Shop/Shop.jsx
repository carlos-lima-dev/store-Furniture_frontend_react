import React, {useState, useEffect} from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import styles from "./Shop.module.css";
import Productshop from "./Products/Productshop";
import ShopBlogheader from "../../components/ShopBlogheader/ShopBlogheader";
import Loader from "../../components/Loader/Loader";

const Shop = () => {
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
            <ShopBlogheader
              page={"Shop"}
              title={"Shop Page"}
              description={"Let’s design the place you always imagined."}
            />
          </div>
          <div className={styles.content}>
            <Productshop />
          </div>
          <div className={styles.container_no_padding}>
            <Newsletter />
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
