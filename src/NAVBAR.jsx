import React, { useRef } from 'react'

import { Typography } from "@mui/material";
// import  Collection from './Project'
import { Link } from "react-router-dom";
import Counter from './Counter';
import MENTORS from './MENTORS';
import logo from './homeAssets/Enactus.png'
import teamPic from './homeAssets/teamPic.jpg'
import './NAVBAR.css'



export default function NAVBAR() {
    return (
        <header>
          <Link to='/'>
            <img src={logo} className="logo"/>
            </Link>
            <input type="checkbox" id="nav-toggle" class="nav-toggle" />
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Mission">Mission</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><Link to ='/Gallery'>Gallery</Link></li>
                    <li><Link to ='/Events'>Events</Link></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
        </header>
    )
};

