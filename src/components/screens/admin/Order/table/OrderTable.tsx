import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteOrderMutation, useGetOrdersQuery } from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';
import { formatPrice } from 'src/utils';

const OrderTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: orders, isLoading } = useGetOrdersQuery();
  const { mutate: deleteOrder } = useDeleteOrderMutation();

  const onDeleteOrder = (id: number) => deleteOrder(id);
  const onEditOrder = (id: number) => {
    const findItem = orders?.data.find((order) => order.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TOrderItem> = [
    {
      title: 'Название способа доставки',
      dataIndex: 'delivery_method_title',
      key: 'delivery_method_title',
      render: (value) => value || '-',
    },
    {
      title: 'Статус',
      dataIndex: 'status_name',
      key: 'status_name',
      render: (value) => value || '-',
    },
    {
      title: 'Телефон номера',
      dataIndex: 'phone',
      key: 'phone',
      render: (value) => value || '-',
    },
    {
      title: 'Комментария',
      dataIndex: 'comment',
      key: 'comment',
      render: (value) => value || '-',
    },
    {
      title: 'Цена способа доставки',
      dataIndex: 'delivery_method_price',
      key: 'delivery_method_price',
      render: (value) => formatPrice(value, 'uzs'),
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
        <Space>
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditOrder(r.id)} />
          <CustomPopConfirm title={r.model_type} onConfirm={() => onDeleteOrder(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={orders?.data} columns={columns} loading={isLoading} />;
};

export { OrderTable };
