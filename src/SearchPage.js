import React, { Component } from 'react'
import request from 'superagent'

import PokeList from './PokeList.js'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
    }

    componentDidMount = async () => {
        const response = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=150&sort=id&direction=asc')
        this.setState({pokemon:response.body.results})
        console.log(this.state)
        console.log(this.state.pokemon)


    }
    
    render() {        
        return (
            <div>                
                <PokeList />
            </div>
        )
    }
}
