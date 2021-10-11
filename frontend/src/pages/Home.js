import React from "react";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import SEPractice from "./SE-Practice";
import SubmitArticle from "./Submit-Article";

const Home = () => {
  return (
    <div>
      <h2 className="homepage-title">
        Welcome to the Software Practice Empirical Evidence Database (SEPER)
      </h2>
      <p>Click on a link below to get started</p>
      <Router>
        <div>
          <p>
            <NavLink to="/SEPractice">View all articles</NavLink>
          </p>
          <p>
            <NavLink to="/SubmitArticle">Submit an article</NavLink>
          </p>

          <div className="content">
            <Switch>
              <Route path="/SEPractice" component={SEPractice} />
              <Route path="/SubmitArticle" component={SubmitArticle} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Home;
