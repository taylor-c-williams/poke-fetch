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
        const response = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=801&sort=id&direction=${this.state.sortOrder}&pokemon=${this.state.query}`)
        this.setState ({
        pokedex: response.body.results,
        isLoading: false
        })
    }

    handleInput = (e) => {
        this.setState({query: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();        
        this.fetch();
    }

    handleReset = async (e) => {
        this.setState ({ query: '' })
        this.fetch()
    }

    handleSortOrder = async (e) => {
        this.setState ({ sortOrder: e.target.value})
        this.fetch()
    }

    
    render() { 
        console.log(this.state)    
        return (
            <div> 

                {/* Search Input */}
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInput} />
                <button>Search!</button>
                </form> 

                {/* Reset Button */}
                <form onSubmit={this.handleReset}>
                <button>Reset!</button>
                </form> 

                {/* Sort Order Dropdown */}
                <select onChange = {this.handleSortOrder}>
                    <option value =  "asc" > Ascending </option>
                    <option value =  "desc" > Descending </option>
                </select>              
                



                {
                this.state.isLoading
                ? <h1>Loading</h1>
                : <PokeList pokedex = {this.state.pokedex} />
                }
            </div>
        )
    }
}
