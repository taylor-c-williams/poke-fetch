import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render(){

        return (
            <div className = "listPage">
                {
                    this.props.pokedex.map( pokemon => <PokeItem {...pokemon}
                    key = {pokemon.id} />)
                }
            </div>
        )
    }
}
