import React from 'react';
import { Head } from 'src/components/shared';

import { OrderForm } from './form/OrderForm';
import { OrderTable } from './table/OrderTable';

const Order: React.FC = () => (
  <>
    <Head title="Заказы" />
    <OrderForm />
    <OrderTable />
  </>
);

export { Order };
