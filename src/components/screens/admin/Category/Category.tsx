import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { CategoryForm } from './form/CategoryForm';
import { CategoryTable } from './table/CategoryTable';

const Category: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Категория"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <CategoryForm />
      <CategoryTable />
    </>
  );
};

export { Category };
