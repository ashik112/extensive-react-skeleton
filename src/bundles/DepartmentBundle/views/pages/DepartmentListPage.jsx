/* eslint-disable react/jsx-filename-extension*/
import React, { Component } from 'react';
import {
  Row, Col, Button, Table, Tooltip,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardHeader from '../../../../components/Card/CardHeader';
import departmentActions from '../../redux/actions';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';
import departmentApiService from '../../apiServices/departmentApiService';
import TableActionButtons from '../../../../views/templates/TableActionButtons';

class DepartmentListPage extends Component {
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
            linkRouteObject={departmentRouteLinks}
            deleteApiFunction={departmentApiService.deleteDepartment}
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
                  title="Create a new Department"
                  mouseEnterDelay={1}
                >
                  <Button type="primary" icon="plus" onClick={() => history.push(departmentRouteLinks.create)}> Department </Button>
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

DepartmentListPage.defaultProps = {
  getList: () => { },
  list: [],
  loading: false,
};

DepartmentListPage.propTypes = {
  getList: PropTypes.func,
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
};

const mapStateToProps = (state) => ({
  list: state.departmentReducer.list,
  loading: state.departmentReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(
    departmentActions.fetchDepartmentList(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListPage);
