import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import PokeList from './PokeList.js'
import Dropdown from './Dropdown'


export default class SearchPage extends Component {
    state = {
        pokedex: [],
        sortOrder: 'asc',
        query:'',
        isLoading: false,
        type: '',
    }

    componentDidMount = async () => {
        this.Pokefetch()
        }

    Pokefetch = async () => {
        this.setState ({ isLoading : true })

        const response = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=id&direction=${this.state.sortOrder}`)

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
        this.Pokefetch();
    }

    handleReset = async (e) => {
         this.setState ({ 
            query: '',
            sortOrder: 'asc',
            type: '' })
        this.Pokefetch()
    }

    handleSortOrder = async (e) => {
        this.setState ({ sortOrder: e.target.value})
        this.Pokefetch()
    }

    handleType = async (e) => {
        this.setState ({ type: e.target.value})
        this.Pokefetch()
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
                        <input onChange={this.handleInput} />
                        <button>Search!</button>
                        <button onClick={this.handleReset}>Reset!</button>
                        </form> 

                        {/* Sort Order Dropdown */}
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
                            <option value =  "&type_1=normal" > Normal </option>
                            <option value =  "&type_1=fire" > Fire </option>
                            <option value =  "&type_1=water" > Water </option>
                            <option value =  "&type_1=grass" > Grass </option>
                            <option value =  "&type_1=electric" > Electric </option>
                            <option value =  "&type_1=ice" > Ice </option>
                            <option value =  "&type_1=fighting" > Fighting </option>
                            <option value =  "&type_1=poison" > Poison </option>
                            <option value =  "&type_1=ground" > Ground </option>
                            <option value =  "&type_1=flying" > Flying </option>
                            <option value =  "&type_1=psychic" > Psychic </option>
                            <option value =  "&type_1=bug" > Bug </option>
                            <option value =  "&type_1=rock" > Rock </option>
                            <option value =  "&type_1=ghost" > Ghost </option>
                            <option value =  "&type_1=dragon" > Dragon </option>
                            <option value =  "&type_1=steel" > Steel </option>
                            <option value =  "&type_1=fairy" > Fairy </option>
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
