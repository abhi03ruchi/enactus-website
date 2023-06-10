import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ach1 from "./Images/ACHIEVEMENT1.jpg"
import Ach2 from "./Images/ACHIEVEMENT2.jpg"
import Ach3 from "./Images/ACHIEVEMENT3.jpg"
import Ach4 from "./Images/ACHIEVEMENT4.jpg"
import Ach5 from "./Images/ACHIEVEMENT5.jpg"


export default function Achievement() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <div className="pink">
                <Slider {...settings}>

                    <div class="img-card iCard-style1">
                        <div class="card-image">
                            <img src={Ach1} />
                        </div>
                    </div>



                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <img src={Ach2} />
                            </div>
                            {/* hello */}
    
                        </div>
                    </div>



                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <img src={Ach3} />
                            </div>
                        </div>
                    </div>



                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={Ach4} />
                            </div>
                        </div>
                    </div>



                    <div class="img-card iCard-style1">
                        <div class="card-content">
                            <div class="card-image">
                                <span class="card-title"></span>
                                <img src={Ach5} />
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>


        </div>
    )
}