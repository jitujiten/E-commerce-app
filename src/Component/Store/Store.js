import React from "react";
import "./Store.css";
import Card from "../Ui/Card";
import { productsArr } from "../Context/Cart-context/CartProvider";


const Store = () => {
  return (
    <div className="row justify-content-evenly">
 
    {productsArr.map((item)=>{
      return <div 
      key={item.id}
      className="col-md-5  mt-4">
        <Card
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      </div>
    })}
   
    </div>
  );
};

export default Store;
