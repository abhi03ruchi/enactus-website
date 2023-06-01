import React, { Component } from 'react';
import AM from './homeAssets/President_Adhya.jpg'
import PE from './homeAssets/President_Eeshika.jpg'
import NM from './homeAssets/NidhiMaam.png'
export class MENTORS extends Component {
    render() {
        return (
            <div>
                <div class="contain">

                    <div class="box">

                        <div class="img-box" id='nm' title="Faculty advisor" data-author="Prof. Nidhi Goel"
                        ><img src={NM} alt="" /></div>

                        <div class="content">
                            {/* <h2>Spider puzzle</h2>
    <h3>carlos rodiguez armando</h3> */}
                            <p>The projects undertaken by Enactus IGDTUW are for the sole purpose of uplifting communities & improving their livelihoods while simultaneously honing their skills to become socially aware and responsible entrepreneurs. Enactus's ideology is centered around three pillars-seeing an opportunity, taking action, and enabling progress.I proudly acknowledge the remarkable efforts of our dedicated volunteers who have contributed to the creation of this publication. It has been a longstanding aspiration of ours to develop a newsletter that not only exhibits the writings of our students but also recognizes the exceptional volunteering work of our entire team. I extend my heartfelt appreciation to the team for their incredible work & wish them all success in their future endeavors.</p></div>

                    </div>
                    <div class="box">
                        <div class="img-box" title="President Enactus" data-author="Eeshika Madaan"
                        ><img src={PE} alt="" /></div>

                        <div class="content">
                            {/* <h2>President Enactus</h2>
                            <h3>Eeshika Madaan</h3> */}
                            <p>Enactus is a technical society working for social impact and entrepreneurial development. I joined it in my freshman year as a member to contribute towards the betterment of society. From witnessing the workings to leading a project and to now finally becoming the President of ENACTUS IGDTUW has evolved me as a leader, individual, and team player. To me, Enactus is a safe place that has always pushed me to break my limits and achieve my ambitions and has boosted my confidence. It has made me aware of the biggest taboos and issues that society suffers, offering the opportunity to continuously strive for a better environment using my technical knowledge and actions.
                            </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="img-box" id="ad"
                            title="President Enactus" data-author="Adhya Mittal"
                        ><img src={AM} alt="" /></div>

                        <div class="content">
                            {/* <h2>President Enactus</h2>
                            <h3>Adhya Mittal</h3> */}
                            <p>It brings me great joy to address you all as the president of our incredible Enactus community. Since my first year, Enactus has been an integral part of my life, and I have gained invaluable knowledge and experience through this journey. Our mission has never been more important than it is today. We are pushing boundaries, and making a lasting impact on society. As the president of Enactus IGDTUW, I am committed to leading our team to new heights of success and to bring Enactus IGDTUW back to its former glory. I am thrilled to see what we can achieve in the future, and I am honored to be a part
                                of this journey. </p></div>
                    </div>
                </div>

            </div>

        )
    }
}

export default MENTORS

