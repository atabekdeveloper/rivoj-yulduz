import { Form, Input } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditOrderItemMutation } from 'src/services';
import { TOrderContactChange } from 'src/services/order/order.types';
import { formMessage } from 'src/utils';

const OrderInfoForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { mutate: editOrder, isLoading: editLoading } = useEditOrderItemMutation();

  const onFinish = (values: TOrderContactChange) => {
    if (paramsItem) editOrder({ ...values, id: paramsItem.id });
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue({ ...paramsItem.contact });
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={editLoading}>
      <Form
        name="Order Info Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: false, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Адрес"
          name="address"
          rules={[{ required: false, message: formMessage('Адрес') }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { OrderInfoForm };
