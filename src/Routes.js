import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/home";
import Deals from "pages/deals";
import Cart from "pages/cart";
import Header from "components/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/deals" component={Deals} />
        <Route exact path="/cart" component={Cart} />
        <Route
          render={() => {
            return <Redirect to={{ pathname: "/home" }} />;
          }}
        />
      </Switch>
    </Router>
  );
};
export default Routes;
