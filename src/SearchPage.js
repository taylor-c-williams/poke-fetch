import React, { Component } from 'react'
import request from 'superagent'
import PokeList from './PokeList.js'


export default class SearchPage extends Component {
    state = {
        pokedex: [],
    }

    componentDidMount = async () => {
        const response = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=150&sort=id&direction=asc')
        this.setState({pokedex:response.body.results})
    }
    
    render() { 
        console.log(this.state)    
        return (
            <div>                

                {/* {
                this.state.pokedex.length === 0
                ? <h1>Loading</h1>
                :this.state.pokedex.map (pokedex => <PokeList pokedex = {this.state.pokedex}
                    /> ) }       */}

              <PokeList pokedex = {this.state.pokedex} />
            </div>
        )
    }
}
