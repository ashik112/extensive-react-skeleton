/* eslint-disable react/jsx-filename-extension*/
import React, { Component } from 'react';
import {
  Row, Col, Button, Table, Tooltip, Card,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import companyActions from '../../redux/actions';
import history from '../../../../constants/history';
import historyRoutes from '../../../../routes/historyRoutes';
import companyApiService from '../../apiServices/companyApiService';
import TableActionButtons from '../../../../components/templates/TableActionButtons';

class CompanyListPage extends Component {
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
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
            linkRouteObject={historyRoutes.company}
            deleteApiFunction={companyApiService.deleteCompany}
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
            <Card
              extra={[
                <Tooltip
                  title="Create a new Company"
                  mouseEnterDelay={1}
                >
                  <Button type="primary" icon="plus" onClick={() => history.push(historyRoutes.company.create)}> Company </Button>
                </Tooltip>,
              ]}
            >
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
