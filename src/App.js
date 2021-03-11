import React from 'react';

import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/details/:leagueId">
          <LeagueDetails/>
        </Route>
        <Route  exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <Nomatch/>
        </Route>
      </Switch>
    </Router>
      
    
  );
}

export default App;
