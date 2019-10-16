import React from 'react';
import { Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';

export default function CardButtonDelete({ handleConfirm, loading }) {
  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={handleConfirm}
      placement="left"
    >
      <Button
        size="default"
        type="danger"
        icon="delete"
        loading={loading}
      />
    </Popconfirm>
  );
}

CardButtonDelete.propTypes = {
  loading: PropTypes.bool,
  handleConfirm: PropTypes.func,
};

CardButtonDelete.defaultProps = {
  loading: false,
  handleConfirm: () => {},
};
