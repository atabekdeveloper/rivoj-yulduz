import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteTypeMutation, useGetTypesQuery } from 'src/services';
import { TTypeItem } from 'src/services/type/type.types';

const TypeTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: type, isLoading } = useGetTypesQuery();
  const { mutate: deleteType } = useDeleteTypeMutation();

  const onDeleteType = (id: number) => deleteType(id);
  const onEditType = (id: number) => {
    const findItem = type?.data.find((type) => type.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TTypeItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditType(r.id)} />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeleteType(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={type?.data} columns={columns} loading={isLoading} />;
};

export { TypeTable };
