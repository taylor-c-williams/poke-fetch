import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    NavLink
  } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div className = "header">
                <h1>Yee Haw!</h1>

                <h1> <NavLink
                exact
                activeStyle = {{ fontWeight: 'bold'}}
                to ="/SearchPage">
                ◦ Enter ◦ 
                </NavLink>
                </h1>
            </div>
        )
    }
}
