/* eslint-disable react/jsx-filename-extension*/
import React, { Component } from 'react';
import {
  Row, Col, Button, Divider, Table, Tooltip,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardHeader from '../../../../components/Card/CardHeader';
import departmentActions from '../../redux/actions';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';
import TableButtonDelete from '../../../../views/atoms/TableButtonDelete';
import departmentApiService from '../../apiServices/departmentApiService';
//import CardFooter from '../../../components/Card/CardFooter';

class DepartmentListPage extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      list: [],
      localLoading: false,
    };
  }

  componentDidMount() {
    this.loadList().then();
  }

  handleDelete = async (id, row, index) => {
    const { dispatch } = this.props;
    this.toggleLoading(true);
    departmentApiService.deleteDepartment(id, dispatch).then(() => {
      const { list } = this.state;
      list.splice(index, 1);
      this.setState({
        list,
      });
      this.toggleLoading(false);
    }).catch(() => {
      this.toggleLoading(false);
    });
  };

  async loadList() {
    const { getList } = this.props;
    await getList();
    const { list } = this.props;
    await this.setState({
      list,
    });
  }

  toggleLoading(status) {
    this.setState({
      localLoading: status,
    });
  }

  render() {
    const { loading } = this.props;
    const { localLoading } = this.state;
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
                history.push(departmentRouteLinks.show(item.id));
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
                history.push(departmentRouteLinks.edit(item.id));
              }}
            />
            <Divider type="vertical" />
            <TableButtonDelete loading={loading} handleConfirm={() => this.handleDelete(item.id, row, index)} />
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
                  loading={loading || localLoading}
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
  dispatch: () => { },
  list: [],
  loading: false,
};

DepartmentListPage.propTypes = {
  getList: PropTypes.func,
  dispatch: PropTypes.func,
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
