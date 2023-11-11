/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Empty, Skeleton } from 'antd';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import LazyLoad from 'react-lazyload';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { UiButton } from 'src/components/ui';
import { useActions, useResponsive, useSelectors } from 'src/hooks';
import { useGetUserServiceItemQuery, useGetUserTypeItemQuery } from 'src/services';
import { formatPrice2 } from 'src/utils';

import { CalculationCounter } from './CalculationCounter';
import { CalculationDrawer } from './CalculationDrawer';
import { CalculationMenu } from './CalculationMenu';

import s from './calculation.module.scss';

const CalculationPage: React.FC = () => {
  const { isMobile } = useResponsive(860);
  const { slugType, slugService } = useParams();

  const { data: type } = useGetUserTypeItemQuery(String(slugType));
  const { data: service, isLoading, isSuccess } = useGetUserServiceItemQuery(String(slugService));

  const { paramsItem } = useSelectors();
  const { toggleNavbar, setParamsItem } = useActions();
  const navigate = useNavigate();

  const settings = {
    customPaging(i: number) {
      return (
        <LazyLoad>
          <img className={s.sliderImg} src={service?.data.images[i].image_url} />
        </LazyLoad>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    setParamsItem(null);
  }, []);
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
            {service?.data && (
              <>
                <div className={s.sliders}>
                  <Slider {...settings}>
                    {service.data.images.map((image: any, i: number) => (
                      <LazyLoad key={i}>
                        <img src={image.image_url} />
                      </LazyLoad>
                    ))}
                  </Slider>
                </div>
                <br />
                <br />
                <div className={s.info}>
                  <h1>{service?.data.title}</h1>
                  <p>{service.data.description}</p>
                </div>
              </>
            )}
            {isSuccess && !service?.data && (
              <div className={s.empty}>
                <Empty description="Нет информаций" />
              </div>
            )}
            {isLoading && <Skeleton />}
            <h1>Калькулятор</h1>
            <CalculationCounter />
            <div className={s.result}>
              <div className={s.count}>
                <p>Итого:</p>
                <div className={s.price}>
                  <h1>{formatPrice2(paramsItem?.quantity, 'uzs')}</h1>
                  {paramsItem?.quantity && <p>Без учета доставки и дизайнерских услуг</p>}
                </div>
              </div>
              <div className={s.btn}>
                <h3>
                  {`${paramsItem?.quantity && service?.data.is_discount ? 'Со скидкой' : ''}`}
                </h3>
                <UiButton
                  text="Заказать"
                  color="pink"
                  type="default"
                  disabled={!paramsItem?.quantity}
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
