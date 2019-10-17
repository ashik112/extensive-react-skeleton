import React, { Component } from 'react';
import {
  Button, Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DepartmentForm from '../templates/DepartmentForm';
import departmentActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';

class DepartmentCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
    clearNotifications();
  }

  handleSubmit = async (values) => {
    const { createDepartment } = this.props;
    await createDepartment(values);
  };

  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <Button
              type="primary"
              icon="arrow-left"
              onClick={async () => {
                history.push(departmentRouteLinks.list);
              }}
            >
              <span>&nbsp;Department List</span>
            </Button>
          </CardHeader>
          <CardBody>
            <WrappedDepartmentForm department={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

DepartmentCreatePage.defaultProps = {
  loading: false,
  createDepartment: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
};

DepartmentCreatePage.propTypes = {
  loading: PropTypes.bool,
  createDepartment: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.departmentReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  createDepartment: (param) => dispatch(
    departmentActions.createDepartment(param),
  ),
  clearStore: () => dispatch(
    departmentActions.clearDepartmentStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});

const WrappedDepartmentForm = Form.create({ name: 'department_create' })(DepartmentForm);
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentCreatePage);
