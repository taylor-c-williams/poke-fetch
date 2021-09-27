import './App.css';
import React, { Component } from 'react'
import request from 'superagent'
import SearchPage from './SearchPage'
import DetailPage from './DetailPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
          path = "/"
          exact
          render = { (routerProps) => <HomePage {...routerProps} />}/>

          <Route
          path = "/SearchPage"
          exact
          render = {(routerProps) => <SearchPage {...routerProps} />}/>

          <Route 
          path = "/pokemon/:pokemonName"
          exact
          render = {(routerProps) => <DetailPage {...routerProps}/>}/>
          
        </Switch>
      </Router>
      <SearchPage />
    </div>
  );
}

export default App;