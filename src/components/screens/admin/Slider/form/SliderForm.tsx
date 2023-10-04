/* eslint-disable object-curly-newline */
import { Form, Input, Select } from 'antd';
import React from 'react';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import { useEditSliderMutation, useGetServicesQuery, usePostSliderMutation } from 'src/services';
import { TSliderChange } from 'src/services/slider/slider.types';
import { formMessage } from 'src/utils';

const SliderForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [uploadFile, setUploadFile] = React.useState<string[]>([]);

  const { data: services } = useGetServicesQuery();

  const { mutate: addSlider, isLoading: addLoading } = usePostSliderMutation();
  const { mutate: editSlider, isLoading: editLoading } = useEditSliderMutation();

  const onChangeUpload = (e: any) => {
    setUploadFile(e.target.files);
  };

  const onFinish = (values: TSliderChange) => {
    if (paramsItem) editSlider({ ...values, id: paramsItem.id, images: uploadFile });
    else addSlider({ ...values, images: uploadFile });
  };

  React.useEffect(() => {
    if (paramsItem) {
      form.setFieldsValue({ ...paramsItem, service_id: paramsItem.service.id, images: null });
    }
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form name="Slider Form" form={form} onFinish={onFinish} autoComplete="off" layout="vertical">
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
          name="service_id"
          label="Сервис"
          rules={[{ required: true, message: formMessage('Сервис') }]}
        >
          <Select options={services?.data.map(({ id, title }) => ({ value: id, label: title }))} />
        </Form.Item>
        <Form.Item label="Фото" rules={[{ required: false, message: formMessage('Фото') }]}>
          <input onChange={onChangeUpload} accept=".jpg, .jpeg, .png" type="file" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { SliderForm };
