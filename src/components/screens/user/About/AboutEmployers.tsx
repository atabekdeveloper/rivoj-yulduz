import React from 'react';
import Img from 'react-cool-img';
import user from 'src/assets/images/user.jpg';

import s from './about.module.scss';

const AboutEmployers: React.FC = () => {
  const x = 0;
  return (
    <ul className={s.items}>
      <li className={s.item}>
        <Img src={user} alt="User" />
        <div className={s.info}>
          <h3>Taylor Romero</h3>
          <span>Глава компании</span>
        </div>
        <p className={s.phone}>+998 90 230 12 34</p>
      </li>
      <li className={s.item}>
        <Img src={user} alt="User" />
        <div className={s.info}>
          <h3>Taylor Romero</h3>
          <span>Глава компании</span>
        </div>
        <p className={s.phone}>+998 90 230 12 34</p>
      </li>
      <li className={s.item}>
        <Img src={user} alt="User" />
        <div className={s.info}>
          <h3>Taylor Romero</h3>
          <span>Глава компании</span>
        </div>
        <p className={s.phone}>+998 90 230 12 34</p>
      </li>
    </ul>
  );
};

export { AboutEmployers };
