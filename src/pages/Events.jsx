import { Layout, Row, Col, List, Card, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const Events = () => {
  const events = [
    {
      title: "Event 1",
      date: "2025-01-01",
      description: "This is the first event",
    },
    {
      title: "Event 2",
      date: "2025-01-15",
      description: "This is the second event",
    },
    {
      title: "Event 3",
      date: "2025-02-01",
      description: "This is the third event",
    },
  ];

  return (
    <Layout>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <h1 style={{ textAlign: "center" }}>Upcoming Events</h1>
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={events}
            renderItem={(event) => (
              <List.Item>
                <Card
                  title={event.title}
                  extra={<Button type="primary">Learn More</Button>}
                >
                  <p>
                    <CalendarOutlined /> {event.date}
                  </p>
                  <p>{event.description}</p>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Events;
