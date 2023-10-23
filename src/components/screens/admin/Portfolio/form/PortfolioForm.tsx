/* eslint-disable object-curly-newline */
import { Form, Input } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditPortfolioMutation, usePostPortfolioMutation } from 'src/services';
import { TPortfolioChange } from 'src/services/portfolio/portfolio.types';
import { formMessage } from 'src/utils';

const PortfolioForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [uploadFile, setUploadFile] = React.useState<string | null>(null);

  const {
    mutate: addPortfolio,
    isLoading: addLoading,
    isSuccess: addSuccess,
  } = usePostPortfolioMutation();
  const {
    mutate: editPortfolio,
    isLoading: editLoading,
    isSuccess: editSuccess,
  } = useEditPortfolioMutation();

  const onChangeUpload = (e: any) => setUploadFile(e.target.files[0]);

  const onFinish = (values: TPortfolioChange) => {
    if (paramsItem) {
      editPortfolio({ ...values, id: paramsItem.id, image: uploadFile });
    } else {
      addPortfolio({ ...values, image: uploadFile });
    }
  };

  React.useEffect(() => {
    if (paramsItem) form.setFieldsValue({ ...paramsItem, image: null });
  }, [paramsItem, form]);
  React.useEffect(() => {
    if (addSuccess || editSuccess) setUploadFile(null);
  }, [addSuccess, editSuccess]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form
        name="Portfolio Form"
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
          label="Фото"
          name="image"
          rules={[{ required: true, message: formMessage('Фото') }]}
        >
          <input onChange={onChangeUpload} accept=".jpg, .jpeg, .png" type="file" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { PortfolioForm };
