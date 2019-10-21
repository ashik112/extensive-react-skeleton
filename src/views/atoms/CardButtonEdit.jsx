import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../services/history';


function CardButtonEdit({ route }) {
  return (
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
  );
}

CardButtonEdit.propTypes = {
  route: PropTypes.string,
};

CardButtonEdit.defaultProps = {
  route: '/dashboard',
};

export default connect()(CardButtonEdit);
