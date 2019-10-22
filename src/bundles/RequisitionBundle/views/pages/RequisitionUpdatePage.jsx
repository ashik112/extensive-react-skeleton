import React, { Component } from 'react';
import {
  Form, Spin, Empty,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RequisitionForm from '../templates/RequisitionForm';
import requisitionActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import requisitionApiService, { requisitionApiRoutes } from '../../apiServices/requisitionApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import requisitionRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardActionButtons from '../../../../views/templates/CardActionButtons';


class RequisitionUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisition: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch, getList } = this.props;
      const { params } = match;
      if (params) {
        getList();
        requisitionApiService.getRequisition(params.id, dispatch).then((res) => {
          this.setState({
            requisition: res.data,
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
    const { updateRequisition } = this.props;
    const { requisition } = this.state;
    updateRequisition(requisition.id, params);
  };

  render() {
    const { loading, list } = this.props;
    const { requisition } = this.state;
    const initialValue = (
      requisition
        && requisition.id
        && {
          id: requisition.id,
          name: requisition.name,
          short: requisition.short,
          conversionFactor: requisition.conversion_factor,
          parent: (requisition.parent && requisition.parent.id) || null,
        }) || null;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <CardActionButtons
              title="Requisition"
              entity={requisition}
              linkRouteObject={requisitionRouteLinks}
              deleteApiRouteFunction={requisitionApiRoutes.requisitionDelete}
              show
              remove
            />
          </CardHeader>
          <CardBody>
            {requisition && <WrappedRequisitionForm list={list} requisition={initialValue} handleSubmit={this.handleSubmit} />}
            {!requisition && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


RequisitionUpdatePage.defaultProps = {
  loading: false,
  list: [],
  updateRequisition: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
  getList: () => { },
};

RequisitionUpdatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  updateRequisition: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.requisitionReducer.loading,
  list: state.requisitionReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  updateRequisition: (id, param) => dispatch(
    requisitionActions.updateRequisition(id, param),
  ),
  clearStore: () => dispatch(
    requisitionActions.clearRequisitionStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
  getList: () => dispatch(
    requisitionActions.fetchRequisitionList(),
  ),
});
const WrappedRequisitionForm = Form.create({ name: 'requisition_update' })(RequisitionForm);
export default connect(mapStateToProps, mapDispatchToProps)(RequisitionUpdatePage);
