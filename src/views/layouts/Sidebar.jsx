/* eslint-disable max-len,react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Layout, Menu, Icon, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { historyRoutes, menuRoutes } from '../../routes';
import './layout.scss';

const {
  Sider,
} = Layout;
// const { SubMenu } = Menu;
class Sidebar extends Component {
  render() {
    const {
      collapsed, shouldMenuHighlight, onCollapse,
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
        {/* values in the selectedKeys will be highlighted */}
        <Menu
          selectedKeys={[shouldMenuHighlight()]}
          theme="light"
          mode="inline"
          style={{
            height: '100%',
          }}
        >
          <Menu.Item>
            <Icon
              type="desktop"
              style={{
                opacity: 0,
              }}
            />
            <span style={{ textAlign: 'center' }}>
              <Button type="primary" ghost>
                <Link to={historyRoutes.dashboard}>
                  &nbsp; &nbsp;BIZNET&nbsp; &nbsp;
                </Link>
              </Button>
            </span>
          </Menu.Item>
          <Menu.Divider
            style={{
              opacity: 0,
            }}
          />
          {
            menuRoutes.map((route) => route.visibleInSidebar && (
              <Menu.Item key={route.path}>
                <Icon type={route.icon} />
                <span>{route.title}</span>
                <Link to={route.path} />
              </Menu.Item>
            ))
          }
          <Menu.Divider
            style={{
              opacity: 0,
            }}
          />
          {/*<Menu.Item key="/logout" onClick={logout}>
            <Icon
              type="logout"
              style={{
                opacity: 0,
              }}
            />
            <span>
              <Button type="danger" ghost>
                &nbsp;&nbsp;&nbsp;Log Out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </span>
          </Menu.Item>*/}
        </Menu>
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  shouldMenuHighlight: PropTypes.func,
  //  logout: PropTypes.func,
  onCollapse: PropTypes.func,
};

Sidebar.defaultProps = {
  collapsed: true,
  shouldMenuHighlight: () => {},
  //  logout: () => {},
  onCollapse: () => {},
};

export default Sidebar;
