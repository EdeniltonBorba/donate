import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/index.js';
import Board from './pages/board/index.js';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/board">
              <Board />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}