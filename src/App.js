import React,{useState} from "react";
import Header from "./Component/Header/Header";
import Brand from "./Component/Brand/Brand";
import StoreItem from "./Component/Store/Store";
import CartContent from "./Component/Cart/CartContent";
import CartProvider from "./Component/Context/CartProvider";

function App() {

  const [cartdiaplay,setcart]=useState(false)

  const cartbuttonhandler=()=>{
    setcart(true);
  }
  const cartclosebuttonhandler=()=>{
    setcart(false);
  }


  return (<CartProvider>
    <div className="container-fluid">
      <Header onshow={cartbuttonhandler}/>
      <Brand/>
      {cartdiaplay && <CartContent onremove={cartclosebuttonhandler}/>}
      <StoreItem/>
    </div>
    </CartProvider>
  );
}

export default App;
