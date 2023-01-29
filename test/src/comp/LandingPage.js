import React, { useEffect } from "react";
import { getUsers } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartslice";

const LandingPage = () => {
  const { title } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {title.map((user) => {
        return (
          <div>
            <img style={{ width: "50px" }} src={user.image} alt="" />
            <p>{user.title}</p>
            <p>{user.price}</p>
            <button onClick={() => dispatch(addToCart(user))}>Click me</button>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
