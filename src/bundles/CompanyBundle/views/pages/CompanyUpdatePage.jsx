import React, { Component } from 'react';
import {
  Form, Spin, Empty, Divider,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyForm from '../templates/CompanyForm';
import companyActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import companyApiService, { companyApiRoutes } from '../../apiServices/companyApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';
import ButtonBack from '../../../../views/atoms/ButtonBack';
import CardButtonView from '../../../../views/atoms/CardButtonView';


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
        <Card>
          <CardHeader>
            <ButtonBack title="Company List" route={companyRouteLinks.list} />
            {
              company && company.id && (
                <div style={{ float: 'right' }}>
                  <CardButtonView route={companyRouteLinks.show(company.id)} />
                  <Divider type="vertical" />
                  <CardButtonDelete url={`${serverURL}${companyApiRoutes.companyDelete(company.id)}`} route={companyRouteLinks.list} />
                </div>
              )
            }
          </CardHeader>
          <CardBody>
            {company && company.id && <WrappedCompanyForm company={company} handleSubmit={this.handleSubmit} />}
            {!company && <Empty />}
          </CardBody>
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
