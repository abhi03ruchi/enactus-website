import React, { useRef } from "react"
import "./Aveksha.css"

import AvekshaMain from "../Images/AvekshaMain.png"
import AvekshaLogo from "../Images/AvekshaLogo.png"
import AvekshaImg from "../Images/Aveksha website (2).png"
import AvekshaGoal from "../Images/Aveksha-goals.png"
import { Typography, Button } from "@mui/material";
import logo from '../GulKaari/assets/Enactus.png'
import NAVBAR from "../Project_NAVBAR/NAVBAR.jsx";



export default function Aveksha() {
    const AboutUs = useRef(null);
    const contactUs = useRef(null);


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
                    <NAVBAR />
                    <div className="aveksha-sections">
                        <div className="left">
                            <img src={AvekshaLogo} alt="" />
                        </div>
                        <div className="right">
                            <Typography variant="h1" fontFamily={'Libre Baskerville'} align="left" sx={{ color: "#F2DEB9", marginTop: 10, fontWeight: 750 }}>PROJECT AVEKSHA</Typography>
                            <Typography align="left" fontSize={24} variant="body1" sx={{ color: "white", marginTop: 5, marginBottom: 5 }}>
                                An initiative to promote the well-being of stray animals via sustainable and environment friendly approaches.

                            </Typography>
                            <Button align="center" variant="contained" onClick={() => scrollToSection(AboutUs)}>Learn More</Button>

                        </div>
                    </div>
                </div>


                <div ref={AboutUs} className="content-overview">
                        <div className="overview-content">
                            <Typography variant="h2" align="center" fontFamily={'Rubik'} fontSize={75} sx={{ color: "#222344", marginTop: 5, marginBottom: 8, fontWeight: 650 }}> Overview</Typography>

                            <Typography variant="body1" align="center" sx={{ fontSize: 22, color: "#222344", marginRight: 35, marginLeft: 35, marginBottom: 8 }}> Aveksha is a pride initiative under the Enactus IGDTUW. We believe that it is our responsibility to look over all aspects of animal well-being, which includes feeding, sheltering, disease prevention and treatment, and overall care of the animals. Our process aims to provide sustainable, eco-friendly products for injured animals made by marginalized communities. This ensures threefold development:
                                the well-being of animals, employment to the underprivileged, and promises innovation at a sustainable level. </Typography>
                        </div>
                        <button onClick={() => scrollToSection(contactUs)}>Get In Touch</button>
                        <img src={AvekshaImg} />

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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB0WINzbQ6_2Gezc6WPwubPeRVEnHOXyMDA&usqp=CAU" alt="" />
                            <h1>Goal 3</h1>
                            <p>Good health and well-being</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="data:image/png;base64,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" alt="" />
                            <h1>Goal 8</h1>
                            <p>Decent work and economic growth</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="data:image/png;base64,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" alt="" />
                            <h1>Goal 9</h1>
                            <p>Industry, innovation, and infrastructure</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="data:image/png;base64,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" alt="" />
                            <h1>Goal 13</h1>
                            <p>Climate action</p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRxip-5NN13bQE8mkmDlfmwKnUgRkq6TGK-EulJqCGXTc6nHgW9Z_Bhd99zcfAg5akUE&usqp=CAU" alt="" />
                            <h1>Goal 15</h1>
                            <p>Life on land</p>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="site-footer" ref={contactUs}>
                <div className="north">
                    <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
                    <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
                        <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                            Opp to James church, delhi-110006</div>
                    </div>
                    <div className="one"><ion-icon name="call-sharp"></ion-icon>
                        <div className="text">  Shubhangi: 9319347394<br/>
                                                Shanaya Aggarwal: 9999042985
                        </div>
                    </div>
                    <div className="one"> <ion-icon name="mail-sharp"></ion-icon>
                        <div className="text">
                            enactus.igdtuw@gmail.com<br/>
                            projectaveksha@gmail.com
                        </div>
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