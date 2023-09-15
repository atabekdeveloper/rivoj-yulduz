import React from 'react';

import { AuthLogin } from './AuthLogin';
import { AuthSign } from './AuthSign';

import s from './auth.module.scss';

const AuthPage: React.FC = () => {
  const [stateAuth, setStateAuth] = React.useState('login');
  return (
    <div className={s.auth}>
      <div className="container">
        <div className={s.body}>
          {stateAuth === 'login' && <AuthLogin setStateAuth={setStateAuth} />}
          {stateAuth === 'sign' && <AuthSign setStateAuth={setStateAuth} />}
        </div>
      </div>
    </div>
  );
};

export { AuthPage };
