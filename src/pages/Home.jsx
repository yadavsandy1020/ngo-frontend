import React from "react";
import { Typography, Button, Row, Col, Card, Image } from "antd";
import { motion } from "framer-motion";
import {
  SmileOutlined,
  HeartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <SmileOutlined style={{ fontSize: 40, color: "#52c41a" }} />,
    title: "Empowering Children",
    description:
      "We work to provide education, healthcare, and nutrition to underprivileged children.",
  },
  {
    icon: <HeartOutlined style={{ fontSize: 40, color: "#eb2f96" }} />,
    title: "Healthcare For All",
    description:
      "Our campaigns aim to make healthcare accessible to all through camps and awareness.",
  },
  {
    icon: <GlobalOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
    title: "Sustainable Development",
    description:
      "We support livelihoods, environment protection, and women empowerment across India.",
  },
];

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(to right, #e0f7fa, #fff)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title>Welcome to Our NGO</Title>
          <Paragraph style={{ maxWidth: 600, margin: "auto" }}>
            Together we can create a better world through education, healthcare,
            and sustainable growth for all.
          </Paragraph>
          <Button type="primary" size="large" style={{ marginTop: 20 }}>
            Join Us
          </Button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div style={{ padding: "60px 20px" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
          What We Do
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {features.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  hoverable
                  bordered={false}
                  style={{ textAlign: "center", minHeight: 250 }}
                >
                  {item.icon}
                  <Title level={4} style={{ marginTop: 16 }}>
                    {item.title}
                  </Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Impact Section */}
      <div
        style={{
          background: "#f6ffed",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Title level={2}>Our Impact</Title>
          <Paragraph>
            Over <b>1 million lives</b> impacted through our programs. Join us
            in making the world a better place.
          </Paragraph>
          <Image
            src="https://www.smilefoundationindia.org/wp-content/uploads/2022/11/impact-banner.jpg"
            alt="Our Impact"
            preview={false}
            style={{ borderRadius: "10px", marginTop: 30 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
