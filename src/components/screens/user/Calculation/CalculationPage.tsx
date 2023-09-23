/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Empty } from 'antd';
import React from 'react';
import Img from 'react-cool-img';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate, useParams } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useActions, useResponsive, useSelectors } from 'src/hooks';
import { useGetUserServiceItemQuery, useGetUserTypeItemQuery } from 'src/services';
import { formatPrice } from 'src/utils';

import { CalculationCounter } from './CalculationCounter';
import { CalculationDrawer } from './CalculationDrawer';
import { CalculationMenu } from './CalculationMenu';

import s from './calculation.module.scss';

const CalculationPage: React.FC = () => {
  const { isMobile } = useResponsive(860);
  const { slugType, slugService } = useParams();

  const { paramsItem } = useSelectors();
  const { toggleNavbar } = useActions();
  const navigate = useNavigate();

  const { data: type } = useGetUserTypeItemQuery(String(slugType));
  const { data: service } = useGetUserServiceItemQuery(String(slugService));
  return (
    <div className={s.calculation}>
      <div className="container">
        {isMobile && (
          <div className={s.title}>
            <h1>{type?.data.title}</h1>
            <span className={s.hamburger} onClick={() => toggleNavbar()}>
              <RxHamburgerMenu className={s.icon} />
            </span>
          </div>
        )}
        <div className={s.body}>
          {!isMobile && (
            <div className={s.menu}>
              <h2>{type?.data.title}</h2>
              <CalculationMenu />
            </div>
          )}
          <CalculationDrawer />
          <div className={s.content}>
            {service?.data ? (
              <>
                <Img src={service?.data.image} alt="Title" />
                <div className={s.info}>
                  <h1>{service?.data.title}</h1>
                  <p />
                </div>
              </>
            ) : (
              <div className={s.empty}>
                <Empty description="Нет информаций" />
              </div>
            )}
            <h1>Калкульятор</h1>
            <CalculationCounter />
            <div className={s.result}>
              <div className={s.count}>
                <p>Итого:</p>
                <h1>{formatPrice(paramsItem?.quantity, 'uzs')}</h1>
              </div>
              <div className={s.btn}>
                <UiButton
                  text="Заказать"
                  color="pink"
                  type="default"
                  onClick={() => navigate('/order')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CalculationPage };
