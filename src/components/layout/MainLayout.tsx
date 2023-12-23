"use client";
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Box, Button, useMediaQuery } from "@mui/material";
import type { MenuProps } from "antd";
import { Layout, Menu, Spin, theme } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ButtonCustom } from "../buttons";
import Link from "next/link";

const { Header, Footer, Sider } = Layout;

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!loading ? (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            width="300"
            collapsedWidth="100"
            breakpoint="md"
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="text-center text-2xl text-zinc p-5">
              <Link href="/">Basic UI</Link>
            </div>
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
                <ButtonCustom
                  variant="outlined"
                  color="error"
                  startIcon={<AttachMoneyIcon />}
                  onClick={() => {
                    router.push("/priceList");
                  }}
                >
                  Bảng giá
                </ButtonCustom>
                <ButtonCustom
                  variant="outlined"
                  color="primary"
                  startIcon={<LoginIcon />}
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Đăng nhập
                </ButtonCustom>
                <ButtonCustom
                  variant="outlined"
                  color="secondary"
                  startIcon={<PersonAddAltIcon />}
                  onClick={() => {
                    router.push("/sign-up");
                  }}
                >
                  Đăng ký
                </ButtonCustom>
              </Box>
            </Header>
            {children}
            <Footer
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "fixed",
                bottom: 0,
                width: "100%",
                height: 0,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              Xeno ©2023
            </Footer>
          </Layout>
        </Layout>
      ) : (
        <Spin
          tip="Vui lòng đợi trong giây lát"
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 10,
            marginTop: "20%",
          }}
        >
          <div className="content" />
        </Spin>
      )}
    </>
  );
}
