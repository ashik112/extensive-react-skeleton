import React, { Component } from 'react';
import {
  Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RequisitionForm from '../templates/RequisitionForm';
import requisitionActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import requisitionRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import ButtonBack from '../../../../views/atoms/ButtonBack';

class RequisitionCreatePage extends Component {
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
    const { createRequisition } = this.props;
    await createRequisition(values);
  };

  render() {
    const { loading, list } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <ButtonBack title="Requisition" route={requisitionRouteLinks.list} />
          </CardHeader>
          <CardBody>
            <WrappedRequisitionForm list={list} requisition={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

RequisitionCreatePage.defaultProps = {
  loading: false,
  list: [],
  createRequisition: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  getList: () => { },
};

RequisitionCreatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  createRequisition: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.requisitionReducer.loading,
  list: state.requisitionReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  createRequisition: (param) => dispatch(
    requisitionActions.createRequisition(param),
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

const WrappedRequisitionForm = Form.create({ name: 'requisition_create' })(RequisitionForm);
export default connect(mapStateToProps, mapDispatchToProps)(RequisitionCreatePage);
