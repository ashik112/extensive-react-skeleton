import React, { Component } from 'react';
import {
  Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyForm from '../templates/CompanyForm';
import companyActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import ButtonBack from '../../../../views/atoms/ButtonBack';

class CompanyCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
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
        <Card>
          <CardHeader>
            <ButtonBack title="Company" route={companyRouteLinks.list} />
          </CardHeader>
          <CardBody>
            <WrappedCompanyForm company={{ name: '', address: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
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
