"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Slider, theme } from "antd";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useRouter } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dịch vụ facebook", "1", <PieChartOutlined />, [
    getItem("Tăng like bài viết", "1"),
    getItem("Tăng share bài viết", "2"),
    getItem("Tăng cmt bài viết", "3"),
    getItem("Tăng like cho bình luận", "4"),
  ]),
  getItem("Tiktok", "5", <UserOutlined />, [
    getItem("Tăng like, tim Tiktok", "6"),
    getItem("Tăng view Tiktok", "7"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, []),
  getItem("Files", "9", <FileOutlined />),
];

export default function MainLayout({ children }: any) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        width="300"
        collapsedWidth="100"
        breakpoint="md"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="text-center text-2xl text-zinc p-5">BASIC UI</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Box
            style={{
              padding: 15,
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              startIcon={<AttachMoneyIcon />}
              onClick={() => {
                router.push("/priceList");
              }}
            >
              Bảng giá
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<LoginIcon />}
              onClick={() => {
                router.push("/login");
              }}
            >
              Đăng nhạp
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<PersonAddAltIcon />}
              onClick={() => {
                router.push("/signup");
              }}
            >
              Đăng ký
            </Button>
          </Box>
        </Header>
        {children}
        <Footer
          style={{
            position: "absolute",
            bottom: 0,
            width: "89%",
            height: "auto",
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            lineHeight: "100%",
          }}
        >
          Web ao ©2023 Created by Xeno
        </Footer>
      </Layout>
    </Layout>
  );
}
