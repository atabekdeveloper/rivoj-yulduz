import clsx from 'clsx';
import React from 'react';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
import newsImg from 'src/assets/images/news/img.jpg';
import { useResponsive } from 'src/hooks';

import { TNewsItem } from './news.types';

import s from './news.module.scss';

const NewsItem: React.FC<TNewsItem> = ({ direction }) => {
  const { isMobile } = useResponsive(772);
  return (
    <div className={clsx(s.item, s[`${isMobile ? 'vertical' : direction}`])}>
      <Img src={newsImg} alt="Title" />
      <div className={s.inner}>
        <span>15.08.2023 10:41</span>
        <div className={s.body}>
          <h2>Новости 1</h2>
          <p>
            Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis. Egestas
            sagittis quis ultrices.
          </p>
          <Link to="/news">Подробнее</Link>
        </div>
      </div>
    </div>
  );
};

export { NewsItem };
