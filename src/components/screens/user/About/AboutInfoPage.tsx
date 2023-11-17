import React from 'react';
import LazyLoad from 'react-lazyload';
import about1 from 'src/assets/images/about/aboutInfo1.jpg';
import about2 from 'src/assets/images/about/aboutInfo2.jpg';

import { AboutEmployers } from './AboutEmployers';

import s from './about.module.scss';

const AboutInfoPage: React.FC = () => (
  <div className={s.about}>
    <div className="container">
      <h1 className="title">О нас</h1>
      <div className={s.body}>
        <LazyLoad>
          <img src={about1} alt="About Info 1" />
        </LazyLoad>
        <div className={s.title}>
          <h2>Кто мы</h2>
          <p>
            <span>
              В компании ведут свою деятельность 25 профессиональных сотрудников , компания имеет
            </span>
            <br />
            <span>
              14 летнюю практику , входит в топ 3 рекламных агентств. Главный офис компании
              расположен
            </span>
            <br />
            <span>
              в центре города . Кроме офиса имеется 2 производственных цеха , которые производят
              более
            </span>
            <br />
            <span>140 видов рекламной продукции оказывает услугу населению .</span>
          </p>
        </div>
        <LazyLoad>
          <img src={about2} alt="About Info 2" />
        </LazyLoad>
        <div className={s.title}>
          <h2>Что мы делаем?</h2>
          <p>
            Компания занимается производством различных видов рекламы : Наружной и интерьерной
            рекламой , установка Led–экранов и сдача в аренду , при помощи и рекламы создавать
            бренды на остановках , на автомобилях , делать рекламу на билбордах и брендмауерах ,
            деятельность СМИ маркетинга , реклама через блогеров , через социальные сети ,
            деятельность дижитал маркетинга , деятельность промоутеров BTL, реклама через ТВ и радио
            , реклама на спец одежде , бумажных и полиэтиленовых пакетах.
          </p>
        </div>
        <AboutEmployers />
      </div>
    </div>
  </div>
);

export { AboutInfoPage };
