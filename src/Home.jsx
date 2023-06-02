import React, { useRef } from "react";
// import Button from 'react';

import { Typography } from "@mui/material";
// import  Collection from './Project'
import { Link } from "react-router-dom";
import Counter from './Counter';
import MENTORS from './MENTORS';
import logo from './homeAssets/Enactus.png'
import teamPic from './homeAssets/teamPic.jpg'
import NAVBAR from './NAVBAR'
import Achievements from "./Achievement";
import PROJECT from './PROJECT';
// import { Grid } from "@mui/material";



export default function Home() {
  // const AboutUs = useRef(null);
  // const Mission = useRef(null);
  // const Project = useRef(null);
  // const Timer = useRef(null);
  // const Team = useRef(null);
  // const Footer = useRef(null);
  // const Footer2 = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };



  return (
    <div>
      {/* <ScrollToTop /> */}
        <NAVBAR />

      <div className="front-main">
        <Typography variant="h1" align="center" sx={{ color: "white", marginTop: 8, fontWeight: 750 }}><span className="change-content"></span></Typography>
      </div>


      {/* ref={AboutUs} */}
      <div className="services" id='about' >
        <div className="yellow-container"></div>
        {/* about us section  */}
        <section class="red">
          <div class="left">
            <h1>ABOUT <span>US </span> </h1>
            <p> Enactus India is a priority country for the future expansion of ENACTUS as one of the largest Enactus country operations. Students who take part organize into teams at their school and use business principles to create outreach initiatives. Teams are given a platform to present the outcomes of their projects and to be judged by business executives through the Enactus India National Competition. As the students of India’s first all-women technical varsity, we are determined to empower the oppressed through entrepreneurial awakening. We at Enactus Indira Gandhi Delhi Technical University for Women aspire to create a better world. We are a team of strong-headed 60 girls and we believe that technology along with entrepreneurial actions will drive a great impact on everyone.
            </p>
            {/* <div class="buttons">
              <a href="#" class="btnone">You Are Not Alone</a>
              <a href="https://t.me/+UcjAd-jZteM3Mzg1" class="btntwo">Join The Community </a>
            </div> */}
          </div>
          <div class="right">
          <img src={teamPic} alt="teamPic" />
          </div>
        </section>


        <div className="yellow-container"></div>
      </div>




      <div className="blog" id="Mission">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 5, fontWeight: 650 }}>OUR <span>  VALUES </span></Typography>

        <div class="wraps">
          <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Integrity</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>We uphold integrity in all our projects by ensuring that decisions are made considering ethical guidelines and a sense of accountability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Innovation</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>We foster a culture of innovation in each of our projects to develop unique and sustainable solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Passion</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>We have passion for creating a positive impact which is evident in the dedication and commitment of team members</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div class="inner">
                    <p>Collaboration</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>We understand the significance of collaboration and actively seek partnerships to amplify the impact.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="timer">
        <div className="white-container"></div>
        <Counter />
        <div className="white-container"></div>
      </div>


      <div className="project">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 5, fontWeight: 650 }}>OUR<span>  PROJECTS</span></Typography>
        <PROJECT />
      </div>
      <div className="yellow-container"></div>
      
      
      <div className="team">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 8, fontWeight: 650, marginTop: 7, marginBottom: 10 }}> <span> GLANCE AT  </span> OUR ACHIEVEMENTS </Typography>
            <Achievements/>
      </div>
      <br/>
      <br/>
      <div className="yellow-container"></div>
      <div className="team">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 8, fontWeight: 650, marginTop: 7, marginBottom: 10 }}> <span> OUR  </span> MENTORS </Typography>
        < MENTORS />
      </div>
      <div className="yellow-container"></div>



      <div className="site-footer" id="footer">
        <div className="north">
          <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
          <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
            <div className="text">Indira Gandhi Delhi Technical University for Women,  <br />
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
                <li><a class="twitter" href="https://linktr.ee/Enactus_IGDTUW"><i class="fa fa-tree" aria-hidden="true"></i></a></li>
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
    </div>
  )
};
