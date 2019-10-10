/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React, { Component } from 'react';
import {
  Row, Col, Button, Divider, Table,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../../components/Card/Card';
import CardBody from '../../../components/Card/CardBody';
import CardHeader from '../../../components/Card/CardHeader';
import companyActions from '../redux/actions';

class CompanyListPage extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  render() {
    const { loading, list } = this.props;
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: '5%',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        width: '15%',
        align: 'center',
        render: () => (
          <span>
            <Button
              size="small"
              type="dashed"
              icon="eye"
              onClick={() => {
                // TODO: show
              }}
            />
            <Divider type="vertical" />
            <Button
              size="small"
              type="primary"
              icon="edit"
              onClick={async () => {
                // TODO: edit
              }}
            />
            <Divider type="vertical" />
            <Button
              size="small"
              type="danger"
              icon="delete"
              onClick={() => {
                // TODO: delete
              }}
            />
          </span>
        ),
      },
    ];

    return (
      <>
        <Row gutter={8}>
          <Col span={24}>
            <Card>
              <CardHeader
                color="success"
              >
                Company List
              </CardHeader>
              <CardBody>
                <Table
                  pagination={{ pageSize: 15 }}
                  size="small"
                  loading={loading}
                  bordered
                  rowKey={(record) => record.id}
                  columns={columns}
                  dataSource={list}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

CompanyListPage.defaultProps = {
  getList: () => { },
  list: [],
  loading: false,
};

CompanyListPage.propTypes = {
  getList: PropTypes.func,
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
};

const mapStateToProps = (state) => ({
  list: state.companyReducer.list,
  loading: state.companyReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(
    companyActions.fetchCompanyList(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyListPage);
