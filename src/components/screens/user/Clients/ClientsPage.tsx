import React from 'react';
import LazyLoad from 'react-lazyload';

import { clientItems } from './clientItems';

import s from './client.module.scss';

const ClientsPage: React.FC = () => (
  <div className={s.clients}>
    <div className="container">
      <h1 className="title">Наши клиенты</h1>
      <div className={s.items}>
        {clientItems.map((img, i) => (
          <LazyLoad className={s.item} key={i}>
            <img src={img} alt="Yandex" />
          </LazyLoad>
        ))}
      </div>
    </div>
  </div>
);

export { ClientsPage };
