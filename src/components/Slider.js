import React from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from './data';

export default function App() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    className: "myCustomCarousel"
  };
  return (
    <Slider {...settings}>
      {data.map(item => (
        <div className="slider-item">
          <img src={item} alt='item' />
        </div>
      ))}
    </Slider>
  );
}
