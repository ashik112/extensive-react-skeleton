/* eslint-disable max-len,react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Layout, Menu, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import menuRoutes from '../../routes/menuRoutes';
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
        tabIndex={-1}
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
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.05)',
          // ! HedaerBar not fixed -> comment out top
          // top: 0,
          // ! for fixed Header
          marginTop: 64,
          left: 0,
        }}
      >
        {/* values in the selectedKeys will be highlighted */}
        <Menu
          tabIndex={-1}
          selectedKeys={[shouldMenuHighlight()]}
          theme="light"
          mode="inline"
          style={{
            height: '100%',
            // background: 'linear-gradient(0deg,rgba(255,0,150,0.3),rgba(255,0,150,0.3)),url(http://lorempixel.com/800/600/nature/2)',
            // backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundBlendMode: 'multiply',
          }}
        >
          <Menu.Divider
            style={{
              opacity: 0,
            }}
          />
          {
            menuRoutes.map((route) => route.visibleInSidebar && (
              <Menu.Item
                key={route.path}
                tabIndex={-1}
              >
                <Icon type={route.icon} />
                <span>{route.title}</span>
                <Link
                  tabIndex={-1}
                  to={route.path}
                />
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
