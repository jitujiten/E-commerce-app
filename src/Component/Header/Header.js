import { NavLink,useHistory } from "react-router-dom";
import React,{useContext} from "react";
import "./Header.css";
import Cartbutton from "./Cartbutton";
import AuthContext from "../Context/Auth-Context/Auth-Context";


const Header = (props) => {
const ctx=useContext(AuthContext);
const history=useHistory();
const logedouthandler=()=>{
  ctx.Logout();
  localStorage.removeItem("tokenid");
  localStorage.removeItem("emailid");
  history.replace("/")
}


  return (
    <div className="row">
      <div className="col-12-md">
        <div id="header">
          <div className="header-left">
            <NavLink id="btn" className="btn btn-link" to="/home">
              HOME
            </NavLink>
            <NavLink id="btn" className="btn btn-link" to="/store">
              STORE
            </NavLink>
            <NavLink id="btn" className="btn btn-link" to="/about">
              ABOUT
            </NavLink>
            <NavLink id="btn" className="btn btn-link" to="/contact">
              CONTACT
            </NavLink>
          </div>
          <div className="header-right">
            <button id="btn" className="btn btn-link" onClick={logedouthandler}>
              <i className="fa fa-sign-out"></i>LogOut
            </button>
            <Cartbutton onshowing={props.onshow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


