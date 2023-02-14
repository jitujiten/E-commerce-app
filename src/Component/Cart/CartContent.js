import axios from "axios";
import React, {useContext,useState} from "react";
import Modal from "./Modal";
import "./CartContent.css";
import CartItem from "./CartItems";
import CartContext from "../Context/Cart-context/Cart-Context";
import { baseUrl } from "../Context/Cart-context/CartProvider";



const CartContent = (props) => {
  

 

const [stateamount,setamount]=useState(0)


var amountis=0;

 axios.get(`${baseUrl}`).then((res)=>{
    for (var i = 0; i < res.data.length; i++) {
      amountis+=res.data[i].amount*res.data[i].price
       }
       setamount(amountis)
   }).catch((err)=>{
     alert(err)
   })


  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  }


 
  const cartitem = ctx.items.map((item) => {
   
    return (
      <React.Fragment  key={item.id}>
      <div className="cartitem">
        <CartItem
          id={item.id}
          imageUrl={item.imageUrl}
          amount={item.amount}
          price={item.price}
          title={item.title}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      </div>
      <hr></hr>
      </React.Fragment>
    );
  });


  return (
    <div className="row  justify-content-evenly">
      <Modal>
        <div className="col-12">
          <div className="head">
            <h1>CART</h1>
            <button
              onClick={props.onremove}
              id="remove"
              className="btn btn-outline-danger"
            >
              x
            </button>
          </div>
          <div className="cart">
            <h3 className="bordera">ITEM</h3>
            <h3 className="bordera">PRICE</h3>
            <h3 className="bordera">QUANTITY</h3>
          </div>
          {cartitem}
          <h1 className="cart">Total Rs/{stateamount}</h1>
        </div>
      </Modal>
    </div>
  );
};

export default  CartContent;
