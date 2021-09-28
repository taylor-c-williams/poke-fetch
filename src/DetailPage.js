import React, { Component } from 'react'
import DetailsItem from './DetailsItem'
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
            <div className = "details">
                {
                    this.state.pokedex.map( pokemon => <DetailsItem {...pokemon}
                    key = {pokemon.id} />)
                }


            {/* Preloader */}
            {
            this.state.isLoading
            ?<section className = "loading"><h2> Loading ... </h2></section>
            : <span></span>
            }    
            </div>
        )
    }
}