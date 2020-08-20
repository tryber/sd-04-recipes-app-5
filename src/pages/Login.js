import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../Style/Login.css';
import useLogin from '../hooks/useLogin';
import appReceitas from '../images/appReceitas.svg';

const sendLocalStorage = (email) => {
  localStorage.setItem('mealsToken', JSON.stringify(1)); // alterar para os dados
  localStorage.setItem('cocktailsToken', JSON.stringify(1)); // alterar para os dados
  localStorage.setItem('user', JSON.stringify({ email }));
};

export default function Login() {
  const { email, setEmail, password, setPassword, isDisable, isLogged, setIsLogged } = useLogin();

  if (isLogged) return <Redirect to="/comidas" />;

  return (
    <div className="login-wrapper">
      <img src={appReceitas} alt="logo" />
      <Row>
        <Col span={24}>
          <Form>
            <Form.Item>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="email-input"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-testid="password-input" placeholder="Password"
              />
            </Form.Item>
            <Col span={24}>
              <Button
                block
                type="primary"
                htmlType="submit"
                disabled={isDisable}
                data-testid="login-submit-btn"
                onClick={() => {
                  sendLocalStorage(email);
                  setIsLogged(true);
                }}
              >
                Login
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
