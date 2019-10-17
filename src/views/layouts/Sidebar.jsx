/* eslint-disable max-len,react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Layout, Menu, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import { menuRoutes } from '../../routes';

const {
  Sider,
} = Layout;

// const { SubMenu } = Menu;
class Sidebar extends Component {
  render() {
    const {
      collapsed, shouldMenuHighlight, logout, onCollapse,
    } = this.props;
    return (
      <Sider
        breakpoint="sm"
        /*trigger={null}*/
        /*collapsedWidth="0"*/
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme="light"
        // ! Style only for fixed collapsible SideBar
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          // ! HedaerBar not fixed -> comment out top
          // top: 0,
          // ! for fixed Header
          marginTop: 64,
          left: 0,
        }}
      >
        <div className="logo" />
        {/* values in the selectedKeys will be highlighted */}
        <Menu selectedKeys={[shouldMenuHighlight()]} theme="light" mode="inline">
          {
            menuRoutes.map((route) => route.visibleInSidebar && (
              <Menu.Item key={route.path}>
                <Icon type={route.icon} />
                <span>{route.title}</span>
                <Link to={route.path} />
              </Menu.Item>
            ))
          }
          <Menu.Divider />
          <Menu.Item key="/logout" onClick={logout}>
            <Icon type="logout" />
            <span>Log Out</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  shouldMenuHighlight: PropTypes.func,
  logout: PropTypes.func,
  onCollapse: PropTypes.func,
};

Sidebar.defaultProps = {
  collapsed: true,
  shouldMenuHighlight: () => {},
  logout: () => {},
  onCollapse: () => {},
};

export default Sidebar;
