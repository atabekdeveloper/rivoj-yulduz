/* eslint-disable object-curly-newline */
import clsx from 'clsx';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelectors } from 'src/hooks';

import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';

import s from './layout.module.scss';

const AdminLayout: React.FC = () => {
  const { role, isDrawer, isCollapsed, token } = useSelectors();
  return (
    <div className={clsx(s.layout, !isDrawer && s.activeDrawer, isCollapsed && s.activeCollapsed)}>
      <Header />
      <Navbar />
      <main>{token && role !== 'user' ? <Outlet /> : <Navigate to="/" />}</main>
    </div>
  );
};

export { AdminLayout };
