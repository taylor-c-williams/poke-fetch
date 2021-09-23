import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.length === 0
                        ? <h1>Loading</h1>
                        : this.props.map(pokemon => <pokemon key= {this.props.pokemon}
                            
                            Pokemon = {this.props.pokemon}
                            Number = {this.props.id}
                            Type-1 = {this.props.type_1}
                            Type-2 = {this.props.type_2}
                            HP = {this.props.hp}
                            ATK = {this.props.attack}
                            DEF = {this.props.defense}
                            SP-ATK = {this.props.special_attack}
                            SP-DEF = {this.props.special_defense}
                            SPD = {this.props.speed} /> )                        
                    }

                    <li>             
                        <img src = {this.props.url_image} alt = {this.props.pokemon} />
                    </li>
                </ul>
            </div>
        )
    }
}
