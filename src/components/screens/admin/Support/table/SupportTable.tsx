/* eslint-disable object-curly-newline */
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteServiceMutation, useGetSupportsQuery } from 'src/services';
import { TSupportItem } from 'src/services/support/support.types';

const SupportTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { setParamsItemForm } = useActions();

  const { data: supports, isLoading } = useGetSupportsQuery({
    limit: 10,
    page: currentPage,
  });
  const { mutate: deleteService } = useDeleteServiceMutation();

  const onDeleteSupport = (id: number) => deleteService(id);
  const onEditSupport = (id: number) => {
    const findItem = supports?.data.find((service) => service.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TSupportItem> = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditSupport(r.id)} />
          <CustomPopConfirm title={r.name} onConfirm={() => onDeleteSupport(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return (
    <CustomTable
      dataSource={supports?.data}
      columns={columns}
      loading={isLoading}
      pagination={{
        total: supports?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { SupportTable };
