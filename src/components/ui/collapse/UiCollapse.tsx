import { Collapse, CollapseProps, ConfigProvider } from 'antd';
import React from 'react';

import { TCollapse } from './collapse.types';

const UiCollapse: React.FC<CollapseProps & TCollapse> = (_props) => {
  const { colorHeading } = _props;
  return (
    <ConfigProvider
      theme={{
        token: { colorTextHeading: colorHeading },
      }}
    >
      <Collapse {..._props} style={{ fontWeight: 500 }} />
    </ConfigProvider>
  );
};

export { UiCollapse };
