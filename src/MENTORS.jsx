import React, { Component } from 'react';
import AM from './homeAssets/Adhya Mittal_president.jpg'
import PE from './homeAssets/President_Eeshika.jpg'
export class MENTORS extends Component {
    render() {
        return (
            <div>
                <div class="contain">
                    <div class="box">

                        <div class="img-box" title="President Enactus" data-author="Eeshika Madaan"
                        ><img src = {PE} alt="" /></div>

                        <div class="content">
                            <h2>President Enactus</h2>
                            <h3>Eeshika Madaan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio culpa dolores sapiente atque provident eaque ipsam minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, odio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum accusantium saepe commodi ullam, eos nam laboriosam quibusdam, ipsam nemo sint aspernatur aliquam sit delectus inventore incidunt minus corporis voluptate dolores.
                              </p>

                        </div>

                    </div>

                    <div class="box">

                        <div class="img-box" title="President Enactus" data-author="Adhya Mittal"
                        ><img src= {AM} alt="" /></div>

                        <div class="content">
                            <h2>President Enactus</h2>
                            <h3>Adhya Mittal</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio culpa dolores sapiente atque provident eaque ipsam minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, hic. </p></div>

                    </div>

                    <div class="box">

                        <div class="img-box" title="Spider puzzle" data-author="carlos rodiguez armando"
                        ><img src="https://source.unsplash.com/featured/?puzzle, paint, insect" alt="" /></div>

                        <div class="content">
                            <h2>Spider puzzle</h2>
                            <h3>carlos rodiguez armando</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio culpa dolores sapiente atque provident eaque ipsam minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>

                    </div>



                </div>
        
            </div>
          
        )
    }
}

export default MENTORS

