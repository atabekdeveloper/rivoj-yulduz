import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { userRoutes } from 'src/routes';

import { UserLayout } from './components/layouts';

import './assets/styles/App.scss';

const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {userRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  </div>
);

export { App };
