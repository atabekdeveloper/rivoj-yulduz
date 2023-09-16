import { Avatar, Popover } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelectors } from 'src/hooks';
import { useGetProfileQuery } from 'src/services';

import { HeaderPopoverContent } from './HeaderPopoverContent';

import s from './header.module.scss';

const HeaderPopover: React.FC = () => {
  const { data: profile } = useGetProfileQuery();
  const { role } = useSelectors();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onNavigate = () => {
    if (role !== 'user' && !pathname.includes('admin')) navigate('/admin');
  };
  return (
    <Popover placement="bottomRight" trigger="click" content={<HeaderPopoverContent />}>
      <Avatar
        className={s.user}
        style={{ background: role === 'user' ? '#153357' : '#087bb8' }}
        onClick={onNavigate}
      >
        {profile?.data.name.substring(0, 1)}
      </Avatar>
    </Popover>
  );
};

export { HeaderPopover };
