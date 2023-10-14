import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteUserMutation, useGetUsersQuery } from 'src/services';
import { TUserItem } from 'src/services/user/user.types';

const UserTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: users, isLoading } = useGetUsersQuery();
  const { mutate: deleteUser } = useDeleteUserMutation();

  const onDeleteUser = (id: number) => deleteUser(id);
  const onEditUser = (id: number) => {
    const findItem = users?.data.find((service) => service.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TUserItem> = [
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
      title: 'Роль',
      dataIndex: 'role_name',
      key: 'role_name',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditUser(r.id)} />
          <CustomPopConfirm title={r.name} onConfirm={() => onDeleteUser(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={users?.data} columns={columns} loading={isLoading} />;
};

export { UserTable };
