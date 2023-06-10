import React, { useRef } from "react";
import './PRAKRIKALA.css';
import { Typography } from "@mui/material";
import imag2 from './assets/3lines.png';
import imag3 from './assets/praLOGO.png';
import imag4 from './assets/arrow.png';
import imag5 from './assets/sustain.png';
import logo from './assets/Enactus copy.png'


import NAVBAR from "../Project_NAVBAR/NAVBAR.jsx";


export default function PRAKRIKALA() {
    const Overview = useRef(null);
    const goals = useRef(null);
    const Footer = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="pari-home">
                <NAVBAR />
                <div className="pari-sections">
                    <div className="left">
                        <img src={imag3} alt="prakLOGO" className="img3" />
                    </div>
                    <div className="right">
                        <Typography variant="h1" align="left" fontFamily={'Rubik'} sx={{ color: "#20CD8D", marginTop: 10, paddingLeft: 5, fontWeight: 750 }}>PROJECT PRAKRIKALA</Typography>
                        <Typography variant="body1" fontFamily={'Rubik'} fontSize={25} sx={{ color: "#FFFFFF", margin: 5, marginBottom: 10 }}>
                            Prakri-Kala is an eco-centric enterprise that upcycles locally sourced waste to create innovative products and promote the socio-economic welfare of underrepresented communities.
                        </Typography>
                        <button onClick={() => scrollToSection(Overview)}>LEARN MORE</button>
                        <div> </div>
                    </div>
                </div>
            </div>


            <div ref={Overview} className="pari-overview">
                <div className="left">
                    <div className="overview-content">
                        <Typography variant="h2" align="center" fontFamily={'Rubik'} fontSize={75} sx={{ color: "#20CD8D", marginTop: 0, marginBottom: 8, fontWeight: 650 }}> Overview</Typography>

                        <Typography variant="body1" align="center" sx={{ fontSize: 20, color: "#222344", marginRight: 35, marginLeft: 35, marginBottom: 12 }}>Project Gulkaari is an initiative under Enactus IGDTUW.
                            Welcome to Prakri-Kala, an eco-centric enterprise dedicated to waste management and environmental sustainability, especially in urban areas. Our novel waste management techniques cover four subdomains: paper, waste cloth, bio waste, and plastic waste. Our locally sourced urban refuse is transformed into cutting-edge upcycled goods crafted by underrepresented populations, promoting their socio-economic welfare. We are committed to allocating a significant portion of our revenue from merchandise sales to support these communities. Join us in addressing waste management and environmental sustainability issues while promoting social and economic empowerment for underrepresented communities. </Typography>
                    </div>
                    <button  onClick={() => scrollToSection(Footer)}>Get In Touch</button>
                </div>
            </div>

            <div ref={goals} className="pari-goals">
                <Typography variant="h2" fontSize={75} align="center" fontFamily={'Rubik'} sx={{ color: "#20CD8D", marginTop: 10, marginBottom: 8, fontWeight: 650 }}> Sustainable Development Goals</Typography>
                <img src={imag5} alt="sustain" />
            </div>

            <div className="site-footer">
                <div className="north">
                    <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
                    <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
                        <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                            Opp to James church, delhi-110006</div>
                    </div>
                    <div className="one"><ion-icon name="call-sharp"></ion-icon>
                        <div className="text">  Kangana Roshan: <br />
                        M Deekshitha Reddy:
                        </div>
                    </div>
                    <div className="one"> <ion-icon name="mail-sharp"></ion-icon>
                        <div className="text">
                            enactus.igdtuw@gmail.com</div>
                    </div>

                </div>
                <div className="south">
                    <div className="enactusLogo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="meaning-text">
                        <p>
                            <span>En</span>trepreneurial - igniting business innovation with integrity and passion.<br />
                            <span>Act</span>ion - the experience of social impact that sparks social enterprise.
                            <br />
                            <span>Us</span> - student, academic and business leaders collaborating to create a better world.
                        </p>
                    </div>

                    <div className="follow">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="twitter" href="#"><i class="fa fa-tree"></i></a></li>
                                <li><a class="instagram" href="https://instagram.com/enactus.igdtuw?igshid=MzRlODBiNWFlZA=="><i class="fa fa-instagram"></i></a></li>
                                <li><a class="linkedin" href="https://www.linkedin.com/company/enactusigdtuw/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer"  ref={Footer}>
                <div className="white-container"></div>
                <Typography variant="body1" align="center" sx={{ color: "white", margin: 2, fontWeight: 650, fontSize: 20 }}>Enactus IGDTUW Copyright @ 2023 </Typography>
            </div>
        </>
    )
};






