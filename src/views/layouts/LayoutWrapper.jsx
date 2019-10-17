/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import {
  Layout,
} from 'antd';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { menuRoutes, historyRoutes } from '../../routes';
import AuthenticatedRouting from '../../routes/AuthenticatedRouting';
import NotFound from '../pages/NotFound';
import authActions from '../../bundles/AuthenticationBundle/redux/actions';
import HeaderBar from './HeaderBar';
import Sidebar from './Sidebar';
import './layout.scss';

const {
  Content,
} = Layout;

const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center',
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
};

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px',
};

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
};

styles.rgb = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
};
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
    this.onCollapse = this.onCollapse.bind(this);
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
    const { companyReducer, authReducer, location } = this.props;
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
          { loggedIn && <Sidebar onCollapse={this.onCollapse} collapsed={collapsed} logout={this.logout} shouldMenuHighlight={this.shouldMenuHighlight} /> }
          <Layout>
            { loggedIn && <HeaderBar toggleSidebar={this.toggle} collapsed={collapsed} /> }
            <Content style={{
              margin: 5, padding: 5, background: '#f1f4f6', minHeight: 280,
            }}
            >
              <TransitionGroup>
                {/*
                  This is no different than other usage of
                  <CSSTransition>, just make sure to pass
                  `location` to `Switch` so it can match
                  the old location as it animates out.
                */}
                <CSSTransition
                  key={location.pathname}
                  classNames="page"
                  timeout={{
                    enter: 500,
                    exit: 500,
                  }}
                >
                  <Switch
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    location={location}
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
                </CSSTransition>
              </TransitionGroup>
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
