import React from 'react';
import Slider from 'react-slick';

import { NewsItem } from './NewsItem';

const NewsSliderItems: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {[...Array(10)].map((_, i) => (
        <NewsItem direction="vertical" key={i} />
      ))}
    </Slider>
  );
};

export { NewsSliderItems };
