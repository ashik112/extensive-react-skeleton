/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Layout, Menu, Icon,
} from 'antd';
import PropTypes from 'prop-types';

const {
  Sider,
} = Layout;

// const { SubMenu } = Menu;
class Sidebar extends Component {
  render() {
    const { collapsed, shouldMenuHighlight, logout } = this.props;
    return (
      <Sider
        breakpoint="sm"
        trigger={null}
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        theme="light"
      >
        <div className="logo" />
        {/* values in the selectedKeys will be highlighted */}
        <Menu selectedKeys={[shouldMenuHighlight()]} theme="light" mode="inline">
          <Menu.Item key="/dashboard">
            <Icon type="home" />
            <span>Dashboard</span>
            <Link to="/dashboard" />
          </Menu.Item>
          <Menu.Item key="/404">
            <Icon type="home" />
            <span>404</span>
            <Link to="/404" />
          </Menu.Item>
          <Menu.Item key="/logout" onClick={logout}>
            <Icon type="logout" />
            <span>Logout</span>
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
};

Sidebar.defaultProps = {
  collapsed: true,
  shouldMenuHighlight: () => {},
  logout: () => {},
};

export default Sidebar;
