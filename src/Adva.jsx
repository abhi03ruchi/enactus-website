import React ,{useRef} from "react"
import "./Adva.css"
import AdvaImg from "./Images/Adva-overview.png"
import imag1 from './GulKaari/assets/Enactus.png';
import imag3 from './Images/AdvaLogo.png';
import AdvaFilter from "./Images/adva-filter.png"
import AdvaStory from "./Images/adva-story.png"
import logo from './GulKaari/assets/Enactus.png'

import { Typography,Button } from "@mui/material";


export default function Adva(){
    const AboutUs = useRef(null);


    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };
    return(
      <>
        <div className="adva">
          <div className="adva-main">
                <div className="nav">
                    <div className="img1" ><img src={imag1} alt="hello" /></div>
                </div>
                <div className="gul-sections">
                    <div className="left">
                        <img src={imag3} alt="" />
                    </div>
                    <div className="right">
                        <Typography variant="h1" fontFamily={'Libre Baskerville'} align="left" sx={{ color: "#42636E", marginTop: 10, fontWeight: 750 }}>PROJECT ADVA</Typography>
                        <Typography align="left" fontSize={24} variant="body1" sx={{ color: "#131E3D", marginTop: 5, marginBottom: 5 }}>
                        Adding Value to water, providing clean drinking water accessible to all

                        </Typography>
                        <Button align="center" color="secondary" sx={{ backgroundColor:"#3F9DAA" , color:"#222344" }}  onClick={() => scrollToSection(AboutUs)}>Learn More </Button>

                    </div>
                </div>
        </div>

        <div ref={AboutUs} className="overview adva">
                <div className="left">
                    <div className="overview-content">
                        <Typography variant="h2" sx={{ color: "#222344", marginTop: 5, marginLeft: 17, fontWeight: 650 }}>An Overview</Typography>

                        <Typography align="left" variant="body1" fontSize={22} sx={{ color: "#222344", margin: 9 }}>Project Adva is an initiative by Enactus IGDTUW to increase access to clean 
            and affordable drinking water. </Typography>
            <Typography align="left" variant="body1" fontSize={22} sx={{ color: "#222344", margin: 9, marginBottom: 10 }}>We are modelling a cheap yet efficient biodegradable water filter which aims to provide clean and sanitized drinking water to economically weaker section of the society. We work with the motto of "Adding Value To People's Life"</Typography>

                        <button>Get In Touch</button>
                    </div>
                    {/* <button>Get In Touch</button> */}

                </div>
                <div className="right">
                    <img src={AdvaImg}/>
                </div>
            </div>
        <div className="goals">
        <Typography variant="h2" fontSize={65} align="center"  sx={{ color: "#222344", marginTop:5, marginBottom: 8, fontWeight: 650 }}> What do we do ?</Typography>
            <div class="container">	
            <div class="wrapper">	
            <div class="arrow-steps clearfix">
          <div class="step current one-adva"> <span> Step 1</span> </div>
          <div class="step two"> <span>Step 2 </span> </div>
          <div class="step three"> <span> Step 3</span> </div>
          <div class="step four"> <span>Step 4</span> </div>
			  </div>
		
</div>
</div>
        </div>

        <Typography variant="h2" fontSize={65} align="center"  sx={{ color: "#222344", marginTop:5, marginBottom: 8, fontWeight: 650 }}> Sustainable Development Goals</Typography>

<ul id="categories" class="clr">
<li class="pusher"></li>

<li>
<div>
<img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
<h1>Goal 15</h1>
<p>Life on land</p>
</div>
</li>

<li>
<div>
<img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt=""/>
<h1>Goal 3</h1>
<p>Good health and well-being</p>
</div>
</li>

<li>
<div>
<img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt=""/>
<h1>Goal 8</h1>
<p>Decent work and economic growth</p>
</div>
</li>

<li>
<div>
<img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt=""/>
<h1>Goal 9</h1>
<p>Industry, innovation, and infrastructure</p>
</div>
</li>

<li>
<div>
<img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt=""/>
<h1>Goal 13</h1>
<p>Climate action</p>
</div>
</li>

<li>
<div>
<img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt=""/>
<h1>Goal 15</h1>
<p>Life on land</p>
</div>
</li>


</ul>

      <Typography variant="h2" fontSize={65} align="center"  sx={{ color: "#222344", marginTop:5, marginBottom: 8, fontWeight: 650 }}> 
      Our Filter Model</Typography>
      <div className="adva-stories">
            <div className="right">
                <img src={AdvaFilter}/>
            </div>
            <div className="left">
                <h4>Features</h4>
                <li>Keeps water cool for long </li>
                <li>Filter bag is permeable to residues lower than 5 micron</li>
                <li>can filter upto 8-10 litres of water</li>
            </div>
     </div>
        <div>
            <div className="adva-line">
                <h1>Stories that inspire</h1>
            </div>
            <div className="adva-stories">
                <div className="right">
                    <img src={AdvaStory}/>
                </div>
                <div className="left">
                <h6>"Since I have helped these students my life has totally changed, earlier I didn't have enough money 
                to feed my family but that is not the case now. Thanks to these ambitious students, I  have gained 
                popularity and find it much easier to sustain my livelihood."</h6>

                </div>
            </div>
            <div className="adva-line"></div>
        </div>

        </div> 
         <Typography bgcolor={'black'} variant="h2" align="left" fontFamily={'Rubik'} fontSize={25} sx={{ paddingLeft:2, paddingTop:2 ,margin:1.5 , color: "whitesmoke", fontWeight: 650 }}> Contact Us </Typography>
         <div  className="site-footer">
             <div className="north">
                 <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
                     <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
                     Opp to James church, delhi-110006</div>
                 </div>
                 <div className="one"><ion-icon name="call-sharp"></ion-icon>
                     <div className="text">  Shreya Agarwal: +91 7303042052</div>
                 </div>
                 <div className="one"> <ion-icon name="mail-sharp"></ion-icon>
                     <div className="text">  projectadva2122@gmail.com<br/>
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



</>
    )
}