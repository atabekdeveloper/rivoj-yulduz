/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { Button, Input, Select, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete, AiFillEye, AiOutlineClear } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { useDebounce } from 'src/hooks';
import { useDeleteOrderMutation, useGetOrdersQuery, useGetStatusesQuery } from 'src/services';
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
      render: (_, r) => (r?.width ? formatPrice(r.width, r.service.dimension.unit) : '-'),
    },
    {
      title: 'Высота',
      dataIndex: 'height',
      key: 'height',
      render: (_, r) => (r?.height ? formatPrice(r.height, r.service.dimension.unit) : '-'),
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (value) => (value ? formatPrice(value, 'штук') : '-'),
    },
    {
      title: 'Аванс',
      dataIndex: 'prepaid_expense',
      key: 'prepaid_expense',
      render: (value) => (value ? 'аванс оплачен' : 'аванс неоплачен'),
    },
    {
      title: 'Оплачен',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: (value) => formatPrice(value, 'uzs'),
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
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { OrderTable };
