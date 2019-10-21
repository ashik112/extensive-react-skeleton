import React, { Component } from 'react';
import {
  Form, Spin, Empty, Divider,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DepartmentForm from '../templates/DepartmentForm';
import departmentActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import departmentApiService, { departmentApiRoutes } from '../../apiServices/departmentApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import departmentRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';
import ButtonBack from '../../../../views/atoms/ButtonBack';
import CardButtonView from '../../../../views/atoms/CardButtonView';


class DepartmentUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch } = this.props;
      const { params } = match;
      if (params) {
        departmentApiService.getDepartment(params.id, dispatch).then((res) => {
          this.setState({
            department: res.data,
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
    const { updateDepartment } = this.props;
    const { department } = this.state;
    updateDepartment(department.id, params);
  };

  render() {
    const { loading } = this.props;
    const { department } = this.state;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <ButtonBack title="Department List" route={departmentRouteLinks.list} />
            {
              department && department.id && (
                <div style={{ float: 'right' }}>
                  <CardButtonView route={departmentRouteLinks.show(department.id)} />
                  <Divider type="vertical" />
                  <CardButtonDelete url={`${serverURL}${departmentApiRoutes.departmentDelete(department.id)}`} route={departmentRouteLinks.list} />
                </div>
              )
            }
          </CardHeader>
          <CardBody>
            {department && <WrappedDepartmentForm department={department} handleSubmit={this.handleSubmit} />}
            {!department && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


DepartmentUpdatePage.defaultProps = {
  loading: false,
  updateDepartment: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
};

DepartmentUpdatePage.propTypes = {
  loading: PropTypes.bool,
  updateDepartment: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  loading: state.departmentReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateDepartment: (id, param) => dispatch(
    departmentActions.updateDepartment(id, param),
  ),
  clearStore: () => dispatch(
    departmentActions.clearDepartmentStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});
const WrappedDepartmentForm = Form.create({ name: 'department_update' })(DepartmentForm);
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentUpdatePage);
