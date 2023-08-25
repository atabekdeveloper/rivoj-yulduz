/* eslint-disable react/destructuring-assignment */
import { Button, ButtonProps, ConfigProvider } from 'antd';
import React from 'react';

const UiButton: React.FC<ButtonProps> = (_props) => (
  <ConfigProvider theme={{ token: { colorPrimary: _props.color || '#E5087F' } }}>
    <Button type="primary" {..._props} />
  </ConfigProvider>
);

export { UiButton };
