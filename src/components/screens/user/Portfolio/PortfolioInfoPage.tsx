import { Skeleton } from 'antd';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { useGetUserPortfoliosQuery } from 'src/services';

import s from './portfolio.module.scss';

const PortfolioInfoPage: React.FC = () => {
  const { data: portfolios, isLoading } = useGetUserPortfoliosQuery();
  return (
    <div className={s.info}>
      <div className="container">
        <h1 className="title">Наши работы</h1>
        <ul className={s.items}>
          {isLoading && <Skeleton />}
          {portfolios?.data.map((el) => (
            <li key={el.slug} className={s.item}>
              <LazyLoad>
                <img src={el.image} alt={el.title} />
              </LazyLoad>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { PortfolioInfoPage };
