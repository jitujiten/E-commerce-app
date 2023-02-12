import React, { useContext } from "react";
import CartContext from "../Context/Cart-context/Cart-Context";
import "./Cart.css";

const Cartbutton = (props) => {
  const ctx = useContext(CartContext);

  const totalitemincart = ctx.items.reduce((prvdata, item) => {
    return prvdata + item.amount;
  }, 0);

  return (
    <div className="row">
      <div className="col-12">
        <button onClick={props.onshowing} id="cart-btn">
          cart
        </button>
        <span id="counter">{totalitemincart}</span>
      </div>
    </div>
  );
};

export default Cartbutton;
