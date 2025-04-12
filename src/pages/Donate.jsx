import React, { useState } from "react";
import {
  Typography,
  Card,
  Button,
  Radio,
  Form,
  Input,
  Row,
  Col,
  message,
} from "antd";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const { Title, Paragraph } = Typography;

const Donate = () => {
  const [form] = Form.useForm();
  const [showQR, setShowQR] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);

  const onFinish = (values) => {
    const amount =
      values.amount === "custom" ? values.customAmount : values.amount;
    const upiUrl = `upi://pay?pa=smilefoundation@upi&pn=Smile%20Foundation&tr=Donate%20for%20Education&tn=Donation%20for%20${values.name}%20(${values.mobile})&am=${amount}&cu=INR`;

    setDonationDetails({
      ...values,
      amount,
      upiUrl,
    });

    message.success("Thank you for your contribution!");
    window.open(upiUrl, "_blank");
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: "60px 20px" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: 50 }}
      >
        <Title>Support Our Cause</Title>
        <Paragraph style={{ maxWidth: 600, margin: "auto" }}>
          Your generosity fuels education, nourishment, and hope for
          underprivileged children. Help us make a change today.
        </Paragraph>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card
          bordered={false}
          style={{ borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        >
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            initialValues={{ amount: 1000 }}
          >
            <Form.Item label="Select Amount" name="amount">
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={500}>₹500</Radio.Button>
                <Radio.Button value={1000}>₹1000</Radio.Button>
                <Radio.Button value={2500}>₹2500</Radio.Button>
                <Radio.Button value={5000}>₹5000</Radio.Button>
                <Radio.Button value="custom">Other</Radio.Button>
              </Radio.Group>
            </Form.Item>

            {form.getFieldValue("amount") === "custom" && (
              <Form.Item
                name="customAmount"
                rules={[
                  { required: true, message: "Please enter an amount" },
                  {
                    pattern: /^[1-9]\d*$/,
                    message: "Enter a valid positive amount",
                  },
                ]}
              >
                <Input prefix="₹" placeholder="Custom amount" type="number" />
              </Form.Item>
            )}

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Mobile Number"
                  name="mobile"
                  rules={[
                    { required: true, message: "Please enter your mobile number" },
                    { pattern: /^\d{10}$/, message: "Invalid mobile number" },
                  ]}
                >
                  <Input placeholder="1234567890" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Email (optional)"
              name="email"
              rules={[{ type: "email", message: "Invalid email" }]}
            >
              <Input placeholder="john@example.com" />
            </Form.Item>

            <Form.Item label="Message (optional)" name="message">
              <Input.TextArea
                placeholder="Any message or dedication?"
                autoSize
              />
            </Form.Item>

            <Form.Item>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Button type="primary" htmlType="submit" size="large" block>
                    Donate Now
                  </Button>
                </Col>
                <Col xs={24} md={12}>
                  <Button
                    type="default"
                    size="large"
                    block
                    onClick={() => setShowQR(true)}
                    disabled={!donationDetails}
                  >
                    Show QR Code
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </motion.div>

      {showQR && donationDetails && (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Title level={4}>Scan to Donate</Title>
          <QRCode value={donationDetails.upiUrl} size={200} />
        </div>
      )}
    </div>
  );
};

export default Donate;

