import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout, UserLayout } from 'src/components/layouts';
import { adminRoutes, userRoutes } from 'src/routes';

import './assets/styles/App.scss';

const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {userRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        {adminRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  </div>
);

export { App };
