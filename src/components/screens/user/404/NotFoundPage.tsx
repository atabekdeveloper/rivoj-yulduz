import React from 'react';

import s from './notFound.module.scss';

const NotFoundPage: React.FC = () => (
  <div className={s.notFound}>
    <div className="container">
      <div className={s.inner}>
        <p>Упс… Мы не можем найти то, что Вы ищете</p>
        <h1>404</h1>
      </div>
    </div>
  </div>
);

export { NotFoundPage };
