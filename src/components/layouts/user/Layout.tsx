import React from 'react';
import { Outlet } from 'react-router-dom';
import { AntdProvider } from 'src/providers';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import s from './layout.module.scss';

const UserLayout: React.FC = () => (
  <div className={s.layout}>
    <AntdProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AntdProvider>
  </div>
);

export { UserLayout };
