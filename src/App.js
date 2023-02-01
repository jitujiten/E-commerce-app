import React,{useState} from "react";
import Header from "./Component/Header/Header";
import Brand from "./Component/Brand/Brand";
import StoreItem from "./Component/Store/Store";
import CartContent from "./Component/Cart/CartContent";


function App() {

  const [cartdiaplay,setcart]=useState(false)

  const cartbuttonhandler=()=>{
    setcart(true);
  }
  const cartclosebuttonhandler=()=>{
    setcart(false);
  }


  return (
    <div className="container-fluid">
      <Header onshow={cartbuttonhandler}/>
      <Brand/>
      {cartdiaplay && <CartContent onremove={cartclosebuttonhandler}/>}
      <StoreItem/>
    </div>
  );
}

export default App;
