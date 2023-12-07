/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useGetUserSlidersQuery } from 'src/services';

import s from './home.module.scss';

const HomeSlider: React.FC = () => {
  const { data: sliders } = useGetUserSlidersQuery();
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {sliders?.data.length ? (
        <div className={s.slider}>
          <Slider {...settings} className={s.items}>
            {sliders?.data.map((slider) => (
              <img
                key={slider.id}
                src={slider.image.image_url}
                alt={slider.title}
                onClick={() => {
                  navigate(`/service/${slider.service.category.type.slug}/${slider.service.slug}`);
                }}
              />
            ))}
          </Slider>
        </div>
      ) : null}
    </div>
  );
};

export { HomeSlider };
