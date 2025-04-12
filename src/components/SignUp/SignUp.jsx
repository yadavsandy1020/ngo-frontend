import React, { useState } from "react";
import { Layout, Row, Col, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    // Handle sign-up logic here
    form.resetFields();
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <Form
            form={form}
            name="sign_up"
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder="Email"
                style={{ width: "100%" }}
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
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/signin">Already have an account?</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignUp;
