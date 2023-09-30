import React from 'react';

import s from './achievement.module.scss';

const AchievementPage: React.FC = () => (
  <div className={s.achievement}>
    <div className="container">
      <h1 className="title">Достижении</h1>
      <ul className={s.items}>
        <li>
          <h1>1400</h1>
          <p>товары...</p>
        </li>
        <li>
          <h1>1400</h1>
          <p>товары...</p>
        </li>
        <li>
          <h1>1400</h1>
          <p>товары...</p>
        </li>
        <li>
          <h1>1400</h1>
          <p>товары...</p>
        </li>
        <li>
          <h1>1400</h1>
          <p>товары...</p>
        </li>
      </ul>
    </div>
  </div>
);

export { AchievementPage };
