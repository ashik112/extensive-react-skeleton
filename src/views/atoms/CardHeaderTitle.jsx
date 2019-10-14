import React from 'react';
import PropTypes from 'prop-types';

export default function CardHeaderTitle({ title, children }) {
  return (
    <span>
      {children}
      <span style={{ position: 'absolute', top: '11px' }}>
        &nbsp;
        {title}
      </span>
    </span>
  );
}

CardHeaderTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape().isRequired,
};

CardHeaderTitle.defaultProps = {
  title: '',
};
