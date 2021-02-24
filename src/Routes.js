import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/home";
import Deals from "pages/deals";
import Cart from "pages/cart";
const Routes = () => {
  return (
    <Router>
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
