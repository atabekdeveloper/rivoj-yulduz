/* eslint-disable object-curly-newline */
import { Avatar, Button, Image, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteSliderMutation, useGetSlidersQuery } from 'src/services';
import { TSliderItem } from 'src/services/slider/slider.types';

const SliderTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: sliders, isLoading } = useGetSlidersQuery();
  const { mutate: deleteSlider } = useDeleteSliderMutation();

  const onDeleteSlider = (id: number) => deleteSlider(id);
  const onEditSlider = (id: number) => {
    const findItem = sliders?.data.find((service) => service.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TSliderItem> = [
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
      title: 'Сервис',
      dataIndex: 'service',
      key: 'service',
      render: (_, r) => r.service.title || '-',
    },
    {
      title: 'Фото',
      dataIndex: 'image',
      key: 'image',
      render: (_, r) => (
        <Image src={r.image?.image_url} width={70}>
          <Avatar src={r.image?.image_url} shape="square" />
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
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditSlider(r.id)} />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeleteSlider(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={sliders?.data} columns={columns} loading={isLoading} />;
};

export { SliderTable };
