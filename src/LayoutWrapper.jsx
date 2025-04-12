// src/LayoutWrapper.jsx
import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  PictureOutlined,
  MailOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const LayoutWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.state?.role === "admin";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={({ key }) => navigate(key)}
          items={[
            { key: "/", icon: <HomeOutlined />, label: "Home" },
            ...(isAdmin
              ? [
                  {
                    key: "/volunteers",
                    icon: <UserOutlined />,
                    label: "Volunteers",
                  },
                ]
              : []),
            { key: "/events", icon: <CalendarOutlined />, label: "Events" },

            { key: "/donate", icon: <LoginOutlined />, label: "Donate" },
            { key: "/media", icon: <PictureOutlined />, label: "Media" },
            { key: "/contact", icon: <MailOutlined />, label: "Contact" },
            { key: "/signin", icon: <LoginOutlined />, label: "Sign In" },
          ]}
        />
      </Header>

      <Content style={{ padding: "24px", background: "#fff" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>NGO Portal ©2025</Footer>
    </Layout>
  );
};

export default LayoutWrapper;
