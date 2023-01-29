import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Link to="/Cart">
        <div style={{ display: "flex", justifyContent: "end" }}>
          <img
            src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg"
            alt=""
          />
          <p> ({cart.length})</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
