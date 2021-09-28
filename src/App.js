import './App.css';
import React, { Component } from 'react'
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
        <header className = "nav">
          <NavLink
          exact
          activeStyle = {{fontWeight: 'bold' }}
          to ="/">
          ◦  Home ◦
          </NavLink>

          <NavLink
          exact
          activeStyle = {{ fontWeight: 'bold'}}
          to ="/SearchPage">
         ◦ Pokedex ◦ 
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