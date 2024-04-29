import React, {createContext, useState, useEffect} from "react";
import {
  BLOG_API_LOGIN,
  BLOG_API_LOGIN_ADMIN,
  BLOG_API_REGISTER,
} from "../constants/constants";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userAuthorization, setUserAuthorization] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials, rememberMe) => {
    try {
      setLoading(true);
      const response = await fetch(BLOG_API_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const userData = await response.json();
        const userWithoutPassword = userData.user;
        const accessToken = userData.accessToken;

        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userWithoutPassword));
          localStorage.setItem("accessToken", accessToken);
        } else {
          sessionStorage.setItem("user", JSON.stringify(userWithoutPassword));
          sessionStorage.setItem("accessToken", accessToken);
        }

        setUser(userWithoutPassword);
        setLoading(false);
      } else {
        throw new Error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      throw new Error("Error logging in. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (credentials) => {
    try {
      setLoading(true);
      const response = await fetch(BLOG_API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        window.location.href = "/signin";
        setLoading(false);
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (error.response.status === 409) {
        setError("Invalid name, email, or password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("adminAuthorization");
    localStorage.removeItem("adminAccessTokenAuthorization");
    localStorage.removeItem("cartItems");
    setUser(null);
  };
  const logoutAdmin = () => {
    localStorage.removeItem("adminAuthorization");
    localStorage.removeItem("adminAccessTokenAuthorization");
    setUser(null);
    window.location.href = "/";
  };

  const loginAdmin = async (email, password) => {
    try {
      const response = await fetch(BLOG_API_LOGIN_ADMIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("accessToken") ||
            sessionStorage.getItem("accessToken")
          }`,
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const userWithoutPassword = responseData.user;
        const accessToken = responseData.accessToken;
        localStorage.setItem(
          "adminAuthorization",
          JSON.stringify(userWithoutPassword)
        );
        localStorage.setItem("adminAccessTokenAuthorization", accessToken);
        console.log("Response data:", responseData);
        window.location.href = "/dashboard";
      } else {
        throw new Error("Admin Login failed. Please check your credentials.");
      }
    } catch (error) {
      throw new Error("Admin Login failed. Please check your credentials.");
    }
  };
  useEffect(() => {
    const storedUserAuthorization = localStorage.getItem("adminAuthorization");
    if (storedUserAuthorization) {
      setUserAuthorization(true);
    }
  }, []);

  useEffect(() => {
    const storedUser =
      sessionStorage.getItem("user") || localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setError,
        login,
        logout,
        signup,
        loginAdmin,
        userAuthorization,
        logoutAdmin,
        setLoading,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
