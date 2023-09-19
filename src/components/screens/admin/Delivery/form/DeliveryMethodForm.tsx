import { Form, Input, InputNumber } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditDeliveryMethodMutation, usePostDeliveryMethodMutation } from 'src/services';
import { TDeliveryMethodItem } from 'src/services/delivery/method/delivery-method.types';
import { formatNum, formMessage } from 'src/utils';

const DeliveryMethodForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { mutate: addType, isLoading: addLoading } = usePostDeliveryMethodMutation();
  const { mutate: editType, isLoading: editLoading } = useEditDeliveryMethodMutation();

  const onFinish = (values: TDeliveryMethodItem) => {
    if (paramsItem) editType({ ...values, id: paramsItem.id });
    else addType(values);
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue(paramsItem);
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="Type Form" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Сумма"
          name="price"
          rules={[{ required: true, message: formMessage('Сумма') }]}
        >
          <InputNumber formatter={formatNum} addonAfter="uzs" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { DeliveryMethodForm };
