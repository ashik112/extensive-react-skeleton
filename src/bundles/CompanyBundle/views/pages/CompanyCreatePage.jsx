import React, { Component } from 'react';
import {Card, Form, Icon} from 'antd';
import CardHeaderTitle from '../../../../views/atoms/CardHeaderTitle';
import CompanyForm from '../templates/CompanyForm';
import {connect} from 'react-redux';
import companyActions from '../../redux/actions';

class CompanyCreatePage extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <Card
        className="card-header-primary"
        size="small"
        title={<CardHeaderTitle title="Create Company"><Icon type="plus-square" /></CardHeaderTitle>}
      >
        <WrappedCompanyForm />
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.companyReducer.list,
  loading: state.companyReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(
    companyActions.fetchCompanyList(),
  ),
});

const WrappedCompanyForm = Form.create({ name: 'company_create' })(CompanyForm);
export default connect(mapStateToProps, mapDispatchToProps)(CompanyCreatePage);
