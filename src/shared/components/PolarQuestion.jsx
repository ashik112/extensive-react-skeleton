import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

function getAnswer(answer) {
  if (answer === null || answer === undefined) {
    return <Tag>Not Available</Tag>;
  }

  if (answer) {
    return <Tag color="cyan">Yes</Tag>;
  }
  return <Tag color="red">No</Tag>;
}

export default function PolarQuestion({ answer }) {
  return (
    <>{getAnswer(answer)}</>
  );
}
PolarQuestion.defaultProps = {
  answer: null,
};

PolarQuestion.propTypes = {
  answer: PropTypes.bool,
};
