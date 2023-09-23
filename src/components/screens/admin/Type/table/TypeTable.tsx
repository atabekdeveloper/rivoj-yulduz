import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { CustomTable } from 'src/components/shared';
import { useGetTypesQuery } from 'src/services';
import { TTypeItem } from 'src/services/type/type.types';

const TypeTable: React.FC = () => {
  const { data: type, isLoading } = useGetTypesQuery();

  const columns: ColumnsType<TTypeItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
  ];
  return <CustomTable dataSource={type?.data} columns={columns} loading={isLoading} />;
};

export { TypeTable };
