/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { message, notification, Icon } from 'antd';
import { store } from '../redux/store';
/**
 * [get comapny id from redux store]
 * @param  {} id
 */
export function getCompany(id) {
  try {
    const { loginReducer } = store.getState();
    const companyList = loginReducer.user.company;
    // eslint-disable-next-line eqeqeq,max-len
    const result = companyList.filter((company) => (company.id * 1) === (id * 1)); // * filters the array for matching values
    return result[0]; // * there should be one result at index 0
  } catch (error) {
    return {};
  }
}

/**
 * * [Shows Alert using "antd" message object]
 * ! Requires "antd"
 */
export function showAlert() {
  try {
    // get alert data from store
    const { alertReducer } = store.getState();
    const { type, body } = alertReducer;
    switch (type) {
      case 'success':
        return message.warning(body);
      case 'warning':
        return message.warning(body);
      case 'error':
        return message.error(body);
      default:
        return null;
    }
  } catch (error) {
    return null;
  }
}

/**
 * * [Shows Notification using "antd" notification object]
 * ! Requires "antd"
 */
export function showNotification() {
  try {
    // get alert data from store
    const { notificationReducer } = store.getState();
    const { type, body, title } = notificationReducer;
    switch (type) {
      case 'success':
        return notification.success({
          message: <span style={{ color: 'white' }}>{title}</span>,
          description: body,
          duration: 3,
          icon: <Icon type="file-done" style={{ color: 'white' }} />,
          style: {
            background: '#4caf50',
            boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
          },
        });
      case 'warning':
        return notification.warning({
          message: <span style={{ color: 'white' }}>{title}</span>,
          description: body,
          duration: 3,
          icon: <Icon type="exclamation-circle" style={{ color: 'white' }} />,
          style: {
            background: '#ff9800',
            boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
          },
        });
      case 'error':
        return notification.error({
          message: <span style={{ color: 'white' }}>Error!</span>,
          description: body,
          duration: 3,
          icon: <Icon type="close-circle" style={{ color: 'white' }} />,
          style: {
            background: '#f44336',
            boxShadow: '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
          },
        });
      default:
        return null;
    }
  } catch (error) {
    return null;
  }
}
