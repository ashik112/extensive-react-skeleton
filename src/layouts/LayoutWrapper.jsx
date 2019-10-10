/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import {
  Layout,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { menuRoutes, historyRoutes } from '../routes';
import AuthenticatedRouting from '../routes/AuthenticatedRouting';
import NotFound from '../pages/NotFound';
import authActions from '../bundles/AuthenticationBundle/redux/actions';
import HeaderBar from './HeaderBar';
import Sidebar from './Sidebar';

const {
  Content,
} = Layout;

// const { SubMenu } = Menu;

class LayoutWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.shouldMenuHighlight = this.shouldMenuHighlight.bind(this);
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  logout = () => {
    const { userLogOut } = this.props;
    userLogOut();
  };

  shouldMenuHighlight = () => {
    const { location } = this.props;
    const fullPathName = location.pathname;
    const splitpaths = fullPathName.split('/');
    return `/${splitpaths[1]}`; // [1] has the base menu name
  };

  render() {
    const { collapsed } = this.state;
    const { companyReducer, authReducer } = this.props;
    const { loggedIn } = authReducer;
    // let companyID = null;
    // let companyName = '';
    try {
      // companyID = companyReducer.company.id;
      // companyName = companyReducer.company.name;
    } catch (e) {
      // console.log(e);
    }
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          { loggedIn && <Sidebar collapsed={collapsed} logout={this.logout} shouldMenuHighlight={this.shouldMenuHighlight} /> }
          <Layout>
            { loggedIn && <HeaderBar toggleLayoutWrapper={this.toggle} collapsed={collapsed} /> }
            <Content style={{
              margin: 5, padding: 5, background: '#f1f4f6', minHeight: 280,
            }}
            >
              <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
              >
                {menuRoutes.map((route) => (
                  <AuthenticatedRouting
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    company={companyReducer.company}
                    authenticated={loggedIn}
                  />
                ))}
                {loggedIn && <Redirect from={historyRoutes.login} to={historyRoutes.dashboard} />}
                <Route component={NotFound} />
              </Switch>
            </Content>
            {/*<Footer style={{ textAlign: 'center' }}>
            Farm Management ©2020 Created by Eon InfoSys Technology
          </Footer>*/}
          </Layout>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  userLogOut: () => dispatch(
    authActions.logout(),
  ),
});

LayoutWrapper.propTypes = {
  userLogOut: PropTypes.func.isRequired,
  companyReducer: PropTypes.shape(),
  authReducer: PropTypes.shape(),
  location: PropTypes.shape().isRequired,
};

LayoutWrapper.defaultProps = {
  companyReducer: {
    data: {
      company: {
        name: '',
      },
    },
  },
  authReducer: {
    loggedIn: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper);
