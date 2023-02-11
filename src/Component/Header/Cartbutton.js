import axios from "axios";
import React, { useState } from "react";
import "./Cart.css";





const Cartbutton = (props) => {

  const [displaynumberofitem, setnumberofitem] = useState(0);


  const useremailid = localStorage.getItem("emailid");
  const replacedEmailId = useremailid
    .replace("@", "")
    .replace(".", "")
    .replace("/", "");

    async function fetchData(){
      const res = await axios.get(
        `https://crudcrud.com/api/2710781aab9a431cbf133dfe6de42692/cart${replacedEmailId}`
      );
    
      const numberofitem = res.data.reduce((prvdata, item) => {
        return prvdata + item.amount;
      }, 0);
      setnumberofitem(numberofitem);
    };
    fetchData();

  return (
    <div className="row">
      <div className="col-12">
        <button onClick={props.onshowing} id="cart-btn">
          cart
        </button>
        <span id="counter">{displaynumberofitem}</span>
      </div>
    </div>
  );
};

export default Cartbutton;
