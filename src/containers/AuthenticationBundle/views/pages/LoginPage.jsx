/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authActions from '../../redux/actions';
import LoginForm from '../components/LoginForm';
import LoginHeader from '../components/LoginHeader';
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // Bind functions
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (credentials) => {
    const { onLogIn } = this.props;
    onLogIn(credentials);
  };

  render() {
    const { loginReducer } = this.props;
    const { loading } = loginReducer;
    return (
      <div>
        <Row style={{ height: '100vh' }} type="flex" align="middle" justify="center">
          <Col xs={22} sm={8} md={12} lg={8} xl={6} xxl={4}>
            <LoginHeader />
            <LoginForm loading={loading} handleLogin={this.handleLogin} />
          </Col>
        </Row>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  onLogIn: () => { },
  loginReducer: {},
};

LoginPage.propTypes = {
  loginReducer: PropTypes.shape(),
  onLogIn: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { loginReducer } = state;
  return {
    loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLogIn: (credentials) => dispatch(
    authActions.login(
      credentials,
    ),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
