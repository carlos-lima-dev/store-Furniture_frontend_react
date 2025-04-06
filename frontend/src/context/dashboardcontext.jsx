import React, {createContext, useState, useEffect} from "react";
import {
  BLOG_API_FETCH_PRODUCTS,
  BLOG_API_FETCH_USERS,
  BLOG_API_REGISTER,
} from "../constants/constants";

export const DashBoardContext = createContext();

export const DashBoardProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserDataCreate, setNewUserDataCreate] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [newUserDataUpdate, setNewUserDataUpdate] = useState({
    name: "",
    email: "",
    role: "USER",
  });
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProductDataCreate, setNewProductDataCreate] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [newProductDataUpdate, setNewProductDataUpdate] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  // USERS LOGIC
  const fetchUsers = async () => {
    try {
      const response = await fetch(BLOG_API_FETCH_USERS);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${BLOG_API_FETCH_USERS}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("accessToken") ||
            sessionStorage.getItem("accessToken")
          }`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      setUsers(users.filter((user) => user._id !== userId));

      if (selectedUser && selectedUser._id === userId) {
        setSelectedUser(null);
        setNewUserDataUpdate({
          name: "",
          email: "",
          role: "USER",
        });
      }

      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const registerNewUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(BLOG_API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserDataCreate),
      });
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
      setNewUserDataCreate({
        name: "",
        email: "",
        password: "",
        role: "USER",
      });
      fetchUsers();
    } catch (error) {
      console.error("Error registering new user:", error);
    }
  };
  const updateUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${BLOG_API_FETCH_USERS}/${selectedUser._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: newUserDataUpdate.name,
            email: newUserDataUpdate.email,
            role: newUserDataUpdate.role,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      setSelectedUser(null);
      setNewUserDataUpdate({
        name: "",
        email: "",
        role: "USER",
      });
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // PRODUCTS LOGIC
  async function fetchProducts() {
    try {
      const response = await fetch(BLOG_API_FETCH_PRODUCTS);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const productsData = await response.json();
      setProducts(productsData.products);
      console.log(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${BLOG_API_FETCH_PRODUCTS}/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("accessToken") ||
            sessionStorage.getItem("accessToken")
          }`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts(products.filter((product) => product._id !== productId));

      if (selectedProduct && selectedProduct._id === productId) {
        setSelectedProduct(null);
        setNewProductDataUpdate({
          title: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
      }

      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const registerNewProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newProductDataCreate.title);
      formData.append("description", newProductDataCreate.description);
      formData.append("price", newProductDataCreate.price);
      formData.append("category", newProductDataCreate.category);
      formData.append("image", newProductDataCreate.image);

      const response = await fetch(BLOG_API_FETCH_PRODUCTS, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("accessToken") ||
            sessionStorage.getItem("accessToken")
          }`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to register product");
      }

      setNewProductDataCreate({
        title: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error registering new product:", error);
    }
  };
  const updateProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newProductDataUpdate.title);
      formData.append("description", newProductDataUpdate.description);
      formData.append("price", newProductDataUpdate.price);
      formData.append("category", newProductDataUpdate.category);
      formData.append("image", newProductDataUpdate.image);

      const response = await fetch(
        `${BLOG_API_FETCH_PRODUCTS}/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("accessToken") ||
              sessionStorage.getItem("accessToken")
            }`,
          },
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      setSelectedProduct(null);
      setNewProductDataUpdate({
        title: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  return (
    <DashBoardContext.Provider
      value={{
        users,
        selectedUser,
        setSelectedUser,
        newUserDataCreate,
        setNewUserDataCreate,
        newUserDataUpdate,
        setNewUserDataUpdate,
        deleteUser,
        registerNewUser,
        updateUser,
        fetchUsers,
        fetchProducts,
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
      }}>
      {children}
    </DashBoardContext.Provider>
  );
};
