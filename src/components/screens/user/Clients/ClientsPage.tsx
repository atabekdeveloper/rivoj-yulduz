import React from 'react';
import LazyLoad from 'react-lazyload';
import yandex from 'src/assets/images/client/yandex.jpg';

import s from './client.module.scss';

const ClientsPage: React.FC = () => (
  <div className={s.clients}>
    <div className="container">
      <h1 className="title">Наши клиенты</h1>
      <div className={s.items}>
        {[...Array(5)].map((_, i) => (
          <LazyLoad className={s.item} key={i}>
            <img src={yandex} alt="Yandex" />
          </LazyLoad>
        ))}
      </div>
    </div>
  </div>
);

export { ClientsPage };
