import axios from "axios";
import React, { useContext ,useEffect,useState} from "react";
import Modal from "./Modal";
import "./CartContent.css";
import CartItem from "./CartItems";
import CartContext from "../Context/Cart-context/Cart-Context";

const CartContent = (props) => {
  
  


  const ctx = useContext(CartContext);

 

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
 
  const useremailid = localStorage.getItem("emailid");
  const replacedEmailId = useremailid
    .replace("@", "")
    .replace(".", "")
    .replace("/", "");

  let updatedTotalamount=0;

  const[cartupdatedamount,setamount]=useState(updatedTotalamount);

  const[cartitems,setcartitems]=useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get(
          `https://crudcrud.com/api/2710781aab9a431cbf133dfe6de42692/cart${replacedEmailId}`
        );
    
      for (var i = 0; i <res.data.length; i++){
        updatedTotalamount += res.data[i].amount * res.data[i].price;
      }
      setamount(updatedTotalamount);
      setcartitems([...res.data]);
    };
    fetchData();
  }, [updatedTotalamount]);
   
  
  
  const cartitem = cartitems.map((item) => {
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
          <h1 className="cart">Total Rs/{cartupdatedamount}</h1>
        </div>
      </Modal>
    </div>
  );
};

export default CartContent;
