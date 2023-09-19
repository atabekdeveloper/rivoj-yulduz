import { Form, Input, Select } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditCategoryMutation, useGetTypesQuery, usePostCategoryMutation } from 'src/services';
import { TCategoryChange } from 'src/services/category/category.types';
import { formMessage } from 'src/utils';

const CategoryForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();

  const { data: types } = useGetTypesQuery();

  const { mutate: addCategory, isLoading: addLoading } = usePostCategoryMutation();
  const { mutate: editCategory, isLoading: editLoading } = useEditCategoryMutation();

  const onFinish = (values: TCategoryChange) => {
    if (paramsItem) editCategory({ ...values, id: paramsItem.id });
    else addCategory({ ...values });
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue(paramsItem);
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form
        name="Category Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: formMessage('Название') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: formMessage('Описание') }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="type_id"
          label="Тип"
          rules={[{ required: true, message: formMessage('Тип') }]}
        >
          <Select options={types?.data.map((type) => ({ value: type.id, label: type.title }))} />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { CategoryForm };
