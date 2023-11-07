/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditProfileMutation } from 'src/services';
import { TEditProfile } from 'src/services/profile/profile.types';
import { formMessage } from 'src/utils';

const ProfileForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { mutate: editProfile, isLoading } = useEditProfileMutation();

  const onFinish = (values: TEditProfile) => editProfile(values);

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue(paramsItem);
  }, [form, paramsItem]);
  return (
    <CustomModal form={form} confirmLoading={isLoading}>
      <Form
        form={form}
        name="Profile"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name="phone"
          rules={[{ required: true, message: formMessage('Телефон') }]}
        >
          <MaskedInput inputMode="tel" mask="+998000000000" />
        </Form.Item>
        <Form.Item
          label="Старый пароль"
          name="password"
          rules={[{ required: false, message: formMessage('Старый пароль') }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Новый пароль"
          name="new_password"
          rules={[{ required: false, message: formMessage('Новый пароль') }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { ProfileForm };
