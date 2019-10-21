import React, { Component } from 'react';
import { Button, Divider } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../services/history';
import TableButtonDelete from '../atoms/TableButtonDelete';


class TableActionButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleDelete = async (id, row, index) => {
    const {
      dispatch, deleteApiFunction, updateList, list,
    } = this.props;
    if (row && index >= 0) {
      this.toggleLoading(true);
      await deleteApiFunction(id, dispatch).then(() => {
        list.splice(index, 1);
        this.toggleLoading(false);
        updateList(list);
      }).catch(() => {
        this.toggleLoading(false);
      });
    }
  };

  toggleLoading(status) {
    this.setState({
      loading: status,
    });
  }

  render() {
    const {
      entity, linkRouteObject, row, index, show, update, remove,
    } = this.props;
    const { loading } = this.state;
    return (
      <>
        <span>
          {
            entity && entity.id && show && (
              <>
                <Button
                  ghost
                  shape="circle-outline"
                  size="small"
                  type="primary"
                  className="button-color-cyan"
                  icon="eye"
                  onClick={() => {
                    history.push(linkRouteObject.show(entity.id));
                  }}
                />
                <Divider type="vertical" />
              </>
            )
          }
          {
            entity && entity.id && update && (
              <>
                <Button
                  ghost
                  shape="circle-outline"
                  size="small"
                  type="primary"
                  className="button-color-daybreak"
                  icon="edit"
                  onClick={async () => {
                    history.push(linkRouteObject.edit(entity.id));
                  }}
                />
                <Divider type="vertical" />
              </>
            )
          }
          {
            entity && entity.id && remove && (
              <TableButtonDelete loading={loading} handleConfirm={() => this.handleDelete(entity.id, row, index)} />
            )
          }
        </span>
      </>
    );
  }
}

TableActionButtons.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape([])),
  row: PropTypes.shape(),
  index: PropTypes.number,
  dispatch: PropTypes.func,
  updateList: PropTypes.func,
  linkRouteObject: PropTypes.shape({
    list: PropTypes.string,
    show: PropTypes.func,
    edit: PropTypes.func,
  }),
  deleteApiFunction: PropTypes.func,
  show: PropTypes.bool,
  update: PropTypes.bool,
  remove: PropTypes.bool,
  entity: PropTypes.shape({
    id: PropTypes.number,
  }),
};

TableActionButtons.defaultProps = {
  list: [],
  row: {},
  index: -1,
  entity: {
    id: null,
  },
  show: false,
  update: false,
  remove: false,
  linkRouteObject: {
    show: () => {},
    edit: () => {},
    list: '/dashboard',
  },
  dispatch: () => {},
  deleteApiFunction: () => {},
  updateList: () => {},
};

export default connect()(TableActionButtons);
