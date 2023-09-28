import { Button, Form, Input } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { usePostSupportMutation } from 'src/services';
import { TSupportChange } from 'src/services/support/support.types';
import { formatStringJoin, formMessage } from 'src/utils';

import s from './contact.module.scss';

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const { mutate, isLoading, isSuccess } = usePostSupportMutation();
  const onFinish = (values: TSupportChange) => {
    mutate({ ...values, phone: formatStringJoin(values.phone) });
  };
  React.useEffect(() => {
    if (isSuccess) form.resetFields();
  }, [isSuccess, form]);
  return (
    <div className={s.body}>
      <h2>Оставить заявку</h2>
      <Form
        form={form}
        name="User Contact"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
      >
        <Form.Item name="name" rules={[{ required: true, message: formMessage('Ф.И.О') }]}>
          <Input placeholder="Ф.И.О" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: formMessage('Телефон') }]}>
          <MaskedInput inputMode="tel" mask="+{998} 00 000 00 00" />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true, message: formMessage('Комментарии') }]}
        >
          <Input.TextArea placeholder="Комментарии" />
        </Form.Item>
        <Button htmlType="submit" type="primary" loading={isLoading}>
          Оставить заявку
        </Button>
      </Form>
    </div>
  );
};

export { ContactForm };
