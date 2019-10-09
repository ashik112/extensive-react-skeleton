/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Form, Icon, Input,
} from 'antd';
import { CircularProgress } from '@material-ui/core';
import Button from '../components/CustomButtons/Button';
//import './LoginForm.scss';

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, handleLogin } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        handleLogin(values);
      }
    });
  };

  render() {
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              size="large"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              size="large"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
            Forgot password
            </a> */}
          {/*<Button
            block
            type="primary"
            loading={loading}
            htmlType="submit"
            size="large"
          >
            Log in
          </Button>*/}
          {
            loading
              ? (
                <Button
                  disabled
                  htmltype="submit"
                  color="success"
                  fullWidth
                >
                  <CircularProgress color="inherit" size={14} />
                  &nbsp;Log In
                </Button>
              ) // Size 14 works pretty well
              : (
                <Button
                  onClick={this.handleSubmit}
                  color="success"
                  fullWidth
                >
                Log In
                </Button>
              )
          }
        </Form.Item>
      </Form>
    );
  }
}

// Form must be created and exported in case of Form is used
export default Form.create({ name: 'login' })(LoginForm);
