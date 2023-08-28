import React from 'react';

import { NewsItem } from './NewsItem';

import s from './news.module.scss';

const NewItems: React.FC = () => (
  <div className={s.items}>
    {[...Array(5)].map((_, i) => (
      <NewsItem direction="gorizontal" key={i} />
    ))}
  </div>
);

export { NewItems };
