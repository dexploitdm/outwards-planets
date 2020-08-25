import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./styles.css";

import About from "./pages/About";
import Topics from "./pages/Topics";
import Header from "./components/base/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
