import React, { Component } from 'react';
import {
  Form, Spin, Empty, Card,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyForm from '../components/CompanyForm';
import companyActions from '../../redux/actions';
import notificationActions from '../../../../redux/notification/notificationActions';
import companyApiService from '../../apiServices/companyApiService';
import historyRoutes from '../../../../routes/historyRoutes';
import CardActionButtons from '../../../../shared/components/Card/CardActionButtons';
import { companyApiRoutes } from '../../../../routes/apiRoutes';


class CompanyUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch } = this.props;
      const { params } = match;
      if (params) {
        companyApiService.getCompany(params.id, dispatch).then((res) => {
          this.setState({
            company: res.data,
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
    const { updateCompany } = this.props;
    const { company } = this.state;
    updateCompany(company.id, params);
  };

  render() {
    const { loading } = this.props;
    const { company } = this.state;
    return (
      <Spin spinning={loading}>
        <Card
          extra={[
            <CardActionButtons
              title="Company"
              show
              remove
              linkRouteObject={historyRoutes.company}
              deleteApiRouteFunction={companyApiRoutes.remove}
              entity={company}
            />,
          ]}
        >
          {company && company.id && <WrappedCompanyForm company={company} handleSubmit={this.handleSubmit} />}
          {!company && <Empty />}
        </Card>
      </Spin>
    );
  }
}


CompanyUpdatePage.defaultProps = {
  loading: false,
  updateCompany: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
};

CompanyUpdatePage.propTypes = {
  loading: PropTypes.bool,
  updateCompany: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  loading: state.companyReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateCompany: (id, param) => dispatch(
    companyActions.updateCompany(id, param),
  ),
  clearStore: () => dispatch(
    companyActions.clearStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});
const WrappedCompanyForm = Form.create({ name: 'company_update' })(CompanyForm);
export default connect(mapStateToProps, mapDispatchToProps)(CompanyUpdatePage);
