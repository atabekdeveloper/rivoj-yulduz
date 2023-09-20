import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

const Order: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Сервисы"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <div />
    </>
  );
};

export { Order };
