/* eslint-disable object-curly-newline */
import { Form, Input } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditEmployeeMutation, usePostEmployeeMutation } from 'src/services';
import { TEmployeeChange } from 'src/services/employee/employee.types';
import { formatStringJoin, formMessage } from 'src/utils';

const EmployeeForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [uploadFile, setUploadFile] = React.useState<string>('');

  const { mutate: addEmployee, isLoading: addLoading } = usePostEmployeeMutation();
  const { mutate: editEmployee, isLoading: editLoading } = useEditEmployeeMutation();

  const onChangeUpload = (e: any) => setUploadFile(e.target.files[0]);

  const onFinish = (values: TEmployeeChange) => {
    if (paramsItem) {
      editEmployee({
        ...values,
        id: paramsItem.id,
        image: uploadFile,
        phone: formatStringJoin(values.phone),
      });
    } else addEmployee({ ...values, phone: formatStringJoin(values.phone), image: uploadFile });
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue({ ...paramsItem, image: null });
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form
        name="Employee Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: formMessage('Имя') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="position"
          label="Роль"
          rules={[{ required: true, message: formMessage('Роль') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: false, message: formMessage('Телефон') }]}
        >
          <MaskedInput inputMode="tel" mask="+{998} 00 000 00 00" size="large" />
        </Form.Item>
        <Form.Item
          label="Фото"
          name="image"
          rules={[{ required: !paramsItem, message: formMessage('Фото') }]}
        >
          <input onChange={onChangeUpload} accept=".jpg, .jpeg, .png" type="file" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { EmployeeForm };
