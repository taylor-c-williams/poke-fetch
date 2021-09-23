import React, { Component } from 'react'

export default class PokeItem extends Component {

    render() {

        return (
            <div><ul>
                <li>
                <img src={this.props.url_image} alt = {this.props.pokemon}/>
                blah
                </li>
                </ul>
            </div>
        )
    }
}
