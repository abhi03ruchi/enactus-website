import * as React from 'react';
import NAVBAR from './NAVBAR';
import './PROJECT.css'
import EveP1 from "./Images/EveP1.jpg"
import EveP2 from "./Images/EveP2.jpg"
import EveP3 from "./Images/EveP3.jpg"
import EveP4 from "./Images/EveP4.jpg"
import EveP5 from "./Images/EveP5.jpg"
import EveP6 from "./Images/EveP6.jpg"
import EveP7 from "./Images/EveP7.jpg"
import EveP8 from "./Images/EveP8.jpg"
import EveP9 from "./Images/EveP9.jpg"
import EveP10 from "./Images/EveP10.jpg"
import EveP11 from "./Images/EveP11.jpg"
import Event8 from "./Images/Event8.png"
import logo from './homeAssets/Enactus.png'
import { Typography } from "@mui/material";

export default function Event(){
    return(
        <>
        <NAVBAR/>
        
        <div className="project">
        <Typography align="center" variant="h2" sx={{ color: "white", margin: 5, fontWeight: 650 }}>OUR<span>EVENTS</span></Typography>
        </div>

        <div id='project'>
        <div class="card-category-2">
            <ul>
                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-image">
                            <span class="View More"></span>
                            <img src={EveP2} />
                        </div>

                        <div class="card-link">
                        <h3>Project Aveksha's field visit to Earthling's Trust</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP1} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Project Dharini's field visit to Vatsalya Foundation</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={Event8} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Shoorvriksh in collaboration with rac delhi</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP11} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Project Dharini's Collaboration with pinkishe </h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP10} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Project Dharini's menstrual product donation drive</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP9} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Project Adva's field visit to Rajapur Village </h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP5} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Mental health awareness walk in Collaboration with Sadaysadev</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP4} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Christmas celebration at Ek Koshish Special School</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP3} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Cloth collection drive in collaboration with GirlUpAadya</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP8} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Field visit to the production centre of Goonj NGO</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP7} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Project Aveksha's Collar Campaign</h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={EveP6} />
                            </div>
                        </div>

                        <div class="card-link">
                            <h3>Project Aveksha's Feed2stray Campaign</h3>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
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
    </>
    )
}