import React from 'react';
import { UiCollapse } from 'src/components/ui';

const orderItems = [
  { id: 1, title: 'Подкатегория 1' },
  { id: 2, title: 'Подкатегория 2' },
];

const CalculationMenu: React.FC = () => {
  const items = orderItems.map((order) => ({
    key: order.id,
    label: `${order.title}`,
    style: { background: '#1A509D' },
    children: <div>1</div>,
  }));
  return <UiCollapse colorHeading="#fff" expandIconPosition="end" accordion items={items} />;
};

export { CalculationMenu };
