import React, { Component } from 'react'
import request from 'superagent'
import PokeList from './PokeList.js'
import './App.css'

export default class SearchPage extends Component {

    state = {
        pokedex: [],
        sortOrder: 'asc',
        query:'',
        isLoading: false,
        type: '',
        currentPage: 1,
    }

    componentDidMount = async () => {
       await  this.Pokefetch()
        }

    Pokefetch = async () => {
        await this.setState ({ isLoading : true })

        const response = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${this.state.currentPage}&pokemon=${this.state.query}&sort=id&direction=${this.state.sortOrder}&type_1=${this.state.type}`)

        this.setState ({
        pokedex: response.body.results,
        isLoading: false
        })
    }

    handleInput = (e) => {
        this.setState ({query: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();        
        await this.Pokefetch();
    }

    handleReset = async (e) => {
         await this.setState ({ 
            query: '',
            sortOrder: 'asc',
            type: '' })
        await this.Pokefetch()
    }

    handleSortOrder = async (e) => {
        await this.setState ({ sortOrder: e.target.value})
        await this.Pokefetch()
    }

    handleType = async (e) => {
        await this.setState ({ type: e.target.value})
        await this.Pokefetch()
    }

    handleNextClick = async (e) => {
        await this.setState ({ currentPage: this.state.currentPage + 1 })
        await this.Pokefetch()
    }

    handlePrevClick = async (e) => {
        await this.setState ({ currentPage: this.state.currentPage - 1 })
        await this.Pokefetch()
    }

    render() { 
        console.log(this.state)    
        return (
            <div className = "searchPage"> 
                <div className="header">
                    <h1>Taylor's Big Ol' Dang Pokemon Emporium Yee Haw!</h1>

                    {this.state.currentPage !== 1 && <button onClick = {this.handlePrevClick}>Previous Page</button>}

                    <span>Current Page: {this.state.currentPage} of blank pages</span>

                    {this.state.pokedex.length < 20 || <button onClick = {this.handleNextClick}>Next Page</button>} 

                    <section className = "searchInput">
                    Search for your favorites or browse by type!  

                        {/* Search Input and Reset */}
                        <form onSubmit={this.handleSubmit}>
                        <input className = "searchInput" onChange={this.handleInput} />
                        <button className = "submitButton">Search!</button>
                        <button className = "resetButton" onClick={this.handleReset}>Reset!</button>
                        </form> 
                    </section>

                    <section className = "dropdowns">
                        {/* Sort Order Drpdown */}
                        Sort By Pokedex ID:

                        {/* <Dropdown options = {[{
                            value: 'asc', display: 'Ascending'
                            },{
                            value: 'desc', display: 'Descending'
                            }]} /> */}

                        <select onChange = {this.handleSortOrder} className = "dropdown">
                         <option value =  "asc" >Ascending</option>
                         <option value =  "desc" >Descending</option>
                        </select>

                       {/* Type Dropdown */}
                       Type:
                        <select onChange = {this.handleType} className = "dropdown">
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
                ?<section className = "loading"><h2> Loading ... </h2></section>
                : <PokeList pokedex = {this.state.pokedex} />
                }           
            </div>
        )
    }
}