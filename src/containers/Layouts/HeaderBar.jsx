/* eslint-disable react/prefer-stateless-function,react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Icon, Layout, Dropdown, Menu, Button,
} from 'antd';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import historyRoutes from '../../routes/historyRoutes';
import { applicationTitle } from '../../constants';

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
      <Menu.Item
        tabIndex={-1}
        key="0"
        onClick={this.userLogOut}
      >
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <Icon tabIndex={-1} type="logout" /> Log Out
      </Menu.Item>
    </Menu>
  );

  render() {
    const { collapsed, toggleSidebar } = this.props;
    return (
      <div>
        <Header
          style={{
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.05)',
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

          <Icon
            type="desktop"
            style={{
              opacity: 0,
            }}
          />
          <span style={{ textAlign: 'center' }}>
            <Button tabIndex={-1} type="primary" ghost>
              <Link
                tabIndex={-1}
                to={historyRoutes.dashboard}
              >
                &nbsp; &nbsp;{applicationTitle}&nbsp; &nbsp;
              </Link>
            </Button>
          </span>
          <div style={{ float: 'right', verticalAlign: 'bottom', marginRight: '10px' }}>
            {/*<Typography.Text style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
              {companyName}
            </Typography.Text>*/}
            <Dropdown overlay={this.getMenu()} trigger={['click', 'hover']}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */}
              <a tabIndex={-1} className="ant-dropdown-link"> User <Icon style={{ bottom: '3px', position: 'relative' }} type="down" /> </a>
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
  toggleSidebar: () => { },
  logout: () => { },
};

export default HeaderBar;
