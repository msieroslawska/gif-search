import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import giphyPoweredBy from "./images/poweredByGiphy.gif";
import { TrendingPage } from "./pages/Trending";
import { SearchPage } from "./pages/Search";

export const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <p>
          <Link to="/">Trending</Link>
          {` | `}
          <Link to="/search">Search</Link>
        </p>

        <header className="App-header">Giphy gallery</header>

        <Switch>
          <Route exact path="/">
            <TrendingPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>

        <img src={giphyPoweredBy} alt="Powered By Giphy" />
      </div>
    </Router>
  );
};
