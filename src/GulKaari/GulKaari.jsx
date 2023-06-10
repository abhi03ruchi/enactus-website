import React, { useRef } from "react";
import { useState } from "react";
import './GulKaari.css';
import { Typography } from "@mui/material";
import imag1 from './assets/Enactus.png';
import imag2 from './assets/3lines.png';
import imag3 from './assets/gulLOGO.png';
import imag4 from './assets/photo1.png';
import imag5 from './assets/photo2.png';
import imag6 from './assets/Wphoto1.png';
import imag7 from './assets/Wphoto2.png';
import imag8 from './assets/sustain.png';
// import GulGallery from './GulGallery';
import CircleImpact from './CircleImpact.jsx';
import logo from './assets/Enactus.png'
import NAVBAR from "../Project_NAVBAR/NAVBAR.jsx";


export default function GulKaari() {

    const [value, setValue] = useState(false);
    const handleClick = () => {
        setValue(!value);
    };


    const Overview = useRef(null);
    const What = useRef(null);
    const Gallery = useRef(null);
    const Gallery2 = useRef(null);
    const How = useRef(null);
    const Impact = useRef(null);
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
            <div className="gul-home">
                <NAVBAR />
                <div className="gul-sections">
                    <div className="left">
                        <img src={imag3} alt="" />
                    </div>
                    <div className="right">
                        <Typography variant="h1" fontFamily={'Libre Baskerville'} align="left" sx={{ color: "#F2DEB9", marginTop: 10, fontWeight: 750 }}>PROJECT GULKAARI</Typography>
                        <Typography align="left" fontSize={24} variant="body1" sx={{ color: "white", marginTop: 5, marginBottom: 5 }}>


                            An initiative to achieve social, economic, and cultural changes in society by providing better sales to the product and the dying arts of communities.
                        </Typography>
                        <button onClick={() => scrollToSection(Overview)}>LEARN MORE</button>
                    </div>
                </div>
            </div>

            <div ref={Overview} className="overview gulkaari">
                <div className="left">
                    <div className="overview-content">
                        <Typography variant="h2" sx={{ color: "#222344", marginTop: 5, marginLeft: 17, fontWeight: 650 }}>An Overview</Typography>

                        <Typography align="left" variant="body1" fontSize={20} sx={{ color: "#222344", margin: 9, marginBottom: 10 }}>Project Gulkaari is an initiative under Enactus IGDTUW.
                            Gulkaari represents the communities' art, beauty, intricacy, and adornment. We work towards  identifying and enhancing the limited skill set and employability of most disadvantaged in the community,this project brings about upliftment and financial independence of the needy. In the past we have worked with communities ranging from women of Rohingya to artisans of Banjara community and impacted 180+ lives so far. </Typography>
                        <button onClick={() => scrollToSection(Footer)} >Get In Touch</button>
                    </div>
                    {/* <button>Get In Touch</button> */}

                </div>
                <div className="right">
                    <img src={imag4} alt="hello" />
                    <img src={imag5} alt="hello" />
                </div>
            </div>

            <div ref={What} className="what">
                <Typography variant="h2" align="center" sx={{ color: "#222344", marginTop: 0, marginLeft: 17, fontWeight: 650 }}>What we do?</Typography>

                <div className="what-content">
                    <div className="part1">
                        <img src={imag6} alt="" />
                        <Typography variant="body1" fontSize={20} sx={{ color: "#222344", marginTop: 10, marginLeft: 3, marginBottom: 10 }}>
                            Project Gulkaari aligns with the motive to help underprivileged communities in their entrepreneurial journey. We work hand in hand to understand their business, increase their reach, and helping with their source of income for them.
                        </Typography>
                    </div>
                    <div className="part2">
                        <img src={imag7} alt="" />
                        <Typography variant="body1" fontSize={20} sx={{ color: "#222344", marginTop: 10, marginLeft: 3, marginBottom: 12 }}>


                            Providing them with raw materials and training them to create products. Teaching them basic business ethics, improving their language skills helped them acquire the profit which was generated through various channels of marketing.  </Typography>
                    </div>
                </div>
            </div>
            <div ref={Gallery2} className="gul-gallery">
                <Typography variant="h2" align="center" sx={{ color: "#222344", marginTop: -10, marginBottom: 5, marginLeft: 0, fontWeight: 650 }}>Gallery</Typography>

                <div class="container">
                    <div class="carousel">
                        <div id="pic1" class="item">
                        </div>
                        <div id="pic2" class="item">
                        </div>
                        <div id="pic3" class="item"></div>
                        <div id="pic4" class="item">
                        </div>
                        <div id="pic5" class="item">
                        </div>
                        <div id="pic6" class="item">
                        </div>
                        <div id="pic7" class="item">
                        </div>
                        <div id="pic8" class="item">
                        </div>
                        <div id="pic9" class="item">
                        </div>
                        <div id="pic10" class="item">
                        </div>
                        <div id="pic11" class="item">
                        </div>
                    </div>
                </div>
            </div>


            <div ref={How} className="gul-how">
                <Typography variant="h2" align="center" sx={{ color: "#222344", paddingTop: 5, fontWeight: 650 }}>How we do it?</Typography>
                <div className="guls">
                    <div className="phase1">Phase 01</div>
                    <div className="part">
                        <div className="part2">Collaborated with Women of the Rohingya community and taught them the art of Kulkarni and helped them make products that we later sell.</div>
                        <div className="part3">Direct Impact: 8
                            Indirect Impact:174</div>
                    </div>


                    <div class="wraps">
                        <div class="cols">
                            <div class="col" ontouchstart="this.classList.toggle('hover');">
                                <div class="container">
                                    <div class="front" >
                                        <div class="inner">
                                            <p>Ecological Impact</p>
                                            {/* <span>Lorem ipsum</span> */}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>Gulkaari's sustainable fashion approach reduces waste and energy consumption by minimizing the demand for new textiles and incorporating paper recycling, aligning with 8 of the 17 UN sustainable development goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col" ontouchstart="this.classList.toggle('hover');">
                                <div class="container">
                                    <div class="front" >
                                        <div class="inner">
                                            <p>Social Impact</p>
                                            {/* <span>Lorem ipsum</span> */}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>Gulkaari instills confidence, independence, and acceptance of refugees while helping them overcome cultural and language barriers through community interaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col" ontouchstart="this.classList.toggle('hover');">
                                <div class="container">
                                    <div class="front" >
                                        <div class="inner">
                                            <p>Economical Impact</p>
                                            {/* <span>Lorem ipsum</span> */}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>The revenue generated promotes growth and development, making the women financially independent and creating indirect income for others in the production process.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div ref={How} className="gul-how">
                <Typography variant="h2" align="center" sx={{ color: "#222344", marginTop: 0,paddingTop:10, fontWeight: 650 }}></Typography>
                <div className="guls">
                    <div className="phase1">Phase 02</div>
                    <div className="part">
                        <div className="part2">Collaborated with the Banjara community artisans to give them an online platform for sale amidst the pandemic.</div>
                        <div className="part3">Direct Impact: 5
                            Indirect Impact:83</div>
                    </div>


                    <div class="wraps">
                        <div class="cols">
                            <div class="col" ontouchstart="this.classList.toggle('hover');">
                                <div class="container">
                                    <div class="front" >
                                        <div class="inner">
                                            <p>Ecological Impact</p>
                                            {/* <span>Lorem ipsum</span> */}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>Gulkaari aims to motivate the usage of sustainable products and incorporate them in every household. It focused on encouraging the online business of the Banjara community and aligning with 11 of the 12 UN sustainable development goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col" ontouchstart="this.classList.toggle('hover');">
                                <div class="container">
                                    <div class="front" >
                                        <div class="inner">
                                            <p>Social Impact</p>
                                            {/* <span>Lorem ipsum</span> */}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>Gulkaari instills confidence and independence while helping them overcome physical barriers during the pandemic through online platforms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col" ontouchstart="this.classList.toggle('hover');">
                                <div class="container">
                                    <div class="front" >
                                        <div class="inner">
                                            <p>Economical Impact</p>
                                            {/* <span>Lorem ipsum</span> */}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>The revenue generated promotes growth and development, making the community men financially independent and creating a direct source of income for them through an online medium amidst the pandemic and providing livelihood</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div ref={Impact} className="gul-impact">
                <Typography variant="h2" align="center" sx={{ color: "#222344", fontWeight: 650, paddingTop:10, }}>Impact Generated</Typography>

                <CircleImpact />


            </div>

            <div ref={goals} className="gul-goals">
                <Typography variant="h2" fontSize={75} align="center" fontFamily={'Rubik'} sx={{ color: "#222344", marginTop: 10, marginBottom: 8, fontWeight: 650 }}> Sustainable Development Goals</Typography>
                <img src={imag8} alt="sustain" />
            </div>

            <div  ref={Footer} className="site-footer">
                <div className="north">
                    <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
                    <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
                        <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                            Opp to James church, delhi-110006</div>
                    </div>
                    <div className="one"><ion-icon name="call-sharp"></ion-icon>
                        <div className="text">  Kangana Roshan: 9546357899<br/>
                           M Deekshitha Reddy: 8076468201
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
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="instagram" href="https://instagram.com/enactus.igdtuw?igshid=MzRlODBiNWFlZA=="><i class="fa fa-instagram"></i></a></li>
                                <li><a class="linkedin" href="https://www.linkedin.com/company/enactusigdtuw/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="white-container"></div>
                <Typography variant="body1" align="center" sx={{ backgroundColor:'black' , color: "white", fontWeight: 650,marginBottom:2 ,  fontSize: 20 }}>Enactus IGDTUW Copyright @ 2023 </Typography>
            </div>
        </>
    )
};