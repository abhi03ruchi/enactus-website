import React,{useRef} from "react";
import Button from 'react';
import ScrollToTop from "./ScrollToTop";
import { Typography } from "@mui/material";
import  Collection from './Project'
import { Link } from "react-router-dom";

export default function Home(){
  const AboutUs = useRef(null);
  const Mission = useRef(null);
  const Project = useRef(null);
  const Contact =useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
    return(
    <div>
        <ScrollToTop />
      <div className="hero">
        <ul>
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
          <li onClick={() => scrollToSection(Contact)} className="link">
            Contact Us
          </li>
        </ul>
        <div>
        <Typography variant="h1" sx={{color:"white",marginTop:10,marginLeft:60,fontWeight:750}}><span className="change-content"></span></Typography>
        </div>
      </div>
      
      <div ref={AboutUs} className="services">
              <div className="yellow-container"></div>
              <Typography variant="h2" sx={{color:"white" ,marginTop:5,marginLeft:17}}>About<span>Us</span></Typography>
              <div className="services-content">
              <Typography variant="body1" sx={{color:"white",margin:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
              </div> 
      </div>


      <div ref={Mission} className="blog">
              <div className="yellow-container"></div>
              <h3>Blog</h3>
      </div>
      <div ref={Project} className="project">
        <Typography align="center" variant="h2" sx={{color:"white",margin:4,fontWeight:650}}>OUR PROJECTS</Typography>
        <div class="gallery-wrap">
          <div class="item item-1"></div>
          <div class="item item-2"></div>
          <div class="item item-3"></div>
          <div class="item item-4"></div>
          <div class="item item-5"></div>
        </div>
      </div>

      <div ref={Contact} className="contact">
              <div className="yellow-container"></div>
              <h3>Contact</h3>
              <div className="white-container"></div>
              <Typography variant="body1" align="center" sx={{color:"white",margin:2}}>Enactus Copyright IGDTUW</Typography>
      </div>
    </div>
    )
};