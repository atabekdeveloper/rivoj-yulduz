/* eslint-disable object-curly-newline */
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteDeliveryMethodMutation, useGetDeliveryMethodsQuery } from 'src/services';
import { TDeliveryMethodItem } from 'src/services/delivery/method/delivery-method.types';
import { formatPrice } from 'src/utils';

const DeliveryMethodTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: delivery, isLoading } = useGetDeliveryMethodsQuery();
  const { mutate: deleteDeliveryMethod } = useDeleteDeliveryMethodMutation();

  const onDeleteDeliveryMethod = (id: number) => deleteDeliveryMethod(id);
  const onEditDeliveryMethod = (id: number) => {
    const findItem = delivery?.data.find((el) => el.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TDeliveryMethodItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
      render: (value) => formatPrice(value, 'uzs'),
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton
            color="#FFC108"
            icon={<MdModeEdit />}
            onClick={() => onEditDeliveryMethod(r.id)}
          />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeleteDeliveryMethod(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={delivery?.data} columns={columns} loading={isLoading} />;
};

export { DeliveryMethodTable };
