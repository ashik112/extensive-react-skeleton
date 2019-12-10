import React from 'react';
import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../../constants/history';


function CardButtonEdit({ route }) {
  return (
    <Tooltip title="Edit">
      <Button
        size="default"
        type="primary"
        className="button-color-daybreak"
        icon="edit"
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

CardButtonEdit.propTypes = {
  route: PropTypes.string,
};

CardButtonEdit.defaultProps = {
  route: '/dashboard',
};

export default connect()(CardButtonEdit);
