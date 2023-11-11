import { Form, Input } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditSupportMutation } from 'src/services';
import { TSupportChange } from 'src/services/support/support.types';
import { formatStringJoin, formMessage } from 'src/utils';

const SupportForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [inputValue, setInputValue] = React.useState('');

  const { mutate: editSupport, isLoading: editLoading } = useEditSupportMutation();

  const onFinish = (values: TSupportChange) => {
    if (paramsItem) {
      editSupport({ ...values, phone: formatStringJoin(values.phone), id: paramsItem.id });
    }
  };

  React.useEffect(() => {
    if (paramsItem) {
      form.setFieldsValue(paramsItem);
      setInputValue(paramsItem.phone);
    }
  }, [paramsItem, form]);
  return (
    <CustomModal
      form={form}
      confirmLoading={editLoading}
      okButtonProps={{ disabled: inputValue.includes('_') }}
    >
      <Form
        name="Support Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Ф.И.О"
          rules={[{ required: true, message: formMessage('Ф.И.О') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: formMessage('Телефон'), type: 'string' }]}
        >
          <MaskedInput
            inputMode="tel"
            mask="+{998} 00 000 00 00"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { SupportForm };
