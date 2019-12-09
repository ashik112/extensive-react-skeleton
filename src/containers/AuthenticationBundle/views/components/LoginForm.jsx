/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';
import './LoginForm.scss';

class LoginForm extends React.Component {
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
    // eslint-disable-next-line no-unused-vars
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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
          <Button loading={false} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

// Form must be created and exported in case of Form is used
export default Form.create({ name: 'login' })(LoginForm);
