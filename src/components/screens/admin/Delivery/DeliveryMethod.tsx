import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { DeliveryMethodForm } from './form/DeliveryMethodForm';
import { DeliveryMethodTable } from './table/DeliveryMethodTable';

const DeliveryMethod: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Доставщик метод"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <DeliveryMethodForm />
      <DeliveryMethodTable />
    </>
  );
};

export { DeliveryMethod };
