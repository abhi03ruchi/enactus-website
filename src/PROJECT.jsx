import React from 'react'
import './PROJECT.css'
import logo from './homeAssets/Enactus.png'
import teamPic from './homeAssets/teamPic.jpg'
import Adva from './homeAssets/Adva.png';
import Avesha from './homeAssets/ANIMALS.png';
import GulKaari from './homeAssets/GoalsGulkaari.png';
import Dharini from './homeAssets/Logo Dharini.JPG';
import pari from './homeAssets/PARI.png';
import { Link } from 'react-router-dom';


export default function PROJECT() {
    return (
        <div id='project'>
            <div class="card-category-2">
                <ul>
                    <li>
                        <div class="img-card iCard-style1">
                            <div class="card-image">
                                <span class="View More"></span>
                                <img src={GulKaari} />
                            </div>

                            <div class="card-link">
                            <Link to='/GulKaari' title="View More"><span>Project GulKaari</span></Link>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="img-card iCard-style1">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-title"></span>
                                    <img src={Adva} />
                                </div>
                            </div>

                            <div class="card-link">
                                <Link to='/Adva' title="View More"><span>Project Adva</span></Link>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="img-card iCard-style1">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-title"></span>
                                    <img src={Avesha} />
                                </div>
                            </div>

                            <div class="card-link">
                                <Link to='/Aveksha' title="View More"><span>Project Aveksha</span></Link>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="img-card iCard-style1">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-title"></span>
                                    <img src={Dharini} />
                                </div>
                            </div>

                            <div class="card-link">
                                <Link to='/DHARINI' title="View More"><span>Project Dharini </span>
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="img-card iCard-style1">
                            <div class="card-content">
                                <div class="card-image">
                                    <span class="card-title"></span>
                                    <img src={pari} />
                                </div>
                            </div>

                            <div class="card-link">
                                <Link to='/PRAKRIKALA' title="View More"><span>Project Prakrikala</span></Link>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    )
}

