import { NavLink } from "react-router-dom";
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
          <NavLink id="btn" className="btn btn-link" to="/home" >
            HOME
          </NavLink>
          <NavLink id="btn" className="btn btn-link"  to="/store" >
            STORE
          </NavLink>
          <NavLink id="btn" className="btn btn-link" to="/about">
            ABOUT
          </NavLink>
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
