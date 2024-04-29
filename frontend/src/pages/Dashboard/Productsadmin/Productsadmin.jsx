import React, {useContext} from "react";
import styles from "./Productsadmin.module.css";
import {DashBoardContext} from "../../../context/dashboardcontext";

function Productsadmin() {
  const {
    products,
    selectedProduct,
    setSelectedProduct,
    newProductDataCreate,
    setNewProductDataCreate,
    newProductDataUpdate,
    setNewProductDataUpdate,
    deleteProduct,
    registerNewProduct,
    updateProduct,
  } = useContext(DashBoardContext);

  const handleInputChangeProducts = (event, formType) => {
    const {name, value, files} = event.target;
    if (formType === "create") {
      setNewProductDataCreate({
        ...newProductDataCreate,
        [name]: files ? files[0] : value,
      });
    } else if (formType === "update") {
      setNewProductDataUpdate({
        ...newProductDataUpdate,
        [name]: files ? files[0] : value,
      });
    }
  };

  const handleProductSelectChange = (event) => {
    const productId = event.target.value;
    const selected = products.find((product) => product._id === productId);
    setSelectedProduct(selected);
    if (selected) {
      setNewProductDataUpdate({
        title: selected.title,
        description: selected.description,
        price: selected.price,
        category: selected.category,
        image: null,
      });
    } else {
      setNewProductDataUpdate({
        title: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
    }
  };
  return (
    <>
      <div className={styles.product_list_container}>
        <h2>Product List</h2>

        <div className={styles.product_cards_container}>
          {products.map((product) => (
            <div key={product._id} className={styles.product_card}>
              <img
                src={`http://localhost:3000/${product.image}`}
                alt="product image"
              />
              <div className={styles.product_details}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <button
                  className={styles.delete_button}
                  onClick={() => deleteProduct(product._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className={styles.h2_font}>Add New Product</h2>
        <form
          className={styles.register_form}
          id="product          Form"
          onSubmit={registerNewProduct}
          encType="multipart/form-data">
          <div className={styles.form_group}>
            <label htmlFor="productName">Name</label>
            <input
              type="text"
              id="productName"
              name="title"
              autoComplete="on"
              value={newProductDataCreate.title}
              onChange={(event) => handleInputChangeProducts(event, "create")}
              required
            />
            <div id="productNameError" className={styles.error_message}></div>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productDescription">Description</label>
            <input
              type="text"
              id="productDescription"
              name="description"
              autoComplete="on"
              value={newProductDataCreate.description}
              onChange={(event) => handleInputChangeProducts(event, "create")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productPrice">Price</label>
            <input
              type="number"
              id="productPrice"
              name="price"
              value={newProductDataCreate.price}
              onChange={(event) => handleInputChangeProducts(event, "create")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productCategory">Category</label>
            <input
              type="text"
              id="productCategory"
              name="category"
              autoComplete="on"
              value={newProductDataCreate.category}
              onChange={(event) => handleInputChangeProducts(event, "create")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productImage">Image</label>
            <input
              type="file"
              id="productImage"
              name="image"
              accept="image/*"
              onChange={(event) => handleInputChangeProducts(event, "create")}
              required
            />
          </div>
          <button className={styles.register_button} type="submit">
            Add Product
          </button>
        </form>
      </div>
      <div className={styles.update_product_container}>
        <h2 className={styles.h2_font}>Update Product</h2>
        <form
          className={styles.update_form}
          onSubmit={updateProduct}
          encType="multipart/form-data">
          <div className={styles.form_group}>
            <label htmlFor="productSelect">Select Product</label>
            <select
              id="productSelect"
              onChange={handleProductSelectChange}
              value={selectedProduct ? selectedProduct._id : ""}>
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="updateProductName">Name</label>
            <input
              type="text"
              id="updateProductName"
              autoComplete="on"
              name="title"
              value={newProductDataUpdate.title}
              onChange={(event) => handleInputChangeProducts(event, "update")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="updateProductDescription">Description</label>
            <input
              type="text"
              id="updateProductDescription"
              autoComplete="on"
              name="description"
              value={newProductDataUpdate.description}
              onChange={(event) => handleInputChangeProducts(event, "update")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="updateProductPrice">Price</label>
            <input
              type="number"
              id="updateProductPrice"
              name="price"
              value={newProductDataUpdate.price}
              onChange={(event) => handleInputChangeProducts(event, "update")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="updateProductCategory">Category</label>
            <input
              type="text"
              id="updateProductCategory"
              autoComplete="on"
              name="category"
              value={newProductDataUpdate.category}
              onChange={(event) => handleInputChangeProducts(event, "update")}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="updateProductImage">Image</label>
            <input
              type="file"
              id="updateProductImage"
              name="image"
              accept="image/*"
              onChange={(event) => handleInputChangeProducts(event, "update")}
            />
          </div>
          <button className={styles.update_button} type="submit">
            Update Product
          </button>
        </form>
      </div>
    </>
  );
}

export default Productsadmin;
