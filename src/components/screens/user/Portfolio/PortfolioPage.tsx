import React from 'react';
import Img from 'react-cool-img';
import { useNavigate } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useGetUserPortfoliosQuery } from 'src/services';

import s from './portfolio.module.scss';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: portfolios } = useGetUserPortfoliosQuery();
  return (
    <div className={s.portfolio}>
      <div className="container">
        <h1 className="title">Портфолио</h1>
        <div className={s.items}>
          {portfolios?.data.map((el) => (
            <Img key={el.slug} src={el.image} alt={el.title} />
          ))}
        </div>
        <div className={s.btn}>
          <UiButton
            text="Ещё работы"
            type="default"
            color="pink"
            onClick={() => navigate('/portfolio')}
          />
        </div>
      </div>
    </div>
  );
};

export { PortfolioPage };
