import React, { Component } from 'react';
import {Button, Icon, Popconfirm, Tooltip} from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from '../../services/apiService';
import history from '../../constants/history';
import { showAlert } from '../../services/generalhelper';
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
      showAlert('success', 'Operation Successful!', 3);
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
          icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
        >
          <Tooltip title="Delete">
            <Button
              tabIndex={-1}
              size="default"
              type="danger"
              icon="delete"
              loading={loading}
            />
          </Tooltip>
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
