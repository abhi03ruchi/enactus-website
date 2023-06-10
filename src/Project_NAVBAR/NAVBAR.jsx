import React, { useRef } from 'react'

// import  Collection from './Project'
import { Link } from "react-router-dom";
import logo from './Enactus.png';
import './NAVBAR.css';



export default function NAVBAR() {
    return (
        <header>
          <Link to='/'>
            <img src={logo} className="logo"/>
            </Link>
            <input type="checkbox" id="nav-toggle" class="nav-toggle" />
            <nav className='nav'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to ='/Gallery'>Gallery</Link></li>
                    <li><Link to ='/Event'>Events</Link></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
        </header>
    )
};

