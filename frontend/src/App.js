import React from "react";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";
import SearchArticle from "./pages/Search-Article";
const App = () => {
  return (
    <Router>
      <div>
        <ul className="header">
          <div className="title">
            <h1>SEPER</h1>
          </div>
          <div>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/SEPractice">Select the Practice</NavLink>
            </li>
            <li>
              <NavLink to="/SubmitArticle">Submit an Article</NavLink>
            </li>
            <li>
              <NavLink to="/SearchArticle">Search for an Article</NavLink>
            </li>
          </div>
        </ul>
        <div className="content">
          <Switch>
            <Route path="/SEPractice" component={SEPractice} />
            <Route path="/SubmitArticle" component={SubmitArticle} />
            <Route path="/SearchArticle" component={SearchArticle} />
            <Route exact path="/" component={Home} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
