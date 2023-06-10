import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo from './homeAssets/Enactus.png'
import Vdo from "./Images/Enactus.mp4"
import { Typography } from '@mui/material';
import NAVBAR from './NAVBAR';
import Event1 from "./Images/Event1.png"
import Event2 from "./Images/Event2.png"
import Event3 from "./Images/Event3.png"
import Event4 from "./Images/Event4.png"
import Event5 from "./Images/Event5.png"
import Event6 from "./Images/Event6.png"
import Event7 from "./Images/Event7.png"
import Event8 from "./Images/Event8.png"
import Event9 from "./Images/adva1.png"
import Event10 from "./Images/main1.jpeg"
import Event11 from "./Images/EveP7.jpg"
import Event12 from "./Images/MainPage.jpg"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (

    <div className='gallery'>
      {/* <div className="hero">
        <div className="left">
          <img src={logo} alt="" />
        </div>
      </div> */}
      <NAVBAR />
      <video id="example_video_1" class="video-js vjs-default-skin" controls="controls" width="1440" height="650">
        <source src={Vdo} type='video/mp4' />
      </video>

      <div className="yellow-container"></div>
      <div>
        <ImageList
          sx={{ width: 950, height: 950, marginLeft: 29, marginTop: 5, marginBottom: 5 }}
          variant="quilted"
          cols={4}
          rowHeight={154}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 130, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <>
        <div className="yellow-container"></div>
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
    </div>
  );
}

const itemData = [
  {
    img: Event1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: Event9,
    title: 'Burger',
  },
  {
    img: Event3,
    title: 'Camera',
  },
  {
    img: Event4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: Event2,
    title: 'Hats',
    cols: 2,
  },
  {
    img: Event6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: Event7,
    title: 'Basketball',
  },
  {
    img: Event8,
    title: 'Fern',
  },
  {
    img: Event10,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: Event11,
    title: 'Tomato basil',
  },
  {
    img: Event5,
    title: 'Sea star',
  },
  {
    img: Event12,
    title: 'Bike',
    cols: 2,
  },
];