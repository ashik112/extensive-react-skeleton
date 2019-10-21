import React, { Component } from 'react';
import {
  Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductCategoryForm from '../templates/ProductCategoryForm';
import productCategoryActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import productCategoryRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import ButtonBack from '../../../../views/atoms/ButtonBack';

class ProductCategoryCreatePage extends Component {
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
    const { createProductCategory } = this.props;
    await createProductCategory(values);
  };

  render() {
    const { loading, list } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <ButtonBack title="Product Category" route={productCategoryRouteLinks.list} />
          </CardHeader>
          <CardBody>
            <WrappedProductCategoryForm list={list} productCategory={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

ProductCategoryCreatePage.defaultProps = {
  loading: false,
  list: [],
  createProductCategory: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  getList: () => { },
};

ProductCategoryCreatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  createProductCategory: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.productCategoryReducer.loading,
  list: state.productCategoryReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  createProductCategory: (param) => dispatch(
    productCategoryActions.createProductCategory(param),
  ),
  clearStore: () => dispatch(
    productCategoryActions.clearProductCategoryStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
  getList: () => dispatch(
    productCategoryActions.fetchProductCategoryList(),
  ),
});

const WrappedProductCategoryForm = Form.create({ name: 'product_category_create' })(ProductCategoryForm);
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryCreatePage);
