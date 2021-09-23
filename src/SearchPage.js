import React, { Component } from 'react'
import request from 'superagent'
import PokeList from './PokeList.js'


export default class SearchPage extends Component {
    state = {
        pokedex: [],
        sortOrder: 'asc',
        query:'',
        isLoading: false,
    }

    componentDidMount = async () => {
        this.fetch()
        }

    fetch = async () => {
        this.setState ({ isLoading : true })
        const response = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=150&sort=id&direction=${this.state.sortOrder}&pokemon=${this.state.query}`)
        this.setState ({
        pokedex: response.body.results,
        isLoading: false
        })
    }

    handleChange = (e) => {
        this.setState({query: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();        
        this.fetch();
    }

    
    render() { 
        console.log(this.state)    
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button>Search!</button>
                </form> 

                {
                this.state.isLoading
                ? <h1>Loading</h1>
                : <PokeList pokedex = {this.state.pokedex} />
                }
            </div>
        )
    }
}
