import React, { useRef } from "react"
import "./Aveksha.css"

import AvekshaMain from "./Images/AvekshaMain.png"
import AvekshaLogo from "./Images/AvekshaLogo.png"
import AvekshaImg from "./Images/Aveksha website (2).png"
import AvekshaGoal from "./Images/Aveksha-goals.png"
import { Typography, Button } from "@mui/material";
import logo from './GulKaari/assets/Enactus.png'
import imag1 from './GulKaari/assets/Enactus.png';
import NAVBAR from "./NAVBAR"



export default function Aveksha() {
    const AboutUs = useRef(null);


    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <>
            < div class="aveksha">
                <div className="aveksha-main">
                    {/* <div className="nav">
                        <div className="img1" ><img src={imag1} alt="hello" /></div>
                    </div> */}
                    <NAVBAR/>
                    <Typography variant="h1" fontFamily={'Libre Baskerville'} align="left" sx={{ color: "#F2DEB9", marginTop: 10, fontWeight: 750 }}>PROJECT AVEKSHA</Typography>
                    <Typography variant="body1" fontFamily={'Rubik'} fontSize={25} sx={{ color: "#FFFFFF", margin: 5, marginBottom: 10 }}>
                        An initiative to promote the well-being of stray animals via sustainable and environment friendly approaches.
                    </Typography>
                    <Button align="center" variant="contained" sx={{ backgroundColor: "#CDAD7D", color: "#222344" }} onClick={() => scrollToSection(AboutUs)}>Learn More</Button>
                </div>


                <div ref={AboutUs} className="content-overview">
                    <div className="left">
                        <div className="overview-content">
                            <Typography variant="h2" align="center" fontFamily={'Rubik'} fontSize={75} sx={{ color: "#222344", marginTop: 15, marginBottom: 8, fontWeight: 650 }}> Overview</Typography>

                            <Typography variant="body1" align="center" sx={{ fontSize: 22, color: "#222344", marginRight: 35, marginLeft: 35, marginBottom: 12 }}> Aveksha is a pride initiative under the Enactus IGDTUW. We believe that it is our responsibility to look over all aspects of animal well-being, which includes feeding, sheltering, disease prevention and treatment, and overall care of the animals. Our process aims to provide sustainable, eco-friendly products for injured animals made by marginalized communities. This ensures threefold development:
                                the well-being of animals, employment to the underprivileged, and promises innovation at a sustainable level. </Typography>
                            <Button variant="contained" sx={{ backgroundColor: "#CDAD7D", color: "#222344" }}>Get In Touch</Button>
                            <br />
                            <img src={AvekshaImg} />

                        </div>
                    </div>
                </div>

                <div className="aveksha-goals">
                    <Typography variant="h2" align="center" fontFamily={'Rubik'} fontSize={75} sx={{ color: "#222344", marginTop: 2, marginBottom: 8, fontWeight: 650 }}> What do we do ?</Typography>
                    <Typography variant="body1" align="center" sx={{ fontSize: 22, color: "#222344", marginRight: 35, marginLeft: 35, marginBottom: 5 }}> At Project Aveksha, our aim is to strengthen the bond between humans and strays. To this end, we're launching campaigns and webinars to educate people on the significance of stray animals and how easy it is to help by feeding one daily.  </Typography>
                    <Typography variant="body1" align="center" sx={{ fontSize: 22, color: "#222344", marginRight: 35, marginLeft: 35, marginBottom: 2 }}> As we always say, "Love them once and they'll remember you for life!" It's not only about saving a life, but also about bringing out the best in those who feed them.</Typography>

                    <img src={AvekshaGoal} />
                </div>


                <Typography variant="h2" fontSize={75} align="center" fontFamily={'Rubik'} sx={{ color: "#222344", marginBottom: 8, fontWeight: 650 }}> Sustainable Development Goals</Typography>

                <ul id="categories" class="clr">
                    <li class="pusher"></li>
                    <li>
                        <div>
                            <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                            <h1>Goal 3</h1>
                            <p>Good health and well-being</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                            <h1>Goal 8</h1>
                            <p>Decent work and economic growth</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                            <h1>Goal 9</h1>
                            <p>Industry, innovation, and infrastructure</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                            <h1>Goal 13</h1>
                            <p>Climate action</p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                            <h1>Goal 15</h1>
                            <p>Life on land</p>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="site-footer">
                <div className="north">
                    <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
                    <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
                        <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                            Opp to James church, delhi-110006</div>
                    </div>
                    <div className="one"><ion-icon name="call-sharp"></ion-icon>
                        <div className="text">  Eeshika Madaan: +91 85955 81045 <br />
                            Adhya Mittal: +91 77039 20800
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
                                <li><a class="twitter" href="#"><i class="fa fa-tree" aria-hidden="true"></i></a></li>
                                <li><a class="instagram" href="https://instagram.com/enactus.igdtuw?igshid=MzRlODBiNWFlZA=="><i class="fa fa-instagram"></i></a></li>
                                <li><a class="linkedin" href="https://www.linkedin.com/company/enactusigdtuw/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="white-container"></div>
                <Typography variant="body1" align="center" sx={{ color: "white", margin: 2, fontWeight: 650, fontSize: 20 }}>Enactus IGDTUW Copyright @ 2023 </Typography>
            </div>
</>

    )
}