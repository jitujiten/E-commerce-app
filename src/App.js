import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useContext, lazy, Suspense } from "react";
import Header from "./Component/Header/Header";
import CartContent from "./Component/Cart/CartContent";
import CartProvider from "./Component/Context/Cart-context/CartProvider";
import Contact from "./Component/Contact/Contact";
import { productsArr } from "./Component/Context/Cart-context/CartProvider";
import AuthContext from "./Component/Context/Auth-Context/Auth-Context";
import Passwordchanger from "./Component/Login/PasswordChange";

const Home = lazy(() => import("./Component/Home/Home"));
const About = lazy(() => import("./Component/About/About"));

const StoreItem = lazy(() => import("./Component/Store/Store"));

const LogIn = lazy(() => import("./Component/Login/Login"));

const ProDescription = lazy(() => import("./Component/ProdDes/ProDescription"));

const Fotter = lazy(() => import("./Component/Fotter/Fotter"));

const Brand = lazy(() => import("./Component/Brand/Brand"));

const loading = (
  <div className="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    </div>
    <div>Loading.....</div>
  </div>
);

const App = () => {
  const [cartdiaplay, setcart] = useState(false);

  const ctx = useContext(AuthContext);

  const isLoggedIn = ctx.isLoggedIn || localStorage.getItem("tokenid");

  const cartbuttonhandler = () => {
    setcart(true);
  };
  const cartclosebuttonhandler = () => {
    setcart(false);
  };

  return (
    <React.Fragment>
      {!isLoggedIn && (
        <Route path="/">
          <Suspense fallback={loading}>
            <LogIn />
          </Suspense>
        </Route>
      )}
      {isLoggedIn && (
        <div className="container-fluid">
          <CartProvider>
            <Header onshow={cartbuttonhandler} />
            <Suspense fallback={loading}>
              <Brand />
            </Suspense>
            {cartdiaplay && <CartContent onremove={cartclosebuttonhandler} />}
            <Switch>
              <Route path="/" exact>
              <Suspense fallback={loading}>
              <Redirect to="/store" />
                </Suspense>
              </Route>

              <Route path="/home">
                <Suspense fallback={loading}>
                  <Home />
                </Suspense>
              </Route>

              <Route path="/store">
                <Suspense fallback={loading}>
                  <StoreItem />
                </Suspense>
              </Route>

              <Route path="/about">
                <Suspense fallback={loading}>
                  <About />
                </Suspense>
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
                    <Suspense fallback={loading}>
                      <ProDescription
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={item.price}
                      />
                    </Suspense>
                  </Route>
                );
              })}
            </Switch>

            <Suspense fallback={loading}>
              <Fotter />
            </Suspense>
          </CartProvider>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
