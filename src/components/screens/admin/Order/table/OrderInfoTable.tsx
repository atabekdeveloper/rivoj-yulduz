/* eslint-disable object-curly-newline */
import { Avatar, Button, Image, Select, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import {
  useDeleteOrderAttachMutation,
  useGetOrderItemQuery,
  useGetUsersQuery,
  usePostOrderAttachMutation,
} from 'src/services';
import { TOrderItem } from 'src/services/order/order.types';
import { formatPrice } from 'src/utils';

const OrderInfoTable: React.FC = () => {
  const { id } = useParams();
  const { setParamsItemForm } = useActions();

  const { mutate: editAttach } = usePostOrderAttachMutation();
  const { mutate: deleteAttach } = useDeleteOrderAttachMutation();
  const { data: order, isLoading } = useGetOrderItemQuery(Number(id));
  const { data: users } = useGetUsersQuery();

  const attached = users?.data.filter((user) => user.role_id === 3);

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
            options={attached?.map((attach) => ({ value: attach.id, label: attach.name }))}
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
    // {
    //   title: 'Фото',
    //   dataIndex: 'image',
    //   key: 'image',
    //   render: (_, r) => (
    //     <Image.PreviewGroup>
    //       <Space>
    //         {r.details.map((detail) => (
    //           <Image src={detail} width={70} key={detail.id}>
    //             <Avatar src={detail} shape="square" />
    //           </Image>
    //         ))}
    //       </Space>
    //     </Image.PreviewGroup>
    //   ),
    // },
    {
      title: 'Сервис',
      dataIndex: 'service',
      key: 'service',
      ellipsis: {
        showTitle: false,
      },
      render: (_, r) => r?.service?.title || '-',
    },
    {
      title: 'Ширина',
      dataIndex: 'width',
      key: 'width',
      render: (_, r) => (r?.width ? formatPrice(r.width, r.service?.dimension?.unit) : '-'),
    },
    {
      title: 'Высота',
      dataIndex: 'height',
      key: 'height',
      render: (_, r) => (r?.height ? formatPrice(r.height, r.service?.dimension?.unit) : '-'),
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (value) => (value ? formatPrice(value, 'штук') : '-'),
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: () => (
        <UiAntdButton
          color="#FFC108"
          icon={<MdModeEdit />}
          onClick={() => setParamsItemForm(order?.data)}
        />
      ),
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
