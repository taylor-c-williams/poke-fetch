import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <div className = "pokemonCard">
              <ul>             
                <li>

                  <section className = "statsHeader">
                    <Link to = {`/pokemon/${this.props.pokemon}`}> 
                      <img src = {this.props.url_image} alt = {this.props.pokemon}/>
                      <h1>{this.props.pokemon}</h1>
                    </Link>
                    Pokedex Number: {this.props.id}
                  </section>

                </li>
              </ul>
            </div>
        )
    }
}
