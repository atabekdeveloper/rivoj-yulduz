import React from 'react';
import Img from 'react-cool-img';
import { useNavigate } from 'react-router-dom';
import portfolioImg from 'src/assets/images/portfolio/img.jpg';
import { UiButton } from 'src/components/ui';

import s from './portfolio.module.scss';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.portfolio}>
      <div className="container">
        <h1 className="title">Портфолио</h1>
        <div className={s.items}>
          <Img src={portfolioImg} alt="Portfolio" />
          <Img src={portfolioImg} alt="Portfolio" />
          <Img src={portfolioImg} alt="Portfolio" />
          <Img src={portfolioImg} alt="Portfolio" />
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
