import React, { useRef } from "react";
import  { useState} from "react";
import './Dharini.css';
import { Typography } from "@mui/material";
import logo from "./assets/Enactus copy.png";
import lines from "./assets/3lines.png";
import dhariniLogo from "./assets/dhariniLogo.png";
import imag1 from "./assets/img1.png";
import imag2 from "./assets/img2.png";
import how1 from "./assets/how1.png";
import how2 from "./assets/how2.png";
import weFlow from "./assets/weFlow.png";
import bookmark from "./assets/book.png"
import sustain from "./assets/sustain.png"
import ach1 from "./assets/ach1.png"
import ach2 from "./assets/ach2.png"
import ach3 from "./assets/ach3.png"
import MENU from "./menu.jsx"
import NAVBAR from "../NAVBAR";
// import HamburgerDropdown from "./HamburgerDropdown"



export default function Dharini() {

    const [value , setValue] = useState(false);
    const handleClick = () => {
        setValue(!value);
      };


    const Overview = useRef(null);
    const What = useRef(null);
    const How = useRef(null);
    const WeFlow = useRef(null);
    const goals = useRef(null);
    const sponser = useRef(null);
    const achievments = useRef(null);
    const Footer = useRef(null);

    return (

        <div className="dha-app">
            <div className="dha-home">
                {/* <div className="nav">
                    <div className="img1" ><img src={logo} alt="logo" /></div>
                    <MENU value={value} handleClick={handleClick}/>
                </div> */}
                <NAVBAR/>
                <div className="dha-sections">
                    <div className="left">
                        <img src={dhariniLogo} alt="" />
                    </div>
                    <div className="right">
                        <Typography variant="h1" fontFamily={'Libre Baskerville'} align="left" sx={{ color: "#FFE321", marginTop: 10, fontWeight: 750 }}>PROJECT DHARINI</Typography>
                        <Typography align="left" fontSize={26} variant="body1" sx={{ color: "white", marginTop: 5, marginBottom: 4 }}>
                            An initiative to spread awareness and services for menstrual and sexual health while advocating inclusivity across all genders.
                        </Typography>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>



            <div ref={Overview} className="dha-overview">
                <div className="left">
                    <div className="overview-content">
                        <Typography variant="h2" fontFamily={'Libre Baskerville'} sx={{ color: "#222344", marginTop: 5, marginLeft: 9, fontWeight: 650 }}>An Overview</Typography>

                        <Typography align="left" variant="body1" fontFamily={'Arimo'} fontSize={22} sx={{ color: "#222344", margin: 9, marginBottom: 10 }}>Project Dharini is an initiative under Enactus IGDTUW.
                            Dharini represents the earth, the support system or bearer of community. For humans, it is all of us. Every person who bleeds, who goes through large ordeals, Dharini represents every one of them.<br />
                            We work towards the empowerment of all menstruators by advocating gender inclusivity, menstrual and sexual awareness. In the past we have conducted sessions with an audience ranging from children to adults and impacted 4000+ women, 2000+ children and 100 trans folk so far. </Typography>
                        <button>Get In Touch</button>
                    </div>

                </div>
                <div className="right">
                    <img src={imag1} alt="hello" />
                    <img src={imag2} alt="hello" />
                </div>

            </div>


            <div ref={What} className="dha-what">
                <Typography variant="h2" fontFamily={'Libre Baskerville'} align="center" sx={{ color: "#222344", paddingTop: 5, marginLeft: 0.2, fontWeight: 650 }}>What we do?</Typography>

                <section id="support" class="swiper">
                    <div class="swiper-wrapper">
                        <div class="card">
                            <div class="card__content">
                                <span class="card__title">Mental Health</span>
                                <span class="card__name"></span>
                                <p class="card__text">Menstruators often face intense PMS during their periods which may even transform into PMDD. Moreover, queer folks often face gender dysphoria while questioning themselves and their identity. In order to address these crucial issues, WeFlo has a panel of pride friendly therapists at affordable prices so that help can be accessed by everyone.</p>


                            </div>
                        </div>

                        <div class="card">
                            <div class="card__content">
                                <span class="card__title">Menstrual Health</span>
                                <span class="card__name"></span>
                                <p class="card__text">Due to the stigma surrounding menstruation in our society, majority of menstruators cannot access professional help even when there is something wrong. Moreover the taboo around sex education, dampens the culture of a regular visit to the gynae. Therefore, we provide gynae services at minimal costs so that no one has to suffer in silence. </p>

                            </div>
                        </div>


                    </div>
                </section>

            </div>




            <div ref={How} className="dha-how">
                <Typography variant="h2" align="center" sx={{ color: "#222344", paddingTop: 5, fontWeight: 650 }}>How we do it?</Typography>

                <div className="what-content">
                    <div className="part1">
                        <img src={how1} alt="" />
                        <Typography variant="body1" fontSize={20} sx={{ color: "#222344", marginTop: 10, marginLeft: 3, marginBottom: 10 }}>
                            Project Gulkaari aligns with the motive to help underprivileged communities in their entrepreneurial journey. We work hand in hand to understand their business, increase their reach, and helping with their source of income for them.
                        </Typography>
                    </div>
                    <div className="part2">
                        <img src={how2} alt="" />
                        <Typography variant="body1" fontSize={20} sx={{ color: "#222344", marginTop: 10, marginLeft: 3, marginBottom: 12 }}>


                            Providing them with raw materials and training them to create products. Teaching them basic business ethics, improving their language skills helped them acquire the profit which was generated through various channels of marketing.  </Typography>
                    </div>
                </div>
            </div>


            <div ref={WeFlow} className="weflow">
                <div className="left">
                    <img src={weFlow} alt="" />
                </div>
                <div className="right">
                    <Typography variant="h2" align="center" sx={{ color: "#222344", marginTop: 0, marginLeft: 0, marginBottom: 5, fontWeight: 650 }}>Features of WeFlow</Typography>

                    <Typography variant="body1" fontSize={20} sx={{ color: "#000", marginLeft: 0, marginBottom: 8 }}>
                        Our website will provide 1:1 consultation to users with pride-friendly gynecologists, therapists, and counselors who offer an inclusive space with hate monitoring at a minimal cost so that people can have access to these services regardless of their gender or economic stature. </Typography>

                    <div className="boxs">
                        <div className="box1">
                            <img src={bookmark} alt="" />
                            <p>hate speech monitoring</p>
                        </div>
                        <div className="box1">
                            <img src={bookmark} alt="" />
                            <p>Faqs and resources</p>
                        </div>
                        <div className="box1">
                            <img src={bookmark} alt="" />
                            <p>consultation through video chatting</p>
                        </div>
                        <div className="box1">
                            <img src={bookmark} alt="" />
                            <p>Community support</p>
                        </div>
                        <div className="box1">
                            <img src={bookmark} alt="" />
                            <p>Online delivery of menstrual products and medicines</p>
                        </div>
                        <div className="box1">
                            <img src={bookmark} alt="" />
                            <p>Blogs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={goals} className="dha-goals">
                <div className="impact">
                    <Typography variant="h2" fontFamily={'Libre Baskerville'} align="center" sx={{ color: "#222344", marginTop: 0, marginLeft: 0, marginBottom: 5, fontWeight: 650 }}>Impact Generated</Typography>
                </div>
                <div className="goal">
                    <Typography variant="h2" align="left" fontFamily={'Libre Baskerville'} sx={{ color: "#222344", marginTop: 0, marginLeft: 0, marginBottom: 5, fontWeight: 650 }}>Sustainable Development Goals</Typography>
                    <img src={sustain} alt="" />
                </div>
            </div>

            <div ref={sponser} className="dha-sponsi">
                <Typography variant="h2" fontFamily={'Libre Baskerville'} align="center" sx={{ color: "#FEFFD1", paddingTop: 5, marginLeft: 0, marginBottom: 5, fontWeight: 650 }}>Our Collaborators</Typography>

                <Typography variant="h5" fontFamily={'Libre Baskerville'} align="center" sx={{ color: "#FEFFD1", paddingTop: 0, marginLeft: 0, marginBottom: 0, fontWeight: 250 }}>The ones who support us in our intiative</Typography>

                {/* <div className="box">
                        <div className="collabs">
                            <img src={logo1} alt="" />
                            
                        </div>
                        <div className="collabs">
                            <img src={logo2} alt="" />
                        </div>
                        <div className="collabs">
                            <img src={logo3} alt="" />
                        </div>
                        <div className="collabs">
                            <img src={logo4} alt="" />
                        </div>
                        <div className="collabs">
                            <img src={logo5} alt="" />
                        </div>
                    </div> */}
            </div>

            <div ref={achievments} className="dha-ach">
                <Typography variant="h2" fontFamily={'Libre Baskerville'} align="center" sx={{
                    color: "#222344", marginTop: 0,
                    paddingTop: 10, marginLeft: 0, marginBottom: 5, fontWeight: 650
                }}>Achievements</Typography>


                <div class="content-wrapper">
                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={ach1} alt="" class="news-card__image" />
                        <div class="news-card__text-wrapper">
                            <h2 class="news-card__title">Project Dharini's Sanitary napkin incinerator</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Project Dharini's Sanitary napkin incinerator was featured in the 'Yuva' Newspaper.</p>
                                {/* <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={ach2} alt="" class="news-card__image" />
                        <div class="news-card__text-wrapper">
                            <h2 class="news-card__title">1st position in Aspire 2020</h2>
                            <div class="news-card__post-date">Jan 29, 2020</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Got 1st position in Aspire 2020 Social B plan Competition at NSUT, Delhi</p>
                                {/* <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={ach3} alt="" class="news-card__image" />
                        <div class="news-card__text-wrapper">
                            <h2 class="news-card__title">Won the SDG3 race by Enactus India </h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt"> Project Dharini won the SDG3 race by Enactus India and recieved funding worth 25k</p>
                                {/* <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>


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
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
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