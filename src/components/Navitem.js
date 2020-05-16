import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
class Navitem extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <NavLink exact to={this.props.tolink} activeStyle={{background:"dark blue"}} >{this.props.item}</NavLink>
            </li>
        )
    }
}
export default Navitem