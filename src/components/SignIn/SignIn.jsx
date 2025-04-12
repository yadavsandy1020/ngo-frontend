// src/components/SignIn/SignIn.jsx
import React from "react";
import { Layout, Row, Col, Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Handle sign-in logic here
    message.success("Signed in successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Sign in failed, please try again!");
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Sign In
            </h1>
            <Form
              name="sign_in"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "16px",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "16px",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>
              <Form.Item>
                <Link
                  to="/signup"
                  style={{
                    color: "#1890ff",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Sign up
                </Link>
              </Form.Item>
              <Form.Item>
                <Link
                  to="/forgot-password"
                  style={{
                    color: "#1890ff",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Forgot password
                </Link>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignIn;

