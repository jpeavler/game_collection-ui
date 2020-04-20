import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import BoardGames from './components/BoardGames';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/BoardGames">
            <BoardGames />
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
