/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import { Space } from 'antd';
import clsx from 'clsx';
import { Cross as Hamburger } from 'hamburger-react';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { UiButton } from 'src/components/ui';
import { useResponsive, useSelectors } from 'src/hooks';

import { routes } from '../routes';

import s from './header.module.scss';

const Header: React.FC = () => {
  const [isNav, setIsNav] = React.useState(false);
  const { isMobile } = useResponsive(866);
  const { pathname } = useLocation();
  const { token, userName } = useSelectors();

  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    setIsNav(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.body}>
          <LazyLoad>
            <img src={logo} alt="Logo" onClick={onClickLogo} style={{ cursor: 'pointer' }} />
          </LazyLoad>
          <ul className={clsx(s.items, isMobile && s.active, isNav && s.activeMenu)}>
            {routes.map((route) => (
              <li className={clsx(s.item, pathname === route.key && s.active)} key={route.key}>
                <Link to={route.key}>{route.label}</Link>
              </li>
            ))}
          </ul>
          <Space>
            {token && (
              <UiButton
                color="blue"
                text={userName}
                type="primary"
                onClick={() => navigate('/admin/category')}
              />
            )}
            {isMobile && (
              <div style={{ position: 'relative', zIndex: 2200 }}>
                <Hamburger
                  color={isNav ? '#1a509d' : '#fff'}
                  toggled={isNav}
                  toggle={() => setIsNav((prev) => !prev)}
                  direction="left"
                />
              </div>
            )}
          </Space>
        </div>
      </div>
    </header>
  );
};

export { Header };
