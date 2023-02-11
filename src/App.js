import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useContext } from "react";
import Header from "./Component/Header/Header";
import Brand from "./Component/Brand/Brand";
import StoreItem from "./Component/Store/Store";
import CartContent from "./Component/Cart/CartContent";
import CartProvider from "./Component/Context/Cart-context/CartProvider";
import Fotter from "./Component/Fotter/Fotter";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import { productsArr } from "./Component/Context/Cart-context/CartProvider";
import ProDescription from "./Component/ProdDes/ProDescription";
import LogIn from "./Component/Login/Login";
import AuthContext from "./Component/Context/Auth-Context/Auth-Context";
import Passwordchanger from "./Component/Login/PasswordChange";


function App() {
  const [cartdiaplay, setcart] = useState(false);

  const ctx = useContext(AuthContext);
  const isLoggedIn = ctx.isLoggedIn ||localStorage.getItem("tokenid");

  const cartbuttonhandler = () => {
    setcart(true);
  };
  const cartclosebuttonhandler = () => {
    setcart(false);
  };

  return (
    <CartProvider>
      {!isLoggedIn && (
        <Route path="/">
          <LogIn />
        </Route>
      )}
      {isLoggedIn && (
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
              <Contact />
            </Route>

            <Route path="/passwordchanger">
              <Passwordchanger />
            </Route>


            {productsArr.map((item) => {
              return (
                <Route key={item.id} path={`/productdetails/${item.id}`}>
                  <ProDescription
                    id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                  />
                </Route>
              );
            })}
          </Switch>
          <Fotter />
        </div>
      )}
    </CartProvider>
  );
}

export default App;
