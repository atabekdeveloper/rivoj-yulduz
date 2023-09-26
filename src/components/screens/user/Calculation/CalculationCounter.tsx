/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, InputNumber, Space } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks';
import { useGetUserServiceItemQuery } from 'src/services';
import { formMessage } from 'src/utils';

import s from './calculation.module.scss';

const CalculationCounter = () => {
  const [count, setCount] = React.useState<number>(0);

  const [form] = Form.useForm();
  const { slugService } = useParams();
  const { setParamsItem } = useActions();

  const { data: service, isSuccess } = useGetUserServiceItemQuery(String(slugService));

  const onFormatValue = (id: number) => service?.data.formats.find((el) => el.id === id)?.value;
  const unDimensional = () => {
    if (service?.data.dimension_id === 1) return true;
    if (service?.data.dimension_id === 2) return true;
    if (service?.data.dimension_id === 3) return true;
  };
  const addCount = () => {
    setCount((prev) => prev + 1);
    form.setFieldValue('count', count);
  };
  const minisCount = () => {
    setCount((prev) => prev - 1);
    form.setFieldValue('count', count);
  };
  const onChangeCount = (value: number | null) => {
    setCount(Number(value));
    form.setFieldValue('count', value);
  };
  const onFinish = (values: any) => {
    if (isSuccess) {
      setParamsItem({
        width: values.width || null,
        height: values.height || null,
        count: values.count,
        quantity:
          service.data.price_each * values.count * (values.height || 1) * (values.width || 1),
        service_slug: service.data.slug,
        category: service.data.category_title,
        service: service.data.title,
      });
    }
  };
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
            rules={[{ required: service?.data.dimension_id !== 1, message: formMessage('Высота') }]}
            style={{ width: '100%' }}
          >
            <InputNumber
              min={onFormatValue(5)}
              max={onFormatValue(6)}
              placeholder="Высота"
              disabled={service?.data.dimension_id === 1}
              size="large"
              type="number"
            />
          </Form.Item>
          <Form.Item
            name="width"
            rules={[
              {
                required: !unDimensional(),
                message: formMessage('Ширина'),
              },
            ]}
            style={{ width: '100%' }}
          >
            <InputNumber
              min={onFormatValue(3)}
              max={onFormatValue(4)}
              placeholder="Ширина"
              disabled={unDimensional()}
              size="large"
              type="number"
            />
          </Form.Item>
        </div>
        <Space.Compact size="large">
          <Button type="default" onClick={minisCount}>
            -
          </Button>
          <Form.Item name="count" rules={[{ required: true, message: formMessage('Штук') }]}>
            <InputNumber
              value={count}
              min={onFormatValue(1)}
              max={onFormatValue(2)}
              onChange={onChangeCount}
              placeholder="Штук"
              type="number"
            />
          </Form.Item>
          <Button type="default" onClick={addCount}>
            +
          </Button>
        </Space.Compact>
        <br />
        <UiButton type="primary" color="blue" text="Вычислить" onClick={() => form.submit()} />
      </Form>
    </div>
  );
};

export { CalculationCounter };
