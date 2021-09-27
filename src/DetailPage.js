import React, { Component } from 'react'
import PokeItem from './PokeItem'
import request from 'superagent'

export default class DetailPage extends Component {
    state = {
        pokemon: []
    }

    componentDidMount = async () => {
    const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.characterName}}`)
    this.setState({ pokemon: response.body})
}
    render() {
        console.log(this.props.match.params.characterName)
        return (
            <div>
                <h1>Welcome to ding dong header page for {this.props.match.params.characterName}</h1>

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
