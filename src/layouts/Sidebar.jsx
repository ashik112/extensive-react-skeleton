/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import {
  Layout, Menu, Icon, Typography,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { menuRoutes, historyRoutes } from '../routes';
import PrivateRoute from '../routes/PrivateRoute';
import NotFound from '../pages/NotFound';
//import userActions from '../redux/actions/userActions';

const {
  Header, Content, Sider, Footer,
} = Layout;

// const { SubMenu } = Menu;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
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
    const { companyReducer } = this.props;
    //    let companyID = null;
    //    let companyName = '';
    try {
      //      companyID = companyReducer.company.id;
      //      companyName = companyReducer.company.name;
    } catch (e) {
      console.log(e);
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint="sm"
          trigger={null}
          collapsedWidth="0"
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          {/* values in the selectedKeys will be highlighted */}
          <Menu selectedKeys={[this.shouldMenuHighlight()]} theme="dark" mode="inline">
            <Menu.Item key="/dashboard">
              <Icon type="home" />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>
            {
              /*companyID*/ false && (
                <Menu.Item key="/flock">
                  <Icon type="twitter" />
                  <span>Flock</span>
                  <Link to="/flock" />
                </Menu.Item>
      )
            }
            <Menu.Item key="/logout" onClick={this.logout}>
              <Icon type="logout" />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              style={{ cursor: 'pointer' }}
              onClick={this.toggle}
            />
            <span style={{ float: 'right', verticalAlign: 'middle' }}>
              <Typography.Text style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
                {/*{companyName}*/}
                &nbsp;
              </Typography.Text>
            </span>
          </Header>
          <Content style={{
            margin: 5, padding: 5, background: 'transparent', minHeight: 280,
          }}
          >
            <Switch>
              {menuRoutes.map((route) => ((route.path === historyRoutes.dashboard)) && (
                <PrivateRoute
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  company={companyReducer.company}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Farm Management ©2020 Created by Eon InfoSys Technology
          </Footer>
        </Layout>

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  userLogOut: () => dispatch(
    // userActions.logout(),
    () => {},
  ),
});

Sidebar.propTypes = {
  userLogOut: PropTypes.func.isRequired,
  companyReducer: PropTypes.shape(),
  location: PropTypes.shape().isRequired,
};

Sidebar.defaultProps = {
  companyReducer: {
    data: {
      company: {
        name: '',
      },
    },
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
