import React from "react";
import { Row, Col, Card, Form, Input, Button, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted: ", values);
    // You can integrate an API call or email service here
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        Contact Us
      </Title>

      {/* Map Embed */}
      <div style={{ marginBottom: 40 }}>
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=smile%20foundation%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info */}
      <Row gutter={[16, 16]} style={{ marginBottom: 40 }}>
        <Col xs={24} md={8}>
          <Card bordered={false} hoverable>
            <EnvironmentOutlined
              style={{ fontSize: "24px", color: "#1890ff" }}
            />
            <Title level={4}>Our Address</Title>
            <Paragraph>
              Smile Foundation, 161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai
              Community Centre, New Delhi – 110049, India
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} hoverable>
            <PhoneOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
            <Title level={4}>Phone</Title>
            <Paragraph>
              +91-11-43123700 <br />
              +91-11-43123701
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} hoverable>
            <MailOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
            <Title level={4}>Email</Title>
            <Paragraph>
              <a href="mailto:info@smilefoundationindia.org">
                info@smilefoundationindia.org
              </a>
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Contact Form */}
      <Card title="Send Us a Message" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="john@example.com" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input placeholder="+91 9876543210" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input placeholder="How can we help you?" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={4} placeholder="Write your message here..." />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
