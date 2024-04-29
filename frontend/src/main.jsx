import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/authContext";
import {DashBoardProvider} from "./context/dashboardcontext";
import {CartProvider} from "./context/cartContext";
import Adminlogin from "./pages/Admin/Adminlogin";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Missing from "./pages/Missing/missing";
import Blog from "./pages/Blog/Blog";
import Root from "./components/Layout/layout/Root/Root";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/SignUp";
import Signin from "./pages/Signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Home />
      </Root>
    ),
    errorElement: <Missing />,
  },
  {
    path: "/shop",
    element: (
      <Root>
        <Shop />
      </Root>
    ),
  },
  {
    path: "/admin",
    element: <Adminlogin />,
  },
  {
    path: "/blog",
    element: (
      <Root>
        <Blog />
      </Root>
    ),
  },
  {
    path: "/contact",
    element: (
      <Root>
        <Contact />
      </Root>
    ),
  },
  {
    path: "/cart",
    element: (
      <Root>
        <Cart />
      </Root>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <DashBoardProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </DashBoardProvider>
    </AuthProvider>
  </>
);
