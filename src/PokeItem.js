import React, { Component } from 'react'

export default class PokeItem extends Component {

    render() {

        return (
            <div className = "pokemonCard"><ul>
                <li>
                 <span></span>
                  <img src = {this.props.url_image} alt = {this.props.pokemon}/>
                  <span></span>

                  <span></span>
                  <h1>{this.props.pokemon}</h1>
                  <span></span>

                  <span></span>
                  <span>Pokedex Number: {this.props.id}</span>
                  <span></span>
                 
                  <span> type-1 : {this.props.type_1}</span>              
                  <span>type-2 : {this.props.type_2}</span>
                  <span>hp : {this.props.hp}</span>
                  <span>atk : {this.props.attack}</span>
                  <span>def : {this.props.defense}</span>
                  <span>spd : {this.props.speed} </span>
                  <span>sp-atk : {this.props.special_attack}</span>
                  <span>sp-def : {this.props.special_defense}</span>
                  <span>weight : {this.props.weight} </span>
                </li>
                </ul>
            </div>
        )
    }
}
