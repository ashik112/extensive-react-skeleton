import React, { Component } from 'react';
import {
  Button, Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationForm from '../templates/LocationForm';
import locationActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import locationRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';

class LocationCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getList } = this.props;
    getList();
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
    const { loading, list } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <Button
              tabIndex={-1}
              type="primary"
              icon="arrow-left"
              onClick={async () => {
                history.push(locationRouteLinks.list);
              }}
            >
              <span>&nbsp;Location List</span>
            </Button>
          </CardHeader>
          <CardBody>
            <WrappedLocationForm list={list} location={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

LocationCreatePage.defaultProps = {
  loading: false,
  list: [],
  createLocation: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  getList: () => { },
};

LocationCreatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  createLocation: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.locationReducer.loading,
  list: state.locationReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  createLocation: (param) => dispatch(
    locationActions.createLocation(param),
  ),
  clearStore: () => dispatch(
    locationActions.clearLocationStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
  getList: () => dispatch(
    locationActions.fetchLocationList(),
  ),
});

const WrappedLocationForm = Form.create({ name: 'location_create' })(LocationForm);
export default connect(mapStateToProps, mapDispatchToProps)(LocationCreatePage);
