import React from 'react';
import Img from 'react-cool-img';
import Slider from 'react-slick';
import { useGetUserSlidersQuery } from 'src/services';

import s from './home.module.scss';

const HomeSlider: React.FC = () => {
  const { data: sliders } = useGetUserSlidersQuery();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {sliders?.data.length ? (
        <div className={s.slider}>
          <Slider {...settings} className={s.sliders}>
            {sliders?.data.map((slider) => (
              <Img src={slider.image.image_url} alt={slider.title} />
            ))}
          </Slider>
        </div>
      ) : null}
    </div>
  );
};

export { HomeSlider };
