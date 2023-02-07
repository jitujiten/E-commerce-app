import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Component/Header/Header";
import Brand from "./Component/Brand/Brand";
import StoreItem from "./Component/Store/Store";
import CartContent from "./Component/Cart/CartContent";
import CartProvider from "./Component/Context/CartProvider";
import Fotter from "./Component/Fotter/Fotter";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";



function App() {
  const [cartdiaplay, setcart] = useState(false);

  const cartbuttonhandler = () => {
    setcart(true);
  };
  const cartclosebuttonhandler = () => {
    setcart(false);
  };

  return (
    <CartProvider>
      <div className="container-fluid">
        <Header onshow={cartbuttonhandler} />
        <Brand />
        {cartdiaplay && <CartContent onremove={cartclosebuttonhandler} />}
        <Switch>
        
          <Route path="/" exact>
            <Redirect to="/store" />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/store">
            <StoreItem />
          </Route>

          <Route path="/about">
            <About />
          </Route>


          <Route path="/contact">
            <Contact/>
          </Route>

        </Switch>
        <Fotter />
      </div>
    </CartProvider>
  );
}

export default App;
