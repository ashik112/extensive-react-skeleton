/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React, { Component } from 'react';
import {
  Row, Col, Button, Divider, Table, Tooltip, Popconfirm, Icon,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardHeader from '../../../components/Card/CardHeader';
import companyActions from '../redux/actions';
import Card from '../../../components/Card/Card';
import CardBody from '../../../components/Card/CardBody';
//import CardFooter from '../../../components/Card/CardFooter';

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
        width: 20,
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
        align: 'center',
        width: 150,
        render: () => (
          <span>
            {/*<ButtonGroup>*/}
            <Button
              ghost
              shape="circle-outline"
              size="small"
              type="primary"
              className="button-color-cyan"
              icon="eye"
              onClick={() => {
                // TODO: show
                // eslint-disable-next-line no-console
                console.log('view');
              }}
            />
            <Divider type="vertical" />
            <Button
              ghost
              shape="circle-outline"
              size="small"
              type="primary"
              className="button-color-daybreak"
              icon="edit"
              onClick={async () => {
                // TODO: edit
              }}
            />
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure"
              placement="topLeft"
              okText="Yes"
              icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            >
              <Button
                ghost
                shape="circle-outline"
                size="small"
                type="danger"
                icon="delete"
                onClick={() => {
                  // TODO: delete
                }}
              />
            </Popconfirm>
            {/*</ButtonGroup>*/}
          </span>
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
                  title="Create a new Company"
                  mouseEnterDelay={1}
                >
                  <Button type="primary" icon="plus"> Companies </Button>
                </Tooltip>
              </CardHeader>
              <CardBody>
                <Table
                  size="small"
                  bordered
                  pagination={{ pageSize: 15 }}
                  loading={loading}
                  rowKey={(record) => record.id}
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
