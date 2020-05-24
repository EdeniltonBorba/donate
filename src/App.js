import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Page/Home/index.js';
import GlobalStyle from '../src/styles/Global.js';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}
