import { Button, Form, Input } from 'antd';
import React from 'react';
import { formMessage } from 'src/utils';

import { TAuthStateChange } from './auth.types';

import s from './auth.module.scss';

const AuthLogin: React.FC<TAuthStateChange> = ({ setStateAuth }) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => console.log(values);
  return (
    <div className={s.form}>
      <h2>Вход в аккаунт</h2>
      <Form
        form={form}
        name="Auth Login"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
      >
        <Form.Item name="phone" rules={[{ required: true, message: formMessage('Телефон') }]}>
          <Input placeholder="Телефон" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: formMessage('Пароль') }]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Button htmlType="submit" type="primary" block>
          Войти
        </Button>
      </Form>
      <button className={s.btn} onClick={() => setStateAuth('sign')}>
        Регистрация
      </button>
    </div>
  );
};

export { AuthLogin };
