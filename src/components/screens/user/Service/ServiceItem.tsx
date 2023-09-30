/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Img from 'react-cool-img';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { TServiceItem } from './service.types';

import s from './service.module.scss';

const ServiceItem: React.FC<TServiceItem> = ({ title, icon, slug }) => {
  const navigate = useNavigate();
  return (
    <li
      className={s.item}
      onClick={() => navigate(`${slug === 'service' ? '/service' : `/service/${slug}/1`}`)}
    >
      <div className={s.title}>
        <span>{title}</span>
        <MdOutlineKeyboardArrowRight size={25} />
      </div>
      <Img className="none" src={icon} alt={title} />
    </li>
  );
};

export { ServiceItem };
