import { Button, ConfigProvider } from 'antd';
import React from 'react';

const MyButton = () => {
  return (
    <ConfigProvider wave={{ disabled: true }}>
      <Button>click</Button>
    </ConfigProvider>
  );
};

export default MyButton;
