import React from 'react';

import { AuthLogin } from './AuthLogin';

import s from './auth.module.scss';

const AuthPage: React.FC = () => (
  <div className={s.auth}>
    <div className="container">
      <div className={s.body}>
        <AuthLogin />
      </div>
    </div>
  </div>
);

export { AuthPage };
