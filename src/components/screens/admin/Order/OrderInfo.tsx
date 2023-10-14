import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Head } from 'src/components/shared';

import { OrderInfoForm } from './form/OrderInfoForm';
import { OrderInfoTable } from './table/OrderInfoTable';

const OrderInfo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Head
        title="Заказы"
        childs={[
          <Button type="primary" onClick={() => navigate('/admin/order')}>
            Назад
          </Button>,
        ]}
      />
      <OrderInfoForm />
      <OrderInfoTable />
    </>
  );
};

export { OrderInfo };
