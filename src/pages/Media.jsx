import { Layout, Row, Col, Image } from "antd";

const Media = () => {
  const images = [
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyDS.png",
      alt: "Image 1",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyDS.png",
      alt: "Image 2",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyDS.png",
      alt: "Image 3",
    },
  ];

  return (
    <Layout>
      <Row gutter={[16, 16]}>
        {images.map((image, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Image src={image.src} alt={image.alt} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Media;
