import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

function getStatusElement(status) {
  try {
    const { value, name } = status;
    switch (value) {
      case 0: return <Tag color="grey">{name}</Tag>;
      case 1: return <Tag color="gold">{name}</Tag>;
      default: return <Tag>{name}</Tag>;
    }
  } catch (e) {
    return <Tag>Not Available</Tag>;
  }
}

export default function RequisitionStatus({ status }) {
  return (
    <>{getStatusElement(status)}</>
  );
}


RequisitionStatus.defaultProps = {
  status: {
    value: -1,
    name: 'Not Available',
  },
};

RequisitionStatus.propTypes = {
  status: PropTypes.shape({
    value: PropTypes.number,
    name: PropTypes.string,
  }),
};
