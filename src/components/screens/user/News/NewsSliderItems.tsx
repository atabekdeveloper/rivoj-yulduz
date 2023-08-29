import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { UiButton } from 'src/components/ui';
import { newsSettings } from 'src/config/slider.config';

import { NewsItem } from './NewsItem';

import s from './news.module.scss';

const NewsSliderItems: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.sliders}>
      <Slider {...newsSettings}>
        {[...Array(10)].map((_, i) => (
          <NewsItem direction="vertical" key={i} />
        ))}
      </Slider>
      <div className={s.btn}>
        <UiButton
          type="default"
          icon
          color="blue"
          text="Все новости"
          onClick={() => navigate('/news')}
        />
      </div>
    </div>
  );
};

export { NewsSliderItems };
