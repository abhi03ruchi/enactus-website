import React, { useRef } from "react";
// import Button from 'react';
import ScrollToTop from "./ScrollToTop";
import { Typography } from "@mui/material";
// import  Collection from './Project'
import { Link } from "react-router-dom";
import Counter from './Counter';
import MENTORS from './MENTORS';
import logo from './homeAssets/Enactus.png'
import teamPic from './homeAssets/teamPic.jpg'
import MISSION from './MISSION'
// import { Grid } from "@mui/material";



export default function Home() {
  const AboutUs = useRef(null);
  const Mission = useRef(null);
  const Mission2 = useRef(null);
  const Project = useRef(null);
  const Timer = useRef(null);
  const Team = useRef(null);
  const Footer = useRef(null);
  const Footer2 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };



  return (
    <div>


      <ScrollToTop />
      <div className="hero">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <ul className="navi">
          <li onClick={() => scrollToSection(AboutUs)} className="link">
            About Us
          </li>
          <li onClick={() => scrollToSection(Mission)} className="link">
            Mission
          </li>
          <li onClick={() => scrollToSection(Project)} className="link">
            Projects
          </li>
          <Link to="/Gallery">
            <li className="link">
              Gallery
            </li></Link>
          <li onClick={() => scrollToSection(Footer)} className="link">
            Contact Us
          </li>
        </ul>
        <div>
          <Typography variant="h1" align="center" sx={{ color: "white", marginTop: 8, fontWeight: 750 }}><span className="change-content"></span></Typography>
        </div>
      </div>


      <div ref={AboutUs} className="services">
        <div className="yellow-container"></div>
        <Typography variant="h2" sx={{ color: "white", marginTop: 5, marginLeft: 17, fontWeight: 650 }}>About<span>Us</span></Typography>
        <div className="services-content">
          <Typography textAlign={'center'} variant="body1" sx={{ color: "white", margin: 10, marginBottom: 18 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

          <img src={teamPic} alt="teamPic" />
        </div>

        <div className="yellow-container"></div>
      </div>




      <div ref={Mission} className="blog">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 4, fontWeight: 650 }}>OUR <span>  MISSION </span></Typography>

        <div class="wraps">
          <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Diligord</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Rocogged</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Strizzes</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Clossyo</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

{/* 
      <div ref={Mission2} className="mission2">
        <MISSION/>
      </div> */}


      <div ref={Timer} className="timer">
        <div className="white-container"></div>
        <Counter />
        <div className="white-container"></div>
      </div>


      <div ref={Project} className="project">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 8, fontWeight: 650 }}>OUR  <span> PROJECTS </span></Typography>
        <div class="gallery-wrap">
          <div class="item item-1">
            <a className="buttin" href="#"> Learn More</a>
          </div>
          <div class="item item-2">
          <a className="buttin" href="#"> Learn More</a>
          </div>
          <div class="item item-3">
          <a className="buttin" href="#"> Learn More</a>
          </div>
          <div class="item item-4">
          <a  className="buttin" href="#"> Learn More</a>
          </div>
        </div>
      </div>


      <div className="yellow-container"></div>
      <div ref={Team} className="team">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 8, fontWeight: 650, marginTop: 7 ,marginBottom: 10}}> <span> OUR  </span> MENTORS </Typography>
        < MENTORS />
      </div>
      <div className="yellow-container"></div>

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

      <div ref={Footer2} className="footer">
        {/* <div class="wrapper">
          <div class="button">
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
          </div>
        </div> */}
        <div className="white-container"></div>
        <Typography variant="body1" align="center" sx={{ color: "white", margin: 2, fontWeight: 650, fontSize: 20 }}>Enactus IGDTUW Copyright @ 2023 </Typography>
      </div>
    </div>
  )
};
