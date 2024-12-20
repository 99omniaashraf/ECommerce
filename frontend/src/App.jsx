import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./layout/Signup";
import Login from "./layout/Login";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Product />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
