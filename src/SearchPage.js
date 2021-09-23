import React, { Component } from 'react'
import request from 'superagent'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
    }

    componentDidMount = async () => {
        const response = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=150&sort=id&direction=asc')
        console.log (response.body.results)
        this.setState({pokemon:response.body})
        console.log(this.state)
    }
    
    render() {
        
        return (
            <div>
                
                gobbledy gook
            </div>
        )
    }
}
