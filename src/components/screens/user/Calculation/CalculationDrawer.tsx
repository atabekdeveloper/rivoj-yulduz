import { Drawer } from 'antd';
import React from 'react';
import { useActions, useSelectors } from 'src/hooks';

import { CalculationMenu } from './CalculationMenu';

const CalculationDrawer: React.FC = () => {
  const { isNavbar } = useSelectors();
  const { toggleNavbar } = useActions();
  return (
    <Drawer
      width={260}
      title="Услуги"
      placement="left"
      onClose={() => toggleNavbar()}
      open={isNavbar}
    >
      <CalculationMenu />
    </Drawer>
  );
};

export { CalculationDrawer };
