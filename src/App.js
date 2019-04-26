import React from "react";
import Login from "./component/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Homepage, Signup } from "./containers";
import { isLoggedIn } from "./utils";
import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
