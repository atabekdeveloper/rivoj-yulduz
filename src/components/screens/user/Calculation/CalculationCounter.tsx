/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, InputNumber, Space } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useParams } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useGetUserServiceItemQuery } from 'src/services';
import { formMessage } from 'src/utils';

import s from './calculation.module.scss';

const CalculationCounter = () => {
  const [form] = Form.useForm();
  const { slugService } = useParams();
  const { setParamsItem } = useActions();

  const count = Form.useWatch('count', { form, preserve: true }) || 0;

  const { data: service, isSuccess } = useGetUserServiceItemQuery(String(slugService));

  const onFormatValue = (id: number) => service?.data.formats.find((el) => el.id === id)?.value;
  const unDimensional = () => {
    if (service?.data.dimension.id === 1) return true;
    if (service?.data.dimension.id === 2) return true;
    if (service?.data.dimension.id === 3) return true;
  };
  const onSomeSm = () => service?.data.dimension.unit === 'см';
  const addCount = () => form.setFieldValue('count', count ? count + 1 : 1);
  const minisCount = () => form.setFieldValue('count', count > 0 ? count - 1 : 0);

  const onFinish = (values: any) => {
    if (isSuccess) {
      setParamsItem({
        width: values.width || null,
        height: values.height || null,
        unit: service.data.dimension.unit,
        count: values.count,
        quantity:
          service.data.price_each * values.count * (values.height || 1) * (values.width || 1),
        service_slug: service.data.slug,
        category: service.data.category.title,
        service: service.data.title,
      });
    }
  };
  React.useEffect(() => {
    form.resetFields();
  }, [slugService]);
  React.useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === '-') event.preventDefault();
    };
    // Добавление обработчика события при монтировании компонента
    document.addEventListener('keydown', handleKeyDown);
    // Удаление обработчика при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className={s.calc}>
      <Form
        form={form}
        name="User Contact"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
      >
        <div className={s.inputs}>
          <Form.Item
            name="height"
            rules={[
              {
                required: service?.data.dimension.id !== 1,
                message: formMessage(`Высота в ${service?.data.dimension.unit}`),
              },
            ]}
            style={{ width: '100%' }}
          >
            <InputNumber
              min={onFormatValue(5) || 0}
              max={onFormatValue(6)}
              step={clsx(onSomeSm() && 1)}
              precision={onSomeSm() ? 0 : 1}
              placeholder={`Высота в ${service?.data.dimension.unit}`}
              disabled={service?.data.dimension.id === 1}
              size="large"
              type="number"
            />
          </Form.Item>
          <Form.Item
            name="width"
            rules={[
              {
                required: !unDimensional(),
                message: formMessage(`Ширина в ${service?.data.dimension.unit}`),
              },
            ]}
            style={{ width: '100%' }}
          >
            <InputNumber
              min={onFormatValue(3) || 0}
              max={onFormatValue(4)}
              step={clsx(onSomeSm() && 1)}
              precision={onSomeSm() ? 0 : 1}
              placeholder={`Ширина в ${service?.data.dimension.unit}`}
              disabled={unDimensional()}
              size="large"
              type="number"
            />
          </Form.Item>
        </div>
        <Space.Compact size="large">
          <Button type="default" onClick={minisCount} disabled={onFormatValue(1) === count}>
            -
          </Button>
          <Form.Item
            name="count"
            rules={[{ required: true, message: formMessage('Штук') }]}
            style={{ width: '80px' }}
          >
            <InputNumber
              min={onFormatValue(1) || 1}
              max={onFormatValue(2)}
              step={1}
              precision={0}
              placeholder="Штук"
              type="number"
            />
          </Form.Item>
          <Button type="default" onClick={addCount} disabled={onFormatValue(2) === count}>
            +
          </Button>
        </Space.Compact>
        <br />
        <div style={{ float: 'right' }}>
          <UiButton type="primary" color="blue" text="Вычислить" onClick={() => form.submit()} />
        </div>
      </Form>
    </div>
  );
};

export { CalculationCounter };
