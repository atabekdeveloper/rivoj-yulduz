import React from 'react';
import { useLocation } from 'react-router-dom';

import { NewItems } from './NewItems';
import { NewsSliderItems } from './NewsSliderItems';

import s from './news.module.scss';

const NewsPage: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={s.news}>
      <div className="container">
        <h1 className="title">Новости</h1>
        {pathname === '/' && <NewsSliderItems />}
        {pathname === '/news' && <NewItems />}
      </div>
    </div>
  );
};

export { NewsPage };
