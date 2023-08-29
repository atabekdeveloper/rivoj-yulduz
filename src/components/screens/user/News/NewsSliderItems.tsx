import React from 'react';
import Slider from 'react-slick';
import { UiButton } from 'src/components/ui';

import { NewsItem } from './NewsItem';

import s from './news.module.scss';

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
    <div className={s.sliders}>
      <Slider {...settings}>
        {[...Array(10)].map((_, i) => (
          <NewsItem direction="vertical" key={i} />
        ))}
      </Slider>
      <UiButton type="default" color="blue" text="Все новости" icon />
    </div>
  );
};

export { NewsSliderItems };
