import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { useDeleteOrderMutation, useGetOrdersQuery } from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';
import { formatPrice } from 'src/utils';

const OrderTable: React.FC = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();
  const { mutate: deleteOrder } = useDeleteOrderMutation();

  const onDeleteOrder = (id: number) => deleteOrder(id);

  const columns: ColumnsType<TOrderItem> = [
    {
      title: 'Имя клиента',
      dataIndex: 'client',
      key: 'client',
      render: (_, r) => r.contact?.name || '-',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, r) => r.contact?.phone || '-',
    },
    {
      title: 'Комментария',
      dataIndex: 'comment',
      key: 'comment',
      render: (_, r) => r.contact?.comment || '-',
    },
    {
      title: 'Статус',
      dataIndex: 'status_name',
      key: 'status_name',
      render: (value) => value || '-',
    },
    {
      title: 'Ширина',
      dataIndex: 'width',
      key: 'width',
      render: (value) => (value ? formatPrice(value, 'м') : '-'),
    },
    {
      title: 'Высота',
      dataIndex: 'height',
      key: 'height',
      render: (value) => (value ? formatPrice(value, 'м') : '-'),
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (value) => (value ? formatPrice(value, 'штук') : '-'),
    },
    {
      title: 'Общая сумма',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: (value) => formatPrice(value, 'uzs'),
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <CustomPopConfirm title={r.contact?.name} onConfirm={() => onDeleteOrder(r.id)}>
          <Button icon={<AiFillDelete />} type="primary" danger />
        </CustomPopConfirm>
      ),
    },
  ];
  return <CustomTable dataSource={orders?.data} columns={columns} loading={isLoading} />;
};

export { OrderTable };
