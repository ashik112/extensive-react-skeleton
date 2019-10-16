import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export default function ButtonSubmit({ loading }) {
  return (
    <div>
      <Button
        loading={loading}
        disabled={false}
        style={{ marginTop: 10 }}
        type="submit"
        htmlType="submit"
      >
        Submit
      </Button>
    </div>
  );
}

ButtonSubmit.propTypes = {
  loading: PropTypes.bool,
};

ButtonSubmit.defaultProps = {
  loading: false,
};
