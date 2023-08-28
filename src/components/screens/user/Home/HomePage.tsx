import React from 'react';
import Img from 'react-cool-img';
import logo from 'src/assets/images/shadow-logo.svg';
import { NewsPage, ServicePage } from 'src/components/screens';
import { UiButton } from 'src/components/ui';

import s from './home.module.scss';

const HomePage: React.FC = () => (
  <>
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
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
            <UiButton size="large">Оставить заявку</UiButton>
          </div>
          <Img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
    <ServicePage />
    <NewsPage />
  </>
);

export { HomePage };
