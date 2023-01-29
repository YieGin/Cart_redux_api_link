import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./comp/LandingPage";
import Navbar from "./comp/Navbar";
import Cart from "./comp/cart";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
