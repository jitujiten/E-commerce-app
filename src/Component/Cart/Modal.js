import React from "react";
import "./Modal.css";



const Modal=(props)=>{
 return <div className="row">
   <div className="col-10">
    <div className="cntain">{props.children}</div>
   </div>
 </div>
}


export default Modal;