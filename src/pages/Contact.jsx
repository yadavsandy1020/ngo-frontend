import { Layout, Row, Col, Form, Input, Button, message } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    message.success("Thanks for reaching out!");
    form.resetFields();
  };

  return (
    <Layout>
      <Row justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <h1 style={{ textAlign: "center" }}>Contact Me</h1>
          <Form
            form={form}
            name="contact"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please input your message!" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<MailOutlined />}>
                Send
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
