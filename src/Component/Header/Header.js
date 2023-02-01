import React from "react";
import "./Header.css";
import Cartbutton from "./Cartbutton";

const Header = (props) => {
  return (
    <div className="row">
      <div  className="col-12 " >
        <div id="header">
        <div 
        className="header-left">
          <button id="btn" className="btn btn-link">
            HOME
          </button>
          <button id="btn" className="btn btn-link">
            STORE
          </button>
          <button id="btn" className="btn btn-link">
            ABOUT
          </button>
        </div>
        <div className="header-right">
          <Cartbutton onshowing={props.onshow} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
