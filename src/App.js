import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Birthday from './components/birthday';
import Weinfest from './components/weinfest';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path="/birthday">
          <Birthday/>
        </Route>
        <Route path="/weinfest">
          <Weinfest/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
