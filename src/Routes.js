import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/home";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/deals" component={Home} />
        <Route exact path="/cart" component={Home} />
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
