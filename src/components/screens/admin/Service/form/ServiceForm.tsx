/* eslint-disable object-curly-newline */
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CustomModal } from 'src/components/shared';
import { useSelectors } from 'src/hooks';
import {
  useEditServiceMutation,
  useGetCategoriesQuery,
  useGetDimensionsQuery,
  useGetFormatsQuery,
  usePostServiceMutation,
} from 'src/services';
import { TServiceChange } from 'src/services/service/service.types';
import { formatNum, formMessage } from 'src/utils';

const ServiceForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsItem } = useSelectors();
  const [uploadFile, setUploadFile] = React.useState<string[]>([]);

  const { data: dimensions } = useGetDimensionsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: formats } = useGetFormatsQuery();

  const { mutate: addService, isLoading: addLoading } = usePostServiceMutation();
  const { mutate: editService, isLoading: editLoading } = useEditServiceMutation();

  const onChangeUpload = (e: any) => {
    setUploadFile(e.target.files);
  };

  const onFinish = (values: TServiceChange) => {
    if (paramsItem) {
      editService({
        ...values,
        id: paramsItem.id,
        images: uploadFile,
        code: String(values.code),
        package_code: String(values.package_code),
      });
    } else {
      addService({
        ...values,
        images: uploadFile,
        code: String(values.code),
        package_code: String(values.package_code),
      });
    }
  };

  React.useEffect(() => {
    if (paramsItem) {
      form.setFieldsValue({
        ...paramsItem,
        category_id: paramsItem.category.id,
        dimension_id: paramsItem.dimension.id,
        images: null,
      });
    }
  }, [paramsItem, form]);
  return (
    <CustomModal form={form} confirmLoading={addLoading || editLoading}>
      <Form
        name="Service Form"
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
          name="category_id"
          label="Категория"
          rules={[{ required: true, message: formMessage('Категория') }]}
        >
          <Select
            options={categories?.data.map(({ id, title }) => ({ value: id, label: title }))}
          />
        </Form.Item>
        <Form.Item
          name="dimension_id"
          label="Размер"
          rules={[{ required: true, message: formMessage('Размер') }]}
        >
          <Select
            options={dimensions?.data.map(({ id, title }) => ({ value: id, label: title }))}
          />
        </Form.Item>
        <Form.Item
          name="is_discount"
          valuePropName="checked"
          label="Скидка"
          rules={[{ required: false, message: formMessage('Скидка') }]}
        >
          <Checkbox>Скидка</Checkbox>
        </Form.Item>
        <Form.Item
          label="Сумма"
          name="price"
          rules={[{ required: true, message: formMessage('Сумма') }]}
        >
          <InputNumber formatter={formatNum} addonAfter="uzs" />
        </Form.Item>
        <Form.Item
          label="Каждый"
          name="each"
          rules={[{ required: true, message: formMessage('Каждый') }]}
        >
          <InputNumber formatter={formatNum} />
        </Form.Item>
        <Form.Item
          label="Код"
          name="code"
          rules={[{ required: true, message: formMessage('Код') }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Код пакета"
          name="package_code"
          rules={[{ required: true, message: formMessage('Код пакета') }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.List name="formats" initialValue={[{}]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} style={{ width: '100%', display: 'flex', gap: 10 }}>
                  <Form.Item
                    {...restField}
                    name={[name, 'id']}
                    style={{ width: '100%' }}
                    rules={[{ required: true, message: formMessage('Формат') }]}
                  >
                    <Select
                      placeholder="Формат"
                      options={formats?.data.map((el) => ({ value: el.id, label: el.name }))}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'value']}
                    style={{ width: '100%' }}
                    rules={[{ required: true, message: formMessage('Значение') }]}
                  >
                    <InputNumber formatter={formatNum} placeholder="Значение" />
                  </Form.Item>
                  <div>
                    <Button
                      type="primary"
                      danger
                      onClick={() => remove(name)}
                      icon={<AiOutlineDelete />}
                    />
                  </div>
                </div>
              ))}
              <Button type="default" onClick={() => add()} block>
                Добавить формат
              </Button>
            </>
          )}
        </Form.List>
        <Form.Item
          label="Фото"
          name="images"
          rules={[{ required: false, message: formMessage('Фото') }]}
        >
          <input onChange={onChangeUpload} accept=".jpg, .jpeg, .png" multiple type="file" />
        </Form.Item>
      </Form>
    </CustomModal>
  );
};

export { ServiceForm };
