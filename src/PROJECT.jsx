import React from 'react'
import './PROJECT.css'
import logo from './homeAssets/Enactus.png'
import teamPic from './homeAssets/teamPic.jpg'
import Adva from './homeAssets/Adva.png';
import Avesha from './homeAssets/ANIMALS.png';
import GulKaari from './homeAssets/GoalsGulkaari.png';
import Dharini from './homeAssets/Logo Dharini.JPG';
import pari from './homeAssets/PARI.png';


export default function PROJECT() {
        return (
            <div>
                <div class="card-category-2">
                    <ul>
                        <li>
                            <div class="img-card iCard-style1">
                                <div class="card-image">
                                    <span class="View More"></span>
                                    <img src={GulKaari}/>
                                </div>

                                <div class="card-link">
                                    <a href="#" title="Read Full"><span>Project GulKaari</span></a>
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
                                    <a href="#" title="View More"><span>Project Adva</span></a>
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
                                    <a href="#" title="View More"><span>Project Aveksha</span></a>
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
                                    <a href="#" title="Read Full"><span>Project Dharini </span></a>
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
                                    <a href="#" title="View More"><span>Project Pakrikala</span></a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        )
    }

