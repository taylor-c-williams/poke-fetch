import React, { Component } from 'react'

export default class DetailsItem extends Component {


    render() {
        console.log(this.props.pokedex)
        return (
            <div className = "detailsItem">
              <ul>             
                <li>
                  <section className = "statsHeader">
                    <img src = {this.props.url_image} alt = {this.props.pokemon}/>
                    <h1>{this.props.pokemon}</h1>
                    Pokedex Number: {this.props.id}
                  </section>
                  <span className = "stats">
                  <p>type-1 : {this.props.type_1}</p>              
                  <p>type-2 : {this.props.type_2}</p>  
                  <p>hp : {this.props.hp}</p>  
                  <p>atk : {this.props.attack}</p>  
                  <p>def : {this.props.defense}</p>  
                  <p>spd : {this.props.speed}</p>  
                  <p>sp-atk : {this.props.special_attack}</p>  
                  <p>sp-def : {this.props.special_defense}</p>
                 </span>
                 
                </li>
              </ul>

            </div>
      
        )
    }
}
