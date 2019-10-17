import React, { Component } from 'react';
import { Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from '../../services/apiService';
import history from '../../services/history';
import { showNotification } from '../../services/generalhelper';
import checkHttpError from '../../services/checkHttpError';


class CardButtonDelete extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      loading: false,
    };
  }

  deleteItem = () => {
    const { dispatch, url, route } = this.props;
    remove(url, dispatch).then(() => {
      history.push(route);
      showNotification('success', 'Successful!', 'Deletion Complete.', 5);
    }).catch((err) => {
      checkHttpError(err, 2, 5, dispatch);
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <Popconfirm
          title="Are you sure?"
          onConfirm={this.deleteItem}
          placement="left"
        >
          <Button
            size="default"
            type="danger"
            icon="delete"
            loading={loading}
          />
        </Popconfirm>
      </>
    );
  }
}

CardButtonDelete.propTypes = {
  dispatch: PropTypes.func,
  url: PropTypes.string,
  route: PropTypes.string,
};

CardButtonDelete.defaultProps = {
  dispatch: () => {},
  url: '',
  route: '/dashboard',
};

export default connect()(CardButtonDelete);
