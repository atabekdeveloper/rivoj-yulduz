import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { UserForm } from './form/UserForm';
import { UserTable } from './table/UserTable';

const User: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Пользователи"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <UserForm />
      <UserTable />
    </>
  );
};

export { User };
