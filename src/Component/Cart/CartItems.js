import React from "react";
import "./CartItem.css";


const CartItem = (props) => {


  return (
    <div className="row">
      <div className="col-10">
        <div className="item">
          <div className="color">
            <img className="img" alt="color" src={props.imageUrl} />
            <p className="titles">{props.title}</p>
          </div>
          <h6 className="rs">Rs/{props.price}</h6>
          <div className="quantity">
            <p id="quan" className="btn btn-outline-info">
              {props.amount}
            </p>
            <button onClick={props.onRemove}
             className="btn btn-danger">REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
