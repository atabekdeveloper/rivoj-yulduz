/* eslint-disable object-curly-newline */
import { Avatar, Button, Image, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from 'src/services';
import { TEmployeeItem } from 'src/services/employee/employee.types';

const EmployeeTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: employees, isLoading } = useGetEmployeesQuery();
  const { mutate: deleteEmployee } = useDeleteEmployeeMutation();

  const onDeleteEmployee = (id: number) => deleteEmployee(id);
  const onEditEmployee = (id: number) => {
    const findItem = employees?.data.find((employee) => employee.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TEmployeeItem> = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Роль',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
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
          <UiAntdButton
            color="#FFC108"
            icon={<MdModeEdit />}
            onClick={() => onEditEmployee(r.id)}
          />
          <CustomPopConfirm title={r.name} onConfirm={() => onDeleteEmployee(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={employees?.data} columns={columns} loading={isLoading} />;
};

export { EmployeeTable };
