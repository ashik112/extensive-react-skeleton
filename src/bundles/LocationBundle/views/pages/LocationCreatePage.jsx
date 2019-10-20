import React, { Component } from 'react';
import {
  Button, Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationForm from '../templates/LocationForm';
import departmentActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';

class LocationCreatePage extends Component {
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
    const { createLocation } = this.props;
    await createLocation(values);
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
              <span>&nbsp;Location List</span>
            </Button>
          </CardHeader>
          <CardBody>
            <WrappedLocationForm department={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

LocationCreatePage.defaultProps = {
  loading: false,
  createLocation: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
};

LocationCreatePage.propTypes = {
  loading: PropTypes.bool,
  createLocation: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.departmentReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  createLocation: (param) => dispatch(
    departmentActions.createLocation(param),
  ),
  clearStore: () => dispatch(
    departmentActions.clearLocationStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});

const WrappedLocationForm = Form.create({ name: 'department_create' })(LocationForm);
export default connect(mapStateToProps, mapDispatchToProps)(LocationCreatePage);
