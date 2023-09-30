import React from 'react';
import Img from 'react-cool-img';
import Slider from 'react-slick';
import Banner from 'src/assets/images/slider.jpg';

import s from './home.module.scss';

const HomeSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={s.sliders}>
      <Img src={Banner} alt="Banner" />
      <Img src={Banner} alt="Banner" />
    </Slider>
  );
};

export { HomeSlider };
