/* eslint-disable object-curly-newline */
import { Avatar, Button, Image, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteServiceMutation, useGetServicesQuery } from 'src/services';
import { TServiceItem } from 'src/services/service/service.types';

const ServiceTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: services, isLoading } = useGetServicesQuery();
  const { mutate: deleteService } = useDeleteServiceMutation();

  const onDeleteService = (id: number) => deleteService(id);
  const onEditService = (id: number) => {
    const findItem = services?.data.find((service) => service.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TServiceItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Категория',
      dataIndex: 'category_title',
      key: 'category_title',
    },
    {
      title: 'Единица измерения',
      dataIndex: 'dimension_unit',
      key: 'dimension_unit',
    },
    {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Форматы',
      dataIndex: 'format',
      key: 'format',
      render: (_, r) => (
        <Space wrap>
          {r.formats.map((format) => (
            <Tag key={format.id} color="cyan">
              {`${format.name}: ${format.value}`}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Фото',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <Image src={image} width={70}>
          <Avatar src={image} shape="square" />
        </Image>
      ),
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditService(r.id)} />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeleteService(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={services?.data} columns={columns} loading={isLoading} />;
};

export { ServiceTable };
