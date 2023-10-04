import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { PointForm } from './form/PointForm';
import { PointTable } from './table/PointTable';

const Point: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Точки"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <PointForm />
      <PointTable />
    </>
  );
};

export { Point };
