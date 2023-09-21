/* eslint-disable object-curly-newline */
import { Avatar, Button, Image, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeletePortfolioMutation, useGetPortfoliosQuery } from 'src/services';
import { TPortfolioItem } from 'src/services/portfolio/portfolio.types';

const PortfolioTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: portfolios, isLoading } = useGetPortfoliosQuery();
  const { mutate: deletePortfolio } = useDeletePortfolioMutation();

  const onDeletePortfolio = (id: number) => deletePortfolio(id);
  const onEditPortfolio = (id: number) => {
    const findItem = portfolios?.data.find((portfolio) => portfolio.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TPortfolioItem> = [
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
          <UiAntdButton
            color="#FFC108"
            icon={<MdModeEdit />}
            onClick={() => onEditPortfolio(r.id)}
          />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeletePortfolio(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={portfolios?.data} columns={columns} loading={isLoading} />;
};

export { PortfolioTable };
