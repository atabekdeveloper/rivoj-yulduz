import React from 'react';
import Img from 'react-cool-img';
import yandex from 'src/assets/images/client/yandex.jpg';

import s from './client.module.scss';

const ClientsPage: React.FC = () => (
  <div className={s.clients}>
    <div className="container">
      <h1 className="title">Наши клиенты</h1>
      <div className={s.items}>
        <Img src={yandex} alt="Yandex" />
        <Img src={yandex} alt="Yandex" />
        <Img src={yandex} alt="Yandex" />
        <Img src={yandex} alt="Yandex" />
        <Img src={yandex} alt="Yandex" />
        <Img src={yandex} alt="Yandex" />
      </div>
    </div>
  </div>
);

export { ClientsPage };
