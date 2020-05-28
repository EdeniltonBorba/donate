import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/index.js';

export default function App() {
  return (
    <Router>
      <React.Fragment>
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