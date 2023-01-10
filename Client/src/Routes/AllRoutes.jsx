import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutSuccess from "../Components/CheckoutSuccess";

import ResetPassword from "../Components/ResetPassword";
import AboutMe from "../Pages/AboutMe";

import Cart from "../Pages/Cart";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import MyAccount from "../Pages/MyAccount";
import ProductsPage from "../Pages/ProductsPage";
import SignUp from "../Pages/SignUp";
import SingleProductPage from "../Pages/SingleProductPage";
import Trial from "../Pages/Trial";
import PostLoginRoute from "./PostLoginRoute";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <PostLoginRoute>
            <LoginPage />
          </PostLoginRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PostLoginRoute>
            <SignUp />
          </PostLoginRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />

      <Route path="/account" element={<MyAccount />} />
      <Route path="/aboutme" element={<AboutMe />} />

      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
