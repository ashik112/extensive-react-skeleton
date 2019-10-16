import React, { Component } from 'react';
import {
  Card, Form, Icon, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CardHeaderTitle from '../../../../views/atoms/CardHeaderTitle';
import CompanyForm from '../templates/CompanyForm';
import companyActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';

class CompanyCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
    console.log('WIll unmount');
    clearNotifications();
  }

  handleSubmit = async (values) => {
    const { createCompany } = this.props;
    await createCompany(values);
  };

  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={loading}>
        <Card
          className="card-header-primary"
          size="small"
          title={<CardHeaderTitle title="Create Company"><Icon type="plus-square" /></CardHeaderTitle>}
        >
          <WrappedCompanyForm handleSubmit={this.handleSubmit} />
        </Card>
      </Spin>
    );
  }
}

CompanyCreatePage.defaultProps = {
  loading: false,
  createCompany: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
};

CompanyCreatePage.propTypes = {
  loading: PropTypes.bool,
  createCompany: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.companyReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  createCompany: (param) => dispatch(
    companyActions.createCompany(param),
  ),
  clearStore: () => dispatch(
    companyActions.clearStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});

const WrappedCompanyForm = Form.create({ name: 'company_create' })(CompanyForm);
export default connect(mapStateToProps, mapDispatchToProps)(CompanyCreatePage);
