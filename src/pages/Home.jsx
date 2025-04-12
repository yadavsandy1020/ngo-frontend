import React from "react";
import { Layout, Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header style={{ background: "#fff", textAlign: "center", padding: 0 }}>
        <Title level={2}>Welcome to Our NGO</Title>
      </Header>

      <Content style={{ padding: "50px", background: "#f0f2f5" }}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <section style={{ padding: "50px 0", transition: "opacity 0.5s" }}>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={8}>
                <Title level={3}>Our Mission</Title>
                <Paragraph>
                  We strive to make the world a better place by helping those in need.
                </Paragraph>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Title level={3}>Our Vision</Title>
                <Paragraph>
                  A world where everyone has equal opportunities and resources.
                </Paragraph>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Title level={3}>Get Involved</Title>
                <Paragraph>Join us in making a difference in the community.</Paragraph>
                <Button type="primary" icon={<ArrowRightOutlined />}>
                  <Link to="/volunteers">Learn More</Link>
                </Button>
              </Col>
            </Row>
          </section>

          <section style={{ padding: "50px 0", transition: "opacity 0.5s" }}>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={8}>
                <Title level={3}>Upcoming Events</Title>
                <Paragraph>
                  Participate in our events and contribute to the cause.
                </Paragraph>
                <Button type="primary" icon={<ArrowRightOutlined />}>
                  <Link to="/events">View Events</Link>
                </Button>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Title level={3}>Gallery</Title>
                <Paragraph>
                  Check out photos from our recent events and activities.
                </Paragraph>
                <Button type="primary" icon={<ArrowRightOutlined />}>
                  <Link to="/media">View Gallery</Link>
                </Button>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Title level={3}>Contact Us</Title>
                <Paragraph>
                  We'd love to hear from you. Reach out for any queries.
                </Paragraph>
                <Button type="primary" icon={<ArrowRightOutlined />}>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </Col>
            </Row>
          </section>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        NGO Portal ©2025 Created by You
      </Footer>
    </Layout>
  );
};

export default Home;

