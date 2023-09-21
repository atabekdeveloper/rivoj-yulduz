import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserTypesQuery } from 'src/services';

import { ServiceItem } from './ServiceItem';

import s from './service.module.scss';

const ServicePage: React.FC = () => {
  const { pathname } = useLocation();
  const { data: types } = useGetUserTypesQuery();
  return (
    <div className={s.service}>
      <div className="container">
        <div className="title">
          {pathname === '/service' ? <span>Все категории услуг</span> : <span>Наши услуги</span>}
        </div>
        <ul className={s.items}>
          {types?.data.map(({ title, icon, slug }, i) => (
            <ServiceItem key={i} title={title} icon={icon} slug={slug} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ServicePage };
