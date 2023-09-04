import { Button, Form, Input } from 'antd';
import React from 'react';
import { formMessage } from 'src/utils';

import s from './contact.module.scss';

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => console.log(values);
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
        <Form.Item name="name" rules={[{ required: true, message: formMessage('Имя') }]}>
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: formMessage('Телефон') }]}>
          <Input placeholder="Телефон" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: formMessage('Комментарии') }]}>
          <Input.TextArea placeholder="Комментарии" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Оставить заявку
        </Button>
      </Form>
    </div>
  );
};

export { ContactForm };
