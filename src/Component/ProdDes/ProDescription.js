import "./ProDes.css";
import Input from "../Ui/Input";
import React, { useRef, useContext } from "react";
import CartContext from "../Context/Cart-context/Cart-Context";

const ProDescription = (props) => {
  const cartref = useRef();

  const ctx = useContext(CartContext);

  const addtocarthandler = (e) => {
    e.preventDefault();

    const amounttobeadd = cartref.current.value;
    const actualnoofamount = +amounttobeadd;

    ctx.AddItem({
      title: props.title,
      amount: actualnoofamount,
      price: props.price,
      id: props.id,
      imageUrl: props.imageUrl,
    });
  };

  return (
    <div className="row justify-content-evenly">
      <div className="col-12">
        <h2 className="headingsde mt-2">Product Details</h2>
        <div className="prodetail">
          <img className="image-fluidw-100" src={props.imageUrl} alt="color" />

          <div className="btnscart">
            <h2 className="title">{props.title}title</h2>

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
              <button className="btnofcart">ADD TO CART</button>
            </form>
          </div>
          <div>
            <h2>Ratings & Reviews</h2>
            <button id="but">{Math.floor(Math.random() * 10 * 1)}/10☆</button>
            <p>good</p>
            <p>very good 💕</p>
            <p>Love it 💕</p>
            <p>like it 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDescription;
