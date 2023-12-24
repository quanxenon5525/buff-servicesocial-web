"use client";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Box, Typography } from "@mui/material";
import { Layout, Spin, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonCustom, MenuList } from "..";

const { Header, Footer, Sider } = Layout;

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
        await new Promise((resolve) => setTimeout(resolve, 1));
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
            <MenuList />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                backgroundColor: "#e8e8e8",
              }}
            >
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
            <Box sx={{ marginBottom: "5%" }}>{children}</Box>
            <Footer
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "fixed",
                bottom: 0,
                width: "100%",
                height: 0,
                backgroundColor: "#e8e8e8",
                textAlign: "center",
              }}
            >
              <Typography variant="caption" className="text-black">
                Hệ thống hoạt động 24/7. NV hỗ trợ 09-18h từ T2-T7 Dev by{" "}
                <Typography
                  variant="caption"
                  className="text-black"
                  fontWeight="bold"
                >
                  Xeno
                </Typography>
              </Typography>
              <Typography variant="caption" className="text-black">
                BuffAcc.vn | Điều khoản & Quy định | Chính sách bảo mật | Liên
                hệ
              </Typography>
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
