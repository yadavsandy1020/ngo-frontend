import { Layout, Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Volunteers = () => {
  return (
    <Layout>
      <Row justify="center">
        <Col xs={24} sm={12} md={8}>
          <Title level={2}>Volunteer With Us</Title>
          <Paragraph>
            We are always looking for dedicated volunteers to help us make a
            difference in the community.
          </Paragraph>
          <Button type="primary">
            <Link to="/volunteers/signup">Sign Up</Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Volunteers;
