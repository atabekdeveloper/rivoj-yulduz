import { Button, InputNumber, Space } from 'antd';
import React from 'react';
import { UiButton } from 'src/components/ui';

import s from './calculation.module.scss';

const CalculationCounter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className={s.calc}>
      <div className={s.inputs}>
        <InputNumber placeholder="Высота" style={{ width: '100%' }} size="large" type="number" />
        <InputNumber placeholder="Ширина" style={{ width: '100%' }} size="large" type="number" />
      </div>
      <div className={s.count}>
        <p>Штук</p>
        <Space.Compact size="large">
          <Button
            type="primary"
            onClick={() => setCount((prev) => prev - 1)}
            style={{ backgroundColor: '#fff', color: '#1A509D' }}
          >
            -
          </Button>
          <InputNumber
            value={count}
            type="number"
            onChange={(value) => setCount(value || 0)}
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
      <div className={s.btn}>
        <UiButton text="Вычислить" color="blue" type="primary" />
      </div>
    </div>
  );
};

export { CalculationCounter };
