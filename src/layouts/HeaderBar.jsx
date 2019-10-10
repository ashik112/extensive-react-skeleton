/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {Icon, Layout, Typography} from 'antd';
import PropTypes from 'prop-types';

const {
  Header,
} = Layout;

class HeaderBar extends Component {
  render() {
    const { collapsed, toggleSidebar } = this.props;
    return (
      <div>
        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            style={{ cursor: 'pointer' }}
            onClick={toggleSidebar}
          />
          <span style={{ float: 'right', verticalAlign: 'middle' }}>
            <Typography.Text style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
              {/*{companyName}*/}
                      &nbsp;
            </Typography.Text>
          </span>
        </Header>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  collapsed: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

HeaderBar.defaultProps = {
  collapsed: true,
  toggleSidebar: () => {},
};

export default HeaderBar;
