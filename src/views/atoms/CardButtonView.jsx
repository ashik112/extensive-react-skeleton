import React from 'react';
import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../services/history';


function CardButtonView({ route }) {
  return (
    <Tooltip title="View">
      <Button
        size="default"
        type="primary"
        className="button-color-cyan"
        icon="eye"
        onClick={async () => {
          try {
            await history.push(route);
          } catch (e) {
            /* */
          }
        }}
      />
    </Tooltip>
  );
}

CardButtonView.propTypes = {
  route: PropTypes.string,
};

CardButtonView.defaultProps = {
  route: '/dashboard',
};

export default connect()(CardButtonView);
