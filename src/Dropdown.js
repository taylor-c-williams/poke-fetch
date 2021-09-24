import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>

                <select onChange = {this.handleSortOrder}>
                {this.props.options.map(({value, display}) => <option value={value} >{display}</option>)}
                </select >

            </div>
        )
    }
}