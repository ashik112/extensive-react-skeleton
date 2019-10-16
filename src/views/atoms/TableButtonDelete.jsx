import React from 'react';
import {Button, Icon, Popconfirm} from 'antd';
import PropTypes from 'prop-types';

export default function TableButtonDelete({ handleConfirm, loading }) {
  return (
    <Popconfirm
      title="Are you sure"
      placement="topLeft"
      okText="Yes"
      icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
      onConfirm={handleConfirm}
    >
      <Button
        loading={loading}
        ghost
        shape="circle-outline"
        size="small"
        type="danger"
        icon="delete"
        onClick={() => {
          // TODO: delete
        }}
      />
    </Popconfirm>
  );
}

TableButtonDelete.propTypes = {
  loading: PropTypes.bool,
  handleConfirm: PropTypes.func,
};

TableButtonDelete.defaultProps = {
  loading: false,
  handleConfirm: () => {},
};
