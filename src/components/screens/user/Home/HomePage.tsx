import { Space } from 'antd';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/shadow-logo.svg';
import {
  AchievementPage,
  ClientsPage,
  ContactInfoPage,
  PortfolioPage,
} from 'src/components/screens';
import { UiButton } from 'src/components/ui';

import { HomeSlider } from './HomeSlider';

import s from './home.module.scss';

const HomePage: React.FC = () => (
  <>
    <HomeSlider />
    <div className={s.home}>
      <div className="container">
        <div className={s.body}>
          <div className={s.info}>
            <h1>
              <span>Рекламное агентство</span>
              <br />
              <span>«Rivoj Yulduz»</span>
            </h1>
            <p>
              Все виды рекламы. От дизайна до монтажа. 15-лет на рынке производство рекламных
              продукций. Сделай свой бизнес ярче !
            </p>
            <Space size={20} wrap>
              <a href="#contact">
                <UiButton text="Оставить заявку" type="primary" color="pink" />
              </a>
              <Link to="/service">
                <UiButton text="Все категории услуг" type="default" color="blue" />
              </Link>
            </Space>
          </div>
          <LazyLoad>
            <img src={logo} alt="Logo" />
          </LazyLoad>
        </div>
      </div>
    </div>
    <PortfolioPage />
    <ClientsPage />
    <AchievementPage />
    <ContactInfoPage />
  </>
);

export { HomePage };
