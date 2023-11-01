/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { Button, Input, Select, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import clsx from 'clsx';
import React from 'react';
import { AiFillDelete, AiFillEye, AiOutlineClear } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { useDebounce } from 'src/hooks';
import {
  useDeleteOrderMutation,
  useEditOrderMutation,
  useGetOrdersQuery,
  useGetStatusesQuery,
} from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';
import { formatPrice } from 'src/utils';

const OrderTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [stateStatus, setStateStatus] = React.useState(0);
  const [statePhone, setStatePhone] = React.useState('');

  const navigate = useNavigate();
  const debounceValue = useDebounce(statePhone);

  const { data: statuses } = useGetStatusesQuery();
  const { data: orders, isLoading } = useGetOrdersQuery({
    limit: 10,
    page: currentPage,
    status_id: stateStatus,
    phone: debounceValue,
  });

  const { mutate: editOrder } = useEditOrderMutation();
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
        <Space.Compact block>
          <Input
            placeholder="Телефон"
            value={statePhone}
            onChange={(e) => setStatePhone(e.target.value)}
            style={{ width: '100px' }}
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
      title: (
        <Space.Compact block>
          <Select
            placeholder="Статус"
            value={stateStatus || null}
            options={statuses?.data.map((status) => ({ value: status.id, label: status.name }))}
            onChange={(value) => setStateStatus(value)}
            style={{ width: '200px' }}
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
      render: (_, r) => (
        <Select
          placeholder="Статус"
          value={r.status_id}
          options={statuses?.data.map((status) => ({ value: status.id, label: status.name }))}
          onChange={(value) => editOrder({ id: r.id, status_id: Number(value) })}
          style={{ width: '200px' }}
        />
      ),
    },
    {
      title: 'Способ оплаты',
      dataIndex: 'pay',
      key: 'pay',
      render: (_, r) => r.payment?.name,
    },
    {
      title: 'Аванс',
      dataIndex: 'prepaid_expense',
      key: 'prepaid_expense',
      render: (_, r) => (
        <Select
          placeholder="Аванс"
          value={r.prepaid_expense}
          options={[
            { value: true, label: 'аванс оплачен' },
            { value: false, label: 'аванс неоплачен' },
          ]}
          onChange={(value) => editOrder({ id: r.id, prepaid_expense: value })}
          style={{ width: '200px' }}
        />
      ),
    },
    {
      title: 'Cтатус платежа',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: (_, r) => (
        <Tag color={clsx(r.paid && 'green', !r.paid && 'red')}>
          {formatPrice(r.total_amount, 'uzs')}
        </Tag>
      ),
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, r) =>
        formatPrice((r.width || 1) * (r.height || 1) * r.quantity * r.service.price_each, 'uzs'),
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <Button
            icon={<AiFillEye />}
            type="primary"
            onClick={() => navigate(`/admin/order/${r.id}`)}
          />
          <CustomPopConfirm title={r.contact?.name} onConfirm={() => onDeleteOrder(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
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
        showSizeChanger: false,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { OrderTable };
