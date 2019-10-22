import React, { Component } from 'react';
import {
  Row, Col, Button, Table, Tooltip,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import CardHeader from '../../../../components/Card/CardHeader';
import requisitionActions from '../../redux/actions';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import history from '../../../../services/history';
import requisitionRouteLinks from '../../routes/links';
import TableActionButtons from '../../../../views/templates/TableActionButtons';
import requisitionApiService from '../../apiServices/requisitionApiService';
import { dateFormat } from '../../../../constants';
import RequisitionStatus from '../atoms/RequisitionStatus';
import PolarQuestion from '../../../../views/atoms/PolarQuestion';

class RequisitionListPage extends Component {
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
        title: 'Status',
        dataIndex: 'requisition_status',
        key: 'requisition_status',
        render: (status) => <RequisitionStatus status={status} />,
      },
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 20,
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: (date) => <Moment format={dateFormat}>{date}</Moment>,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Budgeted',
        dataIndex: 'budgeted',
        key: 'budgeted',
        render: (answer) => <PolarQuestion answer={answer} />,
      },
      {
        title: 'LC',
        dataIndex: 'lc',
        key: 'lc',
        render: (answer) => <PolarQuestion answer={answer} />,
      },
      {
        title: 'Institute',
        dataIndex: 'institute',
        key: 'institute',
        render: (answer) => <PolarQuestion answer={answer} />,
      },
      {
        title: 'Department',
        dataIndex: 'department.name',
        key: 'department',
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
            linkRouteObject={requisitionRouteLinks}
            deleteApiFunction={requisitionApiService.deleteRequisition}
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
                  title="Create a new Requisition"
                  mouseEnterDelay={1}
                >
                  <Button type="primary" icon="plus" onClick={() => history.push(requisitionRouteLinks.create)}> Requisition </Button>
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

RequisitionListPage.defaultProps = {
  getList: () => { },
  list: [],
  loading: false,
};

RequisitionListPage.propTypes = {
  getList: PropTypes.func,
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
};

const mapStateToProps = (state) => ({
  list: state.requisitionReducer.list,
  loading: state.requisitionReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(
    requisitionActions.fetchRequisitionList(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequisitionListPage);
