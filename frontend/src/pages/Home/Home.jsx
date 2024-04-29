import React, {useState, useEffect} from "react";
import styles from "./Home.module.css";
import Slider from "./Slider/Slider";
import Text from "./Text/Text";
import Productgrid from "./Productgrid/Productgrid";
import Newarrivals from "./Newarrivals/Newarrivals";
import Values from "../../components/Values/Values";
import Placeholder from "./Placeholdergrid/Placeholder";
import Articles from "./Articles/Articles";
import Newsletter from "../../components/Newsletter/Newsletter";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.container}>
            <Slider />
            <Text />
            <Productgrid />
          </div>
          <div className={styles.container_overflow_scroll}>
            <Newarrivals />
          </div>
          <div className={styles.container}>
            <Values />
          </div>
          <div className={styles.container_no_padding}>
            <Placeholder />
          </div>
          <div className={styles.container}>
            <Articles />
          </div>
          <div className={styles.container_no_padding}>
            <Newsletter />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
