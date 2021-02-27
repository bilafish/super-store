import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Deals from "pages/deals";
import Cart from "pages/cart";
import ProductDetails from "pages/productDetails";
import Header from "components/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/deals">
          <Deals />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/item/:itemId">
          <ProductDetails />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
