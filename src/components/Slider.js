import React from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from './data';

export default function App() {
  const mobile = window.innerWidth < 800
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: mobile ? 3 : 8,
    slidesToScroll: mobile ? 3 : 8,
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
