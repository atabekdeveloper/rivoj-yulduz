import React from 'react';
import Img from 'react-cool-img';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { TServiceItem } from './service.types';

import s from './service.module.scss';

const ServiceItem: React.FC<TServiceItem> = ({ title, icon }) => (
  <li className={s.item}>
    <Link to="/service" className={s.title}>
      <span>{title}</span>
      <MdOutlineKeyboardArrowRight size={25} />
    </Link>
    <Img className="none" src={icon} alt={title} />
  </li>
);

export { ServiceItem };
