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
import { formatPrice } from 'src/utils';

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
      render: (_, r) => r.category?.title || '-',
    },
    {
      title: 'Единица измерения',
      dataIndex: 'dimension_unit',
      key: 'dimension_unit',
      render: (_, r) => r.dimension?.unit || '-',
    },
    {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
      render: (value) => formatPrice(value, 'uzs'),
    },
    {
      title: 'Скидка',
      dataIndex: 'is_discount',
      key: 'is_discount',
      render: (value) => (value ? 'Да' : 'Нет'),
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
      render: (_, r) => (
        <Image.PreviewGroup>
          <Space>
            {r.images.map((image) => (
              <Image src={image.image_url} width={70} key={image.id}>
                <Avatar src={image.image_url} shape="square" />
              </Image>
            ))}
          </Space>
        </Image.PreviewGroup>
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
