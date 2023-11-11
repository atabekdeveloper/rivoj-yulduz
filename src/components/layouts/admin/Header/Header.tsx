/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Avatar } from 'antd';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { useActions, useResponsive } from 'src/hooks';

import { HeaderPopover } from './HeaderPopover';

import s from './header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { toggleMenuCollapsed, toggleDrawer } = useActions();
  const { isMobile } = useResponsive(900);

  const homeNavigate = () => navigate('/');
  const onToggleDrawer = () => {
    if (isMobile) toggleDrawer();
    else toggleMenuCollapsed();
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>
        {!isMobile && (
          <span onClick={homeNavigate}>
            <LazyLoad>
              <img className={s.img} src={logo} alt="Logo" />
            </LazyLoad>
          </span>
        )}
        <span className={s.hamburger} onClick={onToggleDrawer}>
          <RxHamburgerMenu className={s.icon} />
        </span>
      </div>
      <div className={s.right}>
        <Avatar
          onClick={() => navigate('/admin/profile')}
          icon={<AiOutlineUser />}
          style={{ background: '#1E88E5', cursor: 'pointer' }}
        />
        <HeaderPopover />
      </div>
    </header>
  );
};

export { Header };
