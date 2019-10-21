import React, { Component } from 'react';
import {
  Button, Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SupplierForm from '../templates/SupplierForm';
import supplierActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import supplierRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';

class SupplierCreatePage extends Component {
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
    const { createSupplier } = this.props;
    await createSupplier(values);
  };

  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <Button
              tabIndex={-1}
              type="primary"
              icon="arrow-left"
              onClick={async () => {
                history.push(supplierRouteLinks.list);
              }}
            >
              <span>&nbsp;Supplier List</span>
            </Button>
          </CardHeader>
          <CardBody>
            <WrappedSupplierForm supplier={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

SupplierCreatePage.defaultProps = {
  loading: false,
  createSupplier: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
};

SupplierCreatePage.propTypes = {
  loading: PropTypes.bool,
  createSupplier: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.supplierReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  createSupplier: (param) => dispatch(
    supplierActions.createSupplier(param),
  ),
  clearStore: () => dispatch(
    supplierActions.clearSupplierStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});

const WrappedSupplierForm = Form.create({ name: 'supplier_create' })(SupplierForm);
export default connect(mapStateToProps, mapDispatchToProps)(SupplierCreatePage);
