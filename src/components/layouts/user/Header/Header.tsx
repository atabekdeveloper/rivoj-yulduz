/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import { Cross as Hamburger } from 'hamburger-react';
import React from 'react';
import Img from 'react-cool-img';
import { Link, useLocation } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { useResponsive } from 'src/hooks';

import { routes } from '../routes';

import s from './header.module.scss';

const Header: React.FC = () => {
  const [isNav, setIsNav] = React.useState(false);
  const { pathname } = useLocation();
  const { isMobile } = useResponsive(866);
  React.useEffect(() => {
    setIsNav(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className={s.header}>
      <div className="container">
        <div className={clsx(s.body, isMobile && s.active)}>
          <Img src={logo} alt="Logo" />
          <ul className={clsx(s.items, isMobile && s.active, isNav && s.activeMenu)}>
            {routes.map((route) => (
              <li className={clsx(s.item, pathname === route.key && s.active)} key={route.key}>
                <Link to={route.key}>{route.label}</Link>
              </li>
            ))}
          </ul>
          {isMobile && (
            <div style={{ zIndex: 2200 }}>
              <Hamburger
                color={isNav ? '#1a509d' : '#fff'}
                toggled={isNav}
                toggle={() => setIsNav((prev) => !prev)}
                direction="left"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
