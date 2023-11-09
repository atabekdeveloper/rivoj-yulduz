import { Form, Input, Select } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditPointMutation, useGetPointTypesQuery, usePostPointMutation } from 'src/services';
import { TPointChange } from 'src/services/point/point.types';
import { formMessage } from 'src/utils';

import { PointFormMap } from './PointFormMap';

const PointForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem, location } = useSelectors();

  const { data: types } = useGetPointTypesQuery();

  const { mutate: addPoint, isLoading: addLoading } = usePostPointMutation();
  const { mutate: editPoint, isLoading: editLoading } = useEditPointMutation();

  const onFinish = (values: TPointChange) => {
    if (paramsItem) {
      editPoint({
        ...values,
        id: paramsItem.id,
        lat: location[0],
        lng: location[1],
      });
    } else {
      addPoint({
        ...values,
        lat: location[0],
        lng: location[1],
      });
    }
  };

  React.useEffect(() => {
    if (paramsItem) {
      form.setFieldsValue({
        ...paramsItem,
        point_type_id: paramsItem.point_type.id,
      });
    }
  }, [paramsItem, form, location]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="Point Form" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Тип"
          name="point_type_id"
          rules={[{ required: true, message: formMessage('Тип') }]}
        >
          <Select options={types?.data.map(({ id, name }) => ({ value: id, label: name }))} />
        </Form.Item>
        <Form.Item
          name="map"
          label="Точка"
          rules={[{ required: !location.length, message: formMessage('Точка') }]}
        >
          <PointFormMap />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { PointForm };
