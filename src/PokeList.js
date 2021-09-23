import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render(){

        return (
            <div>
                {
                    this.props.pokedex.map( pokemon => <PokeItem {...pokemon}
                    key = {pokemon.id} />)
                }


                {/* <PokeItem
                   key= {this.props.pokedex.pokemon}
                   name = {this.props.pokedex.pokemon}
                   number = {this.props.pokedex.id}
                   type-1 = {this.props.pokedex.type_1}
                   type-2 = {this.props.pokedex.type_2}
                   hp = {this.props.pokedex.hp}
                   atk = {this.props.pokedex.attack}
                   def = {this.props.pokedex.defense}
                   sp-atk = {this.props.pokedex.special_attack}
                   sp-def = {this.props.pokedex.special_defense}
                   spd = {this.props.pokedex.speed} 
                   /> */}
            </div>
        )
    }
}
