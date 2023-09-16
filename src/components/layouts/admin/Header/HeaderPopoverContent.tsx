import { Button } from 'antd';
import React from 'react';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { useActions } from 'src/hooks';
import { useGetProfileQuery } from 'src/services';

import s from './header.module.scss';

const HeaderPopoverContent: React.FC = () => {
  const { data: profile } = useGetProfileQuery();

  const { logOut } = useActions();
  return (
    <div className={s.popover}>
      <div className={s.item}>
        <AiOutlineUser />
        <b>{profile?.data.name}</b>
      </div>
      <div className={s.item}>
        <AiOutlinePhone />
        <b>{profile?.data.phone}</b>
      </div>
      <Button
        className="center"
        type="primary"
        icon={<BiLogOutCircle />}
        danger
        onClick={() => logOut()}
      >
        Выйти
      </Button>
    </div>
  );
};

export { HeaderPopoverContent };
