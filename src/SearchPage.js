import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import PokeList from './PokeList.js'


export default class SearchPage extends Component {

    state = {
        pokedex: [],
        sortOrder: 'asc',
        query:'',
        isLoading: false,
        type: '',
    }

    componentDidMount = async () => {
       await  this.Pokefetch()
        }

    Pokefetch = async () => {
        await this.setState ({ isLoading : true })

        const response = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=id&direction=${this.state.sortOrder}&type_1=${this.state.type}`)

        // const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${this.state.searchCategory}=${this.state.query}&sort=${this.state.sortCategory}&direction=${this.state.sortOrder}`);


        this.setState ({
        pokedex: response.body.results,
        isLoading: false
        })

        const params = URLSearchParams.toString()
        console.log(params)
    }

    handleInput = (e) => {
        this.setState ({query: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();        
        await this.Pokefetch();
    }

    handleReset = async (e) => {
         this.setState ({ 
            query: '',
            sortOrder: 'asc',
            type: '' })
        await this.Pokefetch()
    }

    handleSortOrder = async (e) => {
        this.setState ({ sortOrder: e.target.value})
        await this.Pokefetch()
    }

    handleType = async (e) => {
        this.setState ({ type: e.target.value})
        await this.Pokefetch()
    }
    
    render() { 
        console.log(this.state)    
        return (
            <div className = "searchPage"> 
                <div className="header">
                    <h1>Taylor's Big Ol' Dang Pokemon Emporium!</h1>
                    Search for your favorites or browse by type!                

                    <section className = "inputs">

                        {/* Search Input and Reset */}
                        <form onSubmit={this.handleSubmit}>
                        <input className = "searchInput" onChange={this.handleInput} />
                        <button className = "submitButton">Search!</button>
                        <button className = "resetButton" onClick={this.handleReset}>Reset!</button>
                        </form> 

                        {/* Sort Order Drpdown */}
                        Sort By:

                        {/* <Dropdown options = {[{
                            value: 'asc', display: 'Ascending'
                            },{
                            value: 'desc', display: 'Descending'
                            }]} /> */}

                        <select onChange = {this.handleSortOrder}>
                         <option value =  "asc" > Ascending </option>
                         <option value =  "desc" > Descending </option>
                        </select>

                       {/* Type Dropdown */}
                       Type:
                        <select onChange = {this.handleType}>
                            <option value =  "" > All </option>
                            <option value =  "normal" > Normal </option>
                            <option value =  "fire" > Fire </option>
                            <option value =  "water" > Water </option>
                            <option value =  "grass" > Grass </option>
                            <option value =  "electric" > Electric </option>
                            <option value =  "ice" > Ice </option>
                            <option value =  "fighting" > Fighting </option>
                            <option value =  "poison" > Poison </option>
                            <option value =  "ground" > Ground </option>
                            <option value =  "flying" > Flying </option>
                            <option value =  "psychic" > Psychic </option>
                            <option value =  "bug" > Bug </option>
                            <option value =  "rock" > Rock </option>
                            <option value =  "ghost" > Ghost </option>
                            <option value =  "dragon" > Dragon </option>
                            <option value =  "steel" > Steel </option>
                            <option value =  "fairy" > Fairy </option>
                        </select>
                    </section>
                </div>

                {/* Preloader */}
                {
                this.state.isLoading
                ?<h2> Loading ... </h2>
                : <PokeList pokedex = {this.state.pokedex} />
                }           
            </div>
        )
    }
}
