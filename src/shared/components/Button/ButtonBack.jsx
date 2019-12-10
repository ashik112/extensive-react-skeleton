import React from 'react';
import {Button, Tooltip} from 'antd';
import PropTypes from 'prop-types';
import history from '../../../constants/history';

// eslint-disable-next-line no-unused-vars
export default function ButtonBack({ title, route }) {
  return (
    <>
      <Tooltip title="Back to List">
        <Button
          tabIndex={-1}
          type="primary"
          icon="arrow-left"
          onClick={async () => {
            await history.push(route);
          }}
        >
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <span>&nbsp;{title}&nbsp;List</span>
        </Button>
      </Tooltip>
    </>
  );
}

ButtonBack.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
};

ButtonBack.defaultProps = {
  title: '',
  route: '/dashboard',
};
