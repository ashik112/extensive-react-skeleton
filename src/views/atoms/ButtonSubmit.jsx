import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
export default function ButtonSubmit({ loading }) {
  return (
    <div>
      <Button
        className="button-color-sunset"
        disabled={false}
        style={{ marginTop: 10 }}
        type="submit"
        htmlType="submit"
        icon="check"
      >
        &nbsp;
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
