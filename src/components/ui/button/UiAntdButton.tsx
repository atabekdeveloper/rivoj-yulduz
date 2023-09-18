import { Button, ButtonProps, ConfigProvider } from 'antd';
import React from 'react';

const UiAntdButton: React.FC<ButtonProps> = (_props) => {
  const { color } = _props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: color || '#1677FF' } }}>
      <Button type="primary" {..._props} />
    </ConfigProvider>
  );
};

export { UiAntdButton };
