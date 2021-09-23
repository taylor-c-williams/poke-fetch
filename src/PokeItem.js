import React, { Component } from 'react'

export default class PokeItem extends Component {

    render() {

        return (
            <div className = "pokemonCard"><ul>
                <li>
                <img src = {this.props.url_image} alt = {this.props.pokemon}/>
                <h1>{this.props.pokemon}</h1>
                <p>{this.props.id}</p>
                  <p> type-1 : {this.props.type_1}</p>
                  <p>type-2 : {this.props.type_2}</p>
                  <p>hp : {this.props.hp}</p>
                  <p>atk : {this.props.attack}</p>
                  <p>def : {this.props.defense}</p>
                  <p>sp-atk : {this.props.special_attack}</p>
                  <p>sp-def : {this.props.special_defense}</p>
                  <p>spd : {this.props.speed} </p>
                </li>
                </ul>
            </div>
        )
    }
}
