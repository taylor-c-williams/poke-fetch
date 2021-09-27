import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'

export default class DetailPage extends Component {
    state = {
        pokedex: []
    }

    componentDidMount = async () => {
    const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}}`)
    await this.setState({ pokemon: response.body})
    console.log(this.props.match.params.pokemonName)
}
    render() {
        return (
            <div>
                <h1>Welcome to ding dong header page for {this.props.match.params.pokemonName}</h1>

            {/* Preloader */}
            {
            this.state.isLoading
            ?<section className = "loading"><h2> Loading ... </h2></section>
            : <PokeList pokedex = {this.state.pokedex} />
            }    
            </div>
        )
    }
}