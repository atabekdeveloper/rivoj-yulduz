/* eslint-disable react-hooks/exhaustive-deps */
import { Button, InputNumber, Space } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from 'src/hooks';
import { useGetUserServiceItemQuery } from 'src/services';

import s from './calculation.module.scss';

const CalculationCounter = () => {
  const [count, setCount] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [heigth, setHeigth] = React.useState(0);
  const { slugService } = useParams();
  const { setParamsItem } = useActions();

  const { data: service, isSuccess } = useGetUserServiceItemQuery(String(slugService));
  React.useEffect(() => {
    if (isSuccess) {
      setParamsItem({
        width,
        heigth,
        count,
        quantity: (service.data.price / service.data.each) * count,
        service_slug: service.data.slug,
        category: service.data.category_title,
        service: service.data.title,
      });
    }
  }, [count, heigth, width, isSuccess]);
  return (
    <div className={s.calc}>
      <div className={s.inputs}>
        <InputNumber
          value={heigth || null}
          onChange={(value) => setHeigth(value || 0)}
          placeholder="Высота"
          style={{ width: '100%' }}
          size="large"
          type="number"
        />
        <InputNumber
          value={width || null}
          onChange={(value) => setWidth(value || 0)}
          placeholder="Ширина"
          style={{ width: '100%' }}
          size="large"
          type="number"
        />
      </div>
      <div className={s.count}>
        <p>Штук</p>
        <Space.Compact size="large">
          <Button
            type="primary"
            onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
            style={{ backgroundColor: '#fff', color: '#1A509D' }}
          >
            -
          </Button>
          <InputNumber
            value={count}
            min={0}
            onChange={(value) => setCount(value || 0)}
            type="number"
            style={{ backgroundColor: '#E8EDF5' }}
          />
          <Button
            type="primary"
            onClick={() => setCount((prev) => prev + 1)}
            style={{ backgroundColor: '#fff', color: '#1A509D' }}
          >
            +
          </Button>
        </Space.Compact>
      </div>
    </div>
  );
};

export { CalculationCounter };
