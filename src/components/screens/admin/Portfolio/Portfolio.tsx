import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { PortfolioForm } from './form/PortfolioForm';
import { PortfolioTable } from './table/PortfolioTable';

const Portfolio: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Портфолио"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <PortfolioForm />
      <PortfolioTable />
    </>
  );
};

export { Portfolio };
