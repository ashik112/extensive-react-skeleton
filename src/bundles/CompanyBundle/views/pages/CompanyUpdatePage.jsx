import React, { Component } from 'react';
import {
  Form, Spin, Empty, Button, Divider,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CompanyForm from '../templates/CompanyForm';
import companyActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import companyApiService, {companyApiRoutes} from '../../apiServices/companyApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import {serverURL} from '../../../../constants';


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
            <Button
              type="primary"
              icon="arrow-left"
              onClick={async () => {
                history.push(companyRouteLinks.list);
              }}
            >
              <span>
                &nbsp;
                Company List
              </span>
            </Button>
            {
              company && company.id && (
                <div style={{ float: 'right' }}>
                  <Button
                    size="default"
                    type="primary"
                    className="button-color-daybreak"
                    icon="eye"
                    onClick={async () => {
                      try {
                        history.push(companyRouteLinks.show(company.id));
                      } catch (e) {
                        /* */
                      }
                    }}
                  />
                  <Divider type="vertical" />
                  <CardButtonDelete url={`${serverURL}${companyApiRoutes.companyDelete(company.id)}`} route={companyRouteLinks.list} />
                </div>
              )
            }
          </CardHeader>
          <CardBody>
            {company && <WrappedCompanyForm company={company} handleSubmit={this.handleSubmit} />}
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
const WrappedCompanyForm = Form.create({ name: 'company_create' })(CompanyForm);
export default connect(mapStateToProps, mapDispatchToProps)(CompanyUpdatePage);
