/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Tag,
} from 'antd';
import productCategoryApiService, { productCategoryApiRoutes } from '../../apiServices/productCategoryApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import productCategoryRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../views/templates/CardActionButtons';

class ProductCategoryShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    productCategoryApiService.getProductCategory(params.id, dispatch).then((res) => {
      this.setState({
        productCategory: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { productCategory } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardActionButtons
            title="Product Category"
            entity={productCategory}
            linkRouteObject={productCategoryRouteLinks}
            deleteApiRouteFunction={productCategoryApiRoutes.productCategoryDelete}
            update
            remove
          />
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{productCategory.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{productCategory.name}</Descriptions.Item>
            <Descriptions.Item label="Description">{productCategory.description ? productCategory.description : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
            <Descriptions.Item label="Parent">{productCategory.parent ? (productCategory.parent && productCategory.parent.name) : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(ProductCategoryShowPage);
