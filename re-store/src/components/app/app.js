import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "..//pages/home-page";
import CartPage from "..//pages/cart-page";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return (
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/cart" element={<CartPage />} exact></Route>
      </Routes>
  );
};

export default withBookstoreService()(App);
