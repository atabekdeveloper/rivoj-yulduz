import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { SliderForm } from './form/SliderForm';
import { SliderTable } from './table/SliderTable';

const Slider: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Реклама"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <SliderForm />
      <SliderTable />
    </>
  );
};

export { Slider };
