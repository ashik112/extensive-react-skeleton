import React, { Component } from 'react';
import {
  Form, Spin, Empty,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SupplierForm from '../templates/SupplierForm';
import supplierActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import supplierApiService, { supplierApiRoutes } from '../../apiServices/supplierApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import supplierRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardActionButtons from '../../../../views/templates/CardActionButtons';


class SupplierUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplier: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch } = this.props;
      const { params } = match;
      if (params) {
        supplierApiService.getSupplier(params.id, dispatch).then((res) => {
          this.setState({
            supplier: res.data,
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
    const { updateSupplier } = this.props;
    const { supplier } = this.state;
    updateSupplier(supplier.id, params);
  };

  render() {
    const { loading } = this.props;
    const { supplier } = this.state;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <CardActionButtons
              title="Supplier"
              entity={supplier}
              linkRouteObject={supplierRouteLinks}
              deleteApiRouteFunction={supplierApiRoutes.supplierDelete}
              show
              remove
            />
          </CardHeader>
          <CardBody>
            {supplier && <WrappedSupplierForm supplier={supplier} handleSubmit={this.handleSubmit} />}
            {!supplier && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


SupplierUpdatePage.defaultProps = {
  loading: false,
  updateSupplier: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
};

SupplierUpdatePage.propTypes = {
  loading: PropTypes.bool,
  updateSupplier: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  loading: state.supplierReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateSupplier: (id, param) => dispatch(
    supplierActions.updateSupplier(id, param),
  ),
  clearStore: () => dispatch(
    supplierActions.clearSupplierStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});
const WrappedSupplierForm = Form.create({ name: 'supplier_update' })(SupplierForm);
export default connect(mapStateToProps, mapDispatchToProps)(SupplierUpdatePage);
