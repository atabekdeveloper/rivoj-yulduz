import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import { CustomPopConfirm, CustomTable } from 'src/components/shared';
import { UiAntdButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useDeletePointMutation, useGetPointsQuery } from 'src/services';
import { TPointItem } from 'src/services/point/point.types';

const PointTable: React.FC = () => {
  const { setParamsItemForm, setLocation } = useActions();

  const { data: points, isLoading } = useGetPointsQuery();
  const { mutate: deletePoint } = useDeletePointMutation();

  const onDeletePoint = (id: number) => deletePoint(id);
  const onEditPoint = (id: number) => {
    const findItem = points?.data.find((point) => point.id === id);
    setParamsItemForm(findItem);
    if (findItem) setLocation([findItem.lat, findItem.lng]);
  };

  const columns: ColumnsType<TPointItem> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      render: (_, r) => r.point_type?.name || '-',
    },
    {
      fixed: 'right',
      width: 100,
      key: 'action',
      align: 'center',
      render: (_, r) => (
        <Space>
          <UiAntdButton color="#FFC108" icon={<MdModeEdit />} onClick={() => onEditPoint(r.id)} />
          <CustomPopConfirm title={r.title} onConfirm={() => onDeletePoint(r.id)}>
            <Button icon={<AiFillDelete />} type="primary" danger />
          </CustomPopConfirm>
        </Space>
      ),
    },
  ];
  return <CustomTable dataSource={points?.data} columns={columns} loading={isLoading} />;
};

export { PointTable };
