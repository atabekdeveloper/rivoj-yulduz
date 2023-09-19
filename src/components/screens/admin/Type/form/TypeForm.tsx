import { Form, Input } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditTypeMutation, usePostTypeMutation } from 'src/services';
import { TTypeChange } from 'src/services/type/type.types';
import { formMessage } from 'src/utils';

const TypeForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [uploadFile, setUploadFile] = React.useState<string>('');

  const { mutate: addType, isLoading: addLoading } = usePostTypeMutation();
  const { mutate: editType, isLoading: editLoading } = useEditTypeMutation();

  const onChangeUpload = (e: any) => setUploadFile(e.target.files[0]);

  const onFinish = (values: TTypeChange) => {
    if (paramsItem) editType({ ...values, id: paramsItem.id, icon: uploadFile });
    else addType({ ...values, icon: uploadFile });
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
          label="Иконка"
          name="icon"
          rules={[{ required: false, message: formMessage('Иконка') }]}
        >
          <input onChange={onChangeUpload} accept=".jpg, .jpeg, .png" type="file" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { TypeForm };
