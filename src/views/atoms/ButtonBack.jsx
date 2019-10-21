import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import history from '../../services/history';

// eslint-disable-next-line no-unused-vars
export default function ButtonBack({ title, route }) {
  return (
    <>
      <Button
        tabIndex={-1}
        type="primary"
        icon="arrow-left"
        onClick={async () => {
          await history.push(route);
        }}
      >
        <span>
          &nbsp;
          {title}
        </span>
      </Button>
    </>
  );
}

ButtonBack.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
};

ButtonBack.defaultProps = {
  title: 'List',
  route: '/dashboard',
};
