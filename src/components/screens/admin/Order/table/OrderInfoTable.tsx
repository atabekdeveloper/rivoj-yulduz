import { Button, Select, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { CustomTable } from 'src/components/shared';
import {
  useDeleteOrderAttachMutation,
  useGetOrderItemQuery,
  useGetUsersQuery,
  usePostOrderAttachMutation,
} from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';

const OrderInfoTable: React.FC = () => {
  const { id } = useParams();

  const { mutate: editAttach } = usePostOrderAttachMutation();
  const { mutate: deleteAttach } = useDeleteOrderAttachMutation();
  const { data: order, isLoading } = useGetOrderItemQuery(Number(id));
  const { data: users } = useGetUsersQuery();

  const attachs = users?.data.filter((user) => user.role_id === 3);

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
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
      render: (_, r) => r?.contact?.address || '-',
    },
    {
      title: 'Измерчик',
      dataIndex: 'user',
      key: 'user',
      render: (_, r) => (
        <Space.Compact>
          <Select
            value={r?.user?.id}
            onChange={(value) => editAttach({ orderId: Number(id), userId: value })}
            style={{ width: '150px' }}
            placeholder="Измерчик"
            options={attachs?.map((attach) => ({ value: attach.id, label: attach.name }))}
          />
          <Button
            type="primary"
            danger
            icon={<AiFillDelete />}
            onClick={() => deleteAttach({ orderId: Number(id), userId: r.user.id })}
          />
        </Space.Compact>
      ),
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
