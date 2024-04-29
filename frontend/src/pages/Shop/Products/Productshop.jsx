import React, {useContext, useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import styles from "./Productshop.module.css";
import Card from "../../../components/Card/Card";
import {DashBoardContext} from "../../../context/dashboardcontext";

const Productshop = () => {
  const {products} = useContext(DashBoardContext);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All Rooms");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Price");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 8);
  };

  function scrollToTop() {
    setVisibleProducts(8);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setVisibleProducts(8);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    setVisibleProducts(8);
  };

  const filteredProductsByCategory =
    selectedCategory === "All Rooms"
      ? products
      : products.filter(
          (product) =>
            product.category.trim().toLowerCase() ===
            selectedCategory.trim().toLowerCase()
        );

  const priceFilterFunction = (product) => {
    switch (selectedPriceRange) {
      case "$0.00 - 99.99":
        return product.price >= 0 && product.price <= 99.99;
      case "$100.00 - 199.99":
        return product.price >= 100 && product.price <= 199.99;
      case "$200.00 - 299.99":
        return product.price >= 200 && product.price <= 299.99;
      case "$300.00 - 399.99":
        return product.price >= 300 && product.price <= 399.99;
      case "$400.00+":
        return product.price >= 400;
      default:
        return true; // If "All Price" selected, return true for all products
    }
  };

  const filteredByPriceProducts =
    filteredProductsByCategory.filter(priceFilterFunction);

  return (
    <>
      <div>
        <div className={styles.content}>
          <div className={styles.content_column}>
            <label className={styles.select_label} htmlFor="filter-select">
              CATEGORIES
            </label>
            <select
              className={styles.select}
              name="filter"
              id="filter-select"
              onChange={handleCategoryChange}
              value={category ? category : selectedCategory}>
              <option value="All Rooms">All Rooms</option>
              <option value="living room">Living Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>
          <div className={styles.content_column}>
            <label className={styles.select_label} htmlFor="prices_select">
              PRICE
            </label>
            <select
              className={styles.select}
              name="prices"
              id="prices_select"
              onChange={handlePriceRangeChange}
              value={selectedPriceRange}>
              <option value="All Price">All Price</option>
              <option>$0.00 - 99.99</option>
              <option>$100.00 - 199.99</option>
              <option>$200.00 - 299.99</option>
              <option>$300.00 - 399.99</option>
              <option>$400.00+</option>
            </select>
          </div>
        </div>
      </div>
      {filteredByPriceProducts.length > 0 ? (
        <div className={styles.content}>
          {filteredByPriceProducts.slice(0, visibleProducts).map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.no_products}>
          <p>No products found.</p>
        </div>
      )}
      {(visibleProducts < filteredByPriceProducts.length && (
        <div className={styles.btn_show_more_centre}>
          <button
            className={styles.btn_show_more}
            onClick={handleShowMore}
            type="button">
            Show More
          </button>
        </div>
      )) ||
        (visibleProducts > 8 && (
          <div className={styles.btn_show_more_centre}>
            <button
              className={styles.btn_show_more}
              onClick={scrollToTop}
              type="button">
              Back To Top
            </button>
          </div>
        ))}
    </>
  );
};

export default Productshop;
