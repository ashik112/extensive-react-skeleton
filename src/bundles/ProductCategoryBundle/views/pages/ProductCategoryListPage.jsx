/* eslint-disable react/jsx-filename-extension*/
import React, { Component } from 'react';
import {
  Row, Col, Button, Table, Tooltip,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardHeader from '../../../../components/Card/CardHeader';
import productCategoryActions from '../../redux/actions';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import history from '../../../../services/history';
import productCategoryRouteLinks from '../../routes/links';
import productCategoryApiService from '../../apiServices/productCategoryApiService';
import TableActionButtons from '../../../../views/templates/TableActionButtons';

class ProductCategoryListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.loadList().then();
  }

  async loadList() {
    const { getList } = this.props;
    await getList();
    const { list } = this.props;
    await this.setState({
      list,
    });
  }

  /**
   * ! TODO: handle Tree date (children)
   * */
  render() {
    const { loading } = this.props;
    const { list } = this.state;
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 20,
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Parent',
        dataIndex: 'parent.name',
        key: 'parent',
      },
      {
        title: 'Action',
        key: 'action',
        align: 'center',
        width: 150,
        render: (item, row, index) => (
          <TableActionButtons
            show
            remove
            update
            list={list}
            entity={item}
            row={row}
            index={index}
            linkRouteObject={productCategoryRouteLinks}
            deleteApiFunction={productCategoryApiService.deleteProductCategory}
            updateList={(updatedList) => {
              this.setState({
                list: updatedList,
              });
            }}
          />
        ),
      },
    ];

    return (
      <>
        <Row gutter={8}>
          <Col span={24}>
            <Card>
              <CardHeader>
                <Tooltip
                  title="Create a new ProductCategory"
                  mouseEnterDelay={1}
                >
                  <Button type="primary" icon="plus" onClick={() => history.push(productCategoryRouteLinks.create)}> Product Category </Button>
                </Tooltip>
              </CardHeader>
              <CardBody>
                <Table
                  size="small"
                  bordered
                  pagination={{ pageSize: 15 }}
                  loading={loading}
                  childrenColumnName="noChildren" // ! default name `children`
                  /* eslint-disable-next-line no-unused-vars */
                  rowKey={(row, index) => row.id} // return new Date().getUTCMilliseconds(); // ! have chidren
                  columns={columns}
                  dataSource={list}
                  scroll={{ x: 768 }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

ProductCategoryListPage.defaultProps = {
  getList: () => { },
  list: [],
  loading: false,
};

ProductCategoryListPage.propTypes = {
  getList: PropTypes.func,
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
};

const mapStateToProps = (state) => ({
  list: state.productCategoryReducer.list,
  loading: state.productCategoryReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(
    productCategoryActions.fetchProductCategoryList(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryListPage);
