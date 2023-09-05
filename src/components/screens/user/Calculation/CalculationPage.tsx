/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
import React from 'react';
import Img from 'react-cool-img';
import { RxHamburgerMenu } from 'react-icons/rx';
import orderImg from 'src/assets/images/news/img.jpg';
import { UiButton } from 'src/components/ui';
import { useActions, useResponsive } from 'src/hooks';

import { CalculationCounter } from './CalculationCounter';
import { CalculationDrawer } from './CalculationDrawer';
import { CalculationMenu } from './CalculationMenu';

import s from './calculation.module.scss';

const CalculationPage: React.FC = () => {
  const { isMobile } = useResponsive(860);
  const { toggleNavbar } = useActions();
  return (
    <div className={s.calculation}>
      <div className="container">
        {isMobile && (
          <div className={s.title}>
            <h1>Наружная реклама</h1>
            <span className={s.hamburger} onClick={() => toggleNavbar()}>
              <RxHamburgerMenu className={s.icon} />
            </span>
          </div>
        )}
        <div className={s.body}>
          {!isMobile && (
            <div className={s.menu}>
              <h2>Наружная реклама</h2>
              <CalculationMenu />
            </div>
          )}
          <CalculationDrawer />
          <div className={s.content}>
            <Img src={orderImg} alt="Title" />
            <div className={s.info}>
              <h1>Объёмные буквы</h1>
              <p>
                Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
                metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
                neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
              </p>
            </div>
            <h1>Калкульятор</h1>
            <CalculationCounter />
            <div className={s.result}>
              <div className={s.count}>
                <p>Итого:</p>
                <h1>0 UZS</h1>
              </div>
              <div className={s.btn}>
                <UiButton text="Заказать" color="pink" type="default" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CalculationPage };
