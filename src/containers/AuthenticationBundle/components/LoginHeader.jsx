/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Typography, Icon } from 'antd';
import './LoginHeader.scss';

export default function LoginHeader() {
  return (
    <>
      <Typography.Title align="middle" level={3} className="login-header">
        <Icon className="login-header--icon" style={{ verticalAlign: 'middle' }} type="lock" />
        &nbsp;
        HR Information System
      </Typography.Title>
    </>
  );
}
