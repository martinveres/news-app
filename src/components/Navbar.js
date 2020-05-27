import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HomePage from '../pages/Home'
export default class Navbar extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link class="navbar-brand " to="/" exact > <h1 className="text-darkBlue"> World {<strong className="text-lightBlue">News </strong>}</h1></Link>
                 <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" to ="/"> Home</Link>
                            </li>
                            <li class="nav-item ">
                                <Link className="nav-link" to ="/news"> News</Link>
                            </li>
                        </ul>
                 </div>
            
            
             </nav>
        )
    }
}
