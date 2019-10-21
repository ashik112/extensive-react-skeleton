import React, { Component } from 'react';
import {
  Form, Spin, Empty,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationForm from '../templates/LocationForm';
import locationActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import locationApiService, { locationApiRoutes } from '../../apiServices/locationApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import locationRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardActionButtons from '../../../../views/templates/CardActionButtons';


class LocationUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch, getList } = this.props;
      const { params } = match;
      if (params) {
        getList();
        locationApiService.getLocation(params.id, dispatch).then((res) => {
          this.setState({
            location: res.data,
          });
        });
      }
    } catch (e) {
      /* */
    }
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
    clearNotifications();
  }

  handleSubmit = (params) => {
    const { updateLocation } = this.props;
    const { location } = this.state;
    updateLocation(location.id, params);
  };

  render() {
    const { loading, list } = this.props;
    const { location } = this.state;
    const initialValue = (
      location
        && location.id
        && {
          id: location.id,
          name: location.name,
          description: location.description,
          parent: (location.parent && location.parent.id) || null,
        }) || null;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <CardActionButtons
              title="Location"
              entity={location}
              linkRouteObject={locationRouteLinks}
              deleteApiRouteFunction={locationApiRoutes.locationDelete}
              remove
              show
            />
          </CardHeader>
          <CardBody>
            {location && <WrappedLocationForm list={list} location={initialValue} handleSubmit={this.handleSubmit} />}
            {!location && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


LocationUpdatePage.defaultProps = {
  loading: false,
  list: [],
  updateLocation: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
  getList: () => { },
};

LocationUpdatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  updateLocation: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.locationReducer.loading,
  list: state.locationReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (id, param) => dispatch(
    locationActions.updateLocation(id, param),
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
const WrappedLocationForm = Form.create({ name: 'location_update' })(LocationForm);
export default connect(mapStateToProps, mapDispatchToProps)(LocationUpdatePage);
