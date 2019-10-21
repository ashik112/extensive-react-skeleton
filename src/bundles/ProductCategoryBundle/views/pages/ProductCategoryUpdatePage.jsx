import React, { Component } from 'react';
import {
  Form, Spin, Empty,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductCategoryForm from '../templates/ProductCategoryForm';
import productCategoryActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import productCategoryApiService, { productCategoryApiRoutes } from '../../apiServices/productCategoryApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import productCategoryRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardActionButtons from '../../../../views/templates/CardActionButtons';


class ProductCategoryUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch, getList } = this.props;
      const { params } = match;
      if (params) {
        getList();
        productCategoryApiService.getProductCategory(params.id, dispatch).then((res) => {
          this.setState({
            productCategory: res.data,
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
    const { updateProductCategory } = this.props;
    const { productCategory } = this.state;
    updateProductCategory(productCategory.id, params);
  };

  render() {
    const { loading, list } = this.props;
    const { productCategory } = this.state;
    const initialValue = (
      productCategory
        && productCategory.id
        && {
          id: productCategory.id,
          name: productCategory.name,
          description: productCategory.description,
          parent: (productCategory.parent && productCategory.parent.id) || null,
        }) || null;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <CardActionButtons
              title="Product Category"
              entity={productCategory}
              linkRouteObject={productCategoryRouteLinks}
              deleteApiRouteFunction={productCategoryApiRoutes.productCategoryDelete}
              show
              remove
            />
          </CardHeader>
          <CardBody>
            {productCategory && <WrappedProductCategoryForm list={list} productCategory={initialValue} handleSubmit={this.handleSubmit} />}
            {!productCategory && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


ProductCategoryUpdatePage.defaultProps = {
  loading: false,
  list: [],
  updateProductCategory: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
  getList: () => { },
};

ProductCategoryUpdatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  updateProductCategory: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.productCategoryReducer.loading,
  list: state.productCategoryReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductCategory: (id, param) => dispatch(
    productCategoryActions.updateProductCategory(id, param),
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
const WrappedProductCategoryForm = Form.create({ name: 'product_category_update' })(ProductCategoryForm);
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryUpdatePage);
