import './App.css';
import React, { Component } from 'react'
// import request from 'superagent'
import SearchPage from './SearchPage'
import DetailPage from './DetailPage'
import HomePage from './HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

export default class App extends Component {
  
  render(){
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink
          exact
          activeStyle = {{ backgroundColor: 'grey'}}
          to ="/">
            Home
          </NavLink>

          <NavLink
          exact
          activeStyle = {{ backgroundColor: 'grey'}}
          to ="/SearchPage">
            Pokedex
          </NavLink>
        </header>

        <Switch>
          <Route 
          path = "/"
          exact
          render = {(routerProps) => <HomePage {...routerProps} />}/>

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
    </div>
  );
}}