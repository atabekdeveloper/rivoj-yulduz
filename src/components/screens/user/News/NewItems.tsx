import React from 'react';
import { useParams } from 'react-router-dom';

import { NewsItem } from './NewsItem';

import s from './news.module.scss';

const NewItems: React.FC = () => {
  const { id } = useParams();
  return (
    <div className={s.items}>
      {[...Array(5)].map((_, i) => (
        <NewsItem direction={id ? 'vertical' : 'gorizontal'} key={i} num={i + 1} />
      ))}
    </div>
  );
};

export { NewItems };
