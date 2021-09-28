import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'

export default class DetailPage extends Component {
    state = {
        pokedex: [],
        isLoading:false,
    }

    componentDidMount = async () => {
    await this.setState ({ isLoading : true })
    const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`)
    this.setState({ 
        pokedex: response.body.results,
        isLoading:false
    })
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