import React from 'react';
import Img from 'react-cool-img';
import { useGetUserPortfoliosQuery } from 'src/services';

import s from './portfolio.module.scss';

const PortfolioInfoPage: React.FC = () => {
  const { data: portfolios } = useGetUserPortfoliosQuery();
  return (
    <div className={s.info}>
      <div className="container">
        <h1 className="title">Наши работы</h1>
        <ul className={s.items}>
          {portfolios?.data.map((el) => (
            <li key={el.slug} className={s.item}>
              <Img src={el.image} alt={el.title} />
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
