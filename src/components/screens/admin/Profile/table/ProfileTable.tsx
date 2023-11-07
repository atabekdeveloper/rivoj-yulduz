import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { CustomTable } from 'src/components/shared';
import { useActions } from 'src/hooks';
import { useGetProfileQuery } from 'src/services';
import { TProfileItem } from 'src/services/profile/profile.types';

const ProfileTable: React.FC = () => {
  const { data: profile, isLoading } = useGetProfileQuery();
  const { setParamsItemForm } = useActions();

  const columns: ColumnsType<TProfileItem> = [
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
        <Button
          style={{ backgroundColor: '#FFC108', color: '#fff' }}
          icon={<MdModeEdit />}
          onClick={() => setParamsItemForm(r)}
        />
      ),
    },
  ];
  return (
    <CustomTable
      dataSource={[profile?.data]}
      columns={columns}
      loading={isLoading}
      pagination={false}
    />
  );
};

export { ProfileTable };
