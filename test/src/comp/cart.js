import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../redux/cartslice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div>
      <h1>Welcome to cart</h1>
      <p>Total price {totalPrice.toFixed(2)}$ </p>
      <button onClick={() => dispatch(clear())}>Clear cart</button>
      {cart.map((state) => {
        return (
          <div>
            <p>{state.title}</p>
            <p>{state.price}$</p>
            <img style={{ width: "50px" }} src={state.image} alt="" />
            <button onClick={() => dispatch(deleteFromCart(state))}>
              Delete
            </button>
            <p>Quantity:{state.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
