import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomTable } from 'src/components/shared';
import { useGetOrderItemQuery } from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';

const OrderInfoTable: React.FC = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useGetOrderItemQuery(Number(id));

  const columns: ColumnsType<TOrderItem> = [
    {
      title: 'Имя клиента',
      dataIndex: 'client',
      key: 'client',
      render: (_, r) => r?.contact?.name || '-',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, r) => r?.contact?.phone || '-',
    },
    {
      title: 'Комментария',
      dataIndex: 'comment',
      key: 'comment',
      render: (_, r) => r?.contact?.comment || '-',
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (_, r) => r?.contact?.title || '-',
    },
    {
      title: 'Измерчик',
      dataIndex: 'user',
      key: 'user',
      render: (_, r) => r?.user?.name || '-',
    },
    {
      title: 'Сервис',
      dataIndex: 'service',
      key: 'service',
      render: (_, r) => r?.service?.title || '-',
    },
  ];
  return (
    <CustomTable
      dataSource={[order?.data]}
      columns={columns}
      loading={isLoading}
      pagination={false}
    />
  );
};

export { OrderInfoTable };
