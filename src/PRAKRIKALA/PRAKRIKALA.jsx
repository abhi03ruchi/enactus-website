import React, { useRef } from "react";
import './PRAKRIKALA.css';
import { Typography } from "@mui/material";
// import imag1 from './EnactusIGDTUWlogo.png';
import imag1 from './enactus.jpg';
import imag2 from './3lines.png';
import imag3 from './praLOGO.png';
import imag4 from './arrow.png';
import imag5 from './sustain.png';
import logo from './Enactus copy.png'


export default function PRAKRIKALA() {
    const Overview = useRef(null);
    const goals = useRef(null);
    const Gallery = useRef(null);
    const How = useRef(null);
    const Impact = useRef(null);
    const Footer = useRef(null);

    return (
        <div className="pari-app">
            <div className="pari-home">
                <div className="nav">
                    <div className="img1" > <img src={imag1} alt="hello" /></div>
                    <img className="img2" src={imag2} alt="hello" />
                </div>
                <div className="pari-sections">
                    <div className="left">
                        <img src={imag3} alt="prakLOGO" className="img3" />
                    </div>
                    <div className="right">
                        <Typography variant="h1" align="left" fontFamily={'Rubik'} sx={{ color: "#20CD8D", marginTop: 10, paddingLeft: 5, fontWeight: 750 }}>PROJECT PRAKRIKALA</Typography>
                        <Typography variant="body1" fontFamily={'Rubik'} fontSize={25} sx={{ color: "#FFFFFF", margin: 5, marginBottom: 10 }}>
                            Prakri-Kala is an eco-centric enterprise that upcycles locally sourced waste to create innovative products and promote the socio-economic welfare of underrepresented communities.
                        </Typography>
                        <button>LEARN MORE</button>
                        <div><img className="img4" src={imag4} alt="button" /> </div>
                    </div>
                </div>
            </div>


            <div ref={Overview} className="pari-overview">
                <div className="left">
                    <div className="overview-content">
                        <Typography variant="h2" align="center" fontFamily={'Rubik'} fontSize={75} sx={{ color: "#20CD8D", marginTop: 15, marginBottom: 8, fontWeight: 650 }}> Overview</Typography>

                        <Typography variant="body1" align="center" sx={{ fontSize: 20, color: "#222344", marginRight: 35, marginLeft: 35, marginBottom: 12 }}>Project Gulkaari is an initiative under Enactus IGDTUW.
                            Welcome to Prakri-Kala, an eco-centric enterprise dedicated to waste management and environmental sustainability, especially in urban areas. Our novel waste management techniques cover four subdomains: paper, waste cloth, bio waste, and plastic waste. Our locally sourced urban refuse is transformed into cutting-edge upcycled goods crafted by underrepresented populations, promoting their socio-economic welfare. We are committed to allocating a significant portion of our revenue from merchandise sales to support these communities. Join us in addressing waste management and environmental sustainability issues while promoting social and economic empowerment for underrepresented communities. </Typography>
                    </div>
                    <button>Get In Touch</button>
                </div>
            </div>

            <div ref={goals} className="pari-goals">
                <Typography variant="h2" fontSize={75} align="center" fontFamily={'Rubik'} sx={{ color: "#20CD8D", marginTop: 10, marginBottom: 8, fontWeight: 650 }}> Sustainable Development Goals</Typography>
                <img src={imag5} alt="sustain" />
            </div>

            <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft:2, paddingTop:2 ,margin:1.5 , color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
            <div ref={Footer} className="site-footer">
                <div className="north">
                    <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
                        <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                        Opp to James church, delhi-110006</div>
                    </div>
                    <div className="one"><ion-icon name="call-sharp"></ion-icon>
                        <div className="text">  Kangana Roshan: 9546357899 <br/>
                             M Deekshitha Reddy: 8076468201</div>
                    </div>
                    <div className="one"> <ion-icon name="mail-sharp"></ion-icon>
                        <div className="text">  projectgulkaari@gmail.com<br/>
                            enactus.igdtuw@gmail.com</div>
                    </div>
                </div>
                <div className="south">
                    <div className="follow">
                        <div className="ftext">Follow Us on: </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="enactusLogo">
                        <img src={logo} alt="" />
                    </div>
                    <hr />
                </div>
            </div>



        </div>
    )
};






// <div className="list">
//                         <div className="ion"> <ion-icon name="location-sharp"></ion-icon>
//                            Indira Gandhi Delhi Technical University for women,Opp to James church, delhi-110006
//                         </div>
//                         <div className="ion"><ion-icon name="call-sharp"></ion-icon>
//                             Kangana Roshan: 9546357899
//                             M Deekshitha Reddy: 8076468201</div>
//                         <div className="ion"> <ion-icon name="mail-sharp"></ion-icon>
//                             projectgulkaari@gmail.com
//                             enactus.igdtuw@gmail.com</div>
//                     </div>