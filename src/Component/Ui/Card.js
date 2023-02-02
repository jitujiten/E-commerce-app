import "./Card.css";
import Input from "./Input";
import React,{useRef,useContext} from "react";
import CartContext from "../Context/Cart-Context";


const Card = (props) => {

const cartref=useRef();

const ctx=useContext(CartContext);

  const addtocarthandler = (e) => {
    e.preventDefault();
    
   const amounttobeadd=(cartref.current.value);
   const actualnoofamount=+amounttobeadd;

   ctx.AddItem({
    title:props.title,
    amount:actualnoofamount,
    price:props.price,
    id:props.id,
    imageUrl:props.imageUrl
   })
  };

  return (
    <div className="card">
      <h2 className="title">{props.title}</h2>
      <img className="img-fluid w-50" src={props.imageUrl} alt="color" />
      <div className="btncart">
        <p id="price">Rs/-{props.price}</p>
        <form className="for" onSubmit={addtocarthandler}>
          <Input
            ref={cartref}
            input={{
              id: "amount_" + props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button className="btnofcart">
            ADD TO CART
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
