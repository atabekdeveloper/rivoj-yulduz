import React from 'react';
import { useLocation } from 'react-router-dom';

import { serviceItems } from './service.data';
import { ServiceItem } from './ServiceItem';

import s from './service.module.scss';

const ServicePage: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={s.service}>
      <div className="container">
        <div className="title">
          {pathname === '/service' ? <span>Все категории услуг</span> : <span>Наши услуги</span>}
        </div>
        <ul className={s.items}>
          {serviceItems.map(({ title, icon }, i) => (
            <ServiceItem key={i} title={title} icon={icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ServicePage };
