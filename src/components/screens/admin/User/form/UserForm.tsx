import { Form, Input, Select } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditUserMutation, useGetRolesQuery, usePostUserMutation } from 'src/services';
import { TUserChange } from 'src/services/user/user.types';
import { formatStringJoin, formMessage } from 'src/utils';

const UserForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { data: roles } = useGetRolesQuery();

  const { mutate: addUser, isLoading: addLoading } = usePostUserMutation();
  const { mutate: editUser, isLoading: editLoading } = useEditUserMutation();

  const onFinish = (values: TUserChange) => {
    if (paramsItem) {
      editUser({ ...values, id: paramsItem.id, phone: formatStringJoin(values.phone) });
    } else addUser({ ...values, phone: formatStringJoin(values.phone) });
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue({ ...paramsItem });
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="User Form" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name="phone"
          rules={[{ required: true, message: formMessage('Телефон') }]}
        >
          <MaskedInput inputMode="tel" mask="+{998} 00 000 00 00" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: !paramsItem, message: formMessage('Пароль') }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="role_id"
          label="Роль"
          rules={[{ required: true, message: formMessage('Роль') }]}
        >
          <Select options={roles?.data.map(({ id, name }) => ({ value: id, label: name }))} />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { UserForm };
