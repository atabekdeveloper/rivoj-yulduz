/* eslint-disable object-curly-newline */
import { Button, Input, Select, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete, AiOutlineClear } from 'react-icons/ai';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { useDebounce } from 'src/hooks';
import { useDeleteOrderMutation, useGetOrdersQuery, useGetStatusesQuery } from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';
import { formatPrice } from 'src/utils';

const OrderTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [stateStatus, setStateStatus] = React.useState(0);
  const [statePhone, setStatePhone] = React.useState('');

  const debounceValue = useDebounce(statePhone);

  const { data: statuses } = useGetStatusesQuery();
  const { data: orders, isLoading } = useGetOrdersQuery({
    limit: 10,
    page: currentPage,
    status_id: stateStatus,
    phone: debounceValue,
  });
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
      title: (
        <Space.Compact>
          <Input
            placeholder="Телефон"
            value={statePhone}
            onChange={(e) => setStatePhone(e.target.value)}
          />
          <Button
            type="default"
            icon={<AiOutlineClear />}
            danger
            onClick={() => setStatePhone('')}
          />
        </Space.Compact>
      ),
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
      title: (
        <Space.Compact>
          <Select
            placeholder="Статус"
            value={stateStatus || null}
            options={statuses?.data.map((status) => ({ value: status.id, label: status.name }))}
            onChange={(value) => setStateStatus(value)}
          />
          <Button
            type="default"
            icon={<AiOutlineClear />}
            danger
            onClick={() => setStateStatus(0)}
          />
        </Space.Compact>
      ),
      dataIndex: 'status_name',
      key: 'status_name',
      render: (value) => value || '-',
    },
    {
      title: 'Способ оплаты',
      dataIndex: 'pay',
      key: 'pay',
      render: (_, r) => r.payment?.name,
    },
    {
      title: 'Ширина',
      dataIndex: 'width',
      key: 'width',
      render: (value) => (value ? formatPrice(value, '') : '-'),
    },
    {
      title: 'Высота',
      dataIndex: 'height',
      key: 'height',
      render: (value) => (value ? formatPrice(value, '') : '-'),
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (value) => (value ? formatPrice(value, 'штук') : '-'),
    },
    {
      title: 'Сумма',
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
  return (
    <CustomTable
      dataSource={orders?.data}
      columns={columns}
      loading={isLoading}
      pagination={{
        total: orders?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { OrderTable };
