import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact/Contact";
import StaySafe from "./components/StaySafe/StaySafe";
import './main.css'

const Main = () => (
  <div>
    <BrowserRouter>
      <div className="nav__links">
        <a>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Home  /  
          </NavLink>
        </a>
        <a>
          <NavLink to="/staySafe" activeClassName="is-active">
            StaySafe  /
          </NavLink>
        </a>
        <a>
          <NavLink to="/contact" activeClassName="is-active">
            Contact{" "}
          </NavLink>
        </a>
      </div>

      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/staySafe" component={StaySafe} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default Main;
