import React from "react";
import "./Store.css";
import Card from "../Ui/Card";

const productsArr = [
  {
    title: "Colors Blue Red Black",
    id:"e1",
    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    id:"e2",
    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    id:"e3",
    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color Pink Stone",
    id:"e4",
    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

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
