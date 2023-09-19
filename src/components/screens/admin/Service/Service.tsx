import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { ServiceForm } from './form/ServiceForm';
import { ServiceTable } from './table/ServiceTable';

const Service: React.FC = () => {
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
      <ServiceForm />
      <ServiceTable />
    </>
  );
};

export { Service };
