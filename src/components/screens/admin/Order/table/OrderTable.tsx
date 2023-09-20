import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from 'src/services';
import { TCategoryItem } from 'src/services/category/category.types';

const CategoryTable: React.FC = () => {
  const { setParamsItemForm } = useActions();

  const { data: categories, isLoading } = useGetCategoriesQuery();
  const { mutate: deleteCategory } = useDeleteCategoryMutation();

  const onDeleteCategory = (id: number) => deleteCategory(id);
  const onEditCategory = (id: number) => {
    const findItem = categories?.data.find((category) => category.id === id);
    setParamsItemForm(findItem);
  };

  const columns: ColumnsType<TCategoryItem> = [
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
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton
            color="#FFC108"
            icon={<MdModeEdit />}
            onClick={() => onEditCategory(r.id)}
          />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeleteCategory(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={categories?.data} columns={columns} loading={isLoading} />;
};

export { CategoryTable };
