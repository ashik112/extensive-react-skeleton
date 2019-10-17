/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Icon, Layout, Dropdown, Menu,
} from 'antd';
import PropTypes from 'prop-types';

const {
  Header,
} = Layout;

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.userLogOut = this.userLogOut.bind(this);
    this.getMenu = this.getMenu.bind(this);
  }

  userLogOut = async () => {
    const { logout } = this.props;
    await logout();
  };

  getMenu = () => (
    <Menu
      theme="light"
    >
      <Menu.Item key="0" onClick={this.userLogOut}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <Icon type="logout" /> Log Out
      </Menu.Item>
    </Menu>
  );

  render() {
    const { collapsed, toggleSidebar } = this.props;
    return (
      <div>
        <Header
          style={{
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
            width: '100%',
            background: '#fff',
            padding: 0,
            paddingLeft: 16,
            // ! only for Fixed Header
            position: 'fixed',
          }}
        >
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            style={{ cursor: 'pointer' }}
            onClick={toggleSidebar}
          />
          <div style={{ float: 'right', verticalAlign: 'bottom', marginRight: '10px' }}>
            {/*<Typography.Text style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
              {companyName}
            </Typography.Text>*/}
            <Dropdown overlay={this.getMenu()}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */}
              <a className="ant-dropdown-link" href="#"> User <Icon style={{ bottom: '3px', position: 'relative' }} type="down" /> </a>
            </Dropdown>
          </div>
        </Header>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  collapsed: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  logout: PropTypes.func,
};

HeaderBar.defaultProps = {
  collapsed: true,
  toggleSidebar: () => {},
  logout: () => {},
};

export default HeaderBar;
