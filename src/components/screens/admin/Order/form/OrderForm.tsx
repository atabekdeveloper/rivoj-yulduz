import { Form, Input, Select } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditOrderMutation, useGetTypesQuery } from 'src/services';
import { TOrderChange } from 'src/services/order/order.types';
import { formMessage } from 'src/utils';

const OrderForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { data: types } = useGetTypesQuery();

  const { mutate: editOrder, isLoading: editLoading } = useEditOrderMutation();

  const onFinish = (values: TOrderChange) => {
    if (paramsItem) editOrder({ ...values, id: paramsItem.id });
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue(paramsItem);
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={editLoading}>
      <Form name="Order Form" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Тип"
          name="type_id"
          rules={[{ required: true, message: formMessage('Тип') }]}
        >
          <Select options={types?.data.map(({ id, title }) => ({ value: id, label: title }))} />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { OrderForm };
