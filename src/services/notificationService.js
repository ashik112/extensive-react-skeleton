/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { message, notification, Icon } from 'antd';

/**
 * /**
 * * [Shows Alert using "antd" message object]
 * ! Requires "antd"
 * @param type
 * @param body
 * @param duration
 * @returns {MessageType|null}
 */
export function showAlert(type, body, duration = 5) {
  try {
    switch (type) {
      case 'success':
        return message.success(body, duration);
      case 'warning':
        return message.warning(body, duration);
      case 'error':
        return message.error(body, duration);
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
export function showNotification(type, title, body, duration, placement = 'topRight') {
  try {
    switch (type) {
      case 'success':
        return notification.success({
          placement,
          message: <h6 style={{ color: 'white' }}>{title}</h6>,
          description: <span><b>{body}</b></span>,
          duration,
          icon: <Icon type="file-done" style={{ color: 'white' }} />,
          style: {
            background: '#28a745',
            boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
          },
        });
      case 'warning':
        return notification.warning({
          placement,
          message: <h6 style={{ color: 'white' }}>{title}</h6>,
          description: <span><b>{body}</b></span>,
          duration,
          icon: <Icon type="exclamation-circle" style={{ color: 'white' }} />,
          style: {
            background: '#ffc107',
            boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
          },
        });
      case 'error':
        return notification.error({
          placement,
          message: <span style={{ color: 'white' }}>{title}</span>,
          description: <span><b>{body}</b></span>,
          duration,
          icon: <Icon type="close-circle" style={{ color: 'white', fontWeight: '800' }} />,
          style: {
            background: '#dc3545',
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

export async function closeNotifications() {
  await notification.destroy();
}
