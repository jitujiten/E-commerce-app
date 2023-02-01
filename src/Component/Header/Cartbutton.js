import React from "react";
import "./Cart.css";

const Cartbutton = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <button onClick={props.onshowing} id="cart-btn">
          cart
        </button>
        <span id="counter">1</span>
      </div>
    </div>
  );
};

export default Cartbutton;
