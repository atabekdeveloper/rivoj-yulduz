import React from 'react';

import s from './achievement.module.scss';

const AchievementPage: React.FC = () => (
  <div className={s.achievement}>
    <div className="container">
      <h1 className="title">Достижении</h1>
      <ul className={s.items}>
        <li>
          <h1>140</h1>
          <p>видов рекламные продукций</p>
        </li>
        <li>
          <h1>15</h1>
          <p>лет на рынке</p>
        </li>
        <li>
          <h1>25</h1>
          <p>сотрудников</p>
        </li>
        <li>
          <h1>1000</h1>
          <p>довольных клиентов</p>
        </li>
        <li>
          <h1>2500</h1>
          <p>лучшие изделия</p>
        </li>
        <li>
          <h1>45</h1>
          <p>работа с топ брендами</p>
        </li>
      </ul>
    </div>
  </div>
);

export { AchievementPage };
