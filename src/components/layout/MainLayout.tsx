"use client";
import { LogoutOutlined, Person2Outlined } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Layout, Spin, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonCustom } from "..";
import MenuList from "../MenuList";
import MenuListFake from "../MenuListUnLogin";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const { Header, Footer, Sider } = Layout;

type LayoutProps = {
  children: any;
  loginAuth?: boolean;
};

export default function MainLayout({
  children,
  loginAuth = true,
}: LayoutProps) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width: 767px)");
  const [loading, setLoading] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
              {loginAuth ? (
                <Link
                  href="/after-login"
                  style={{ fontSize: isMediumScreen ? "14px" : "18px" }}
                >
                  Buff Like 24/7
                </Link>
              ) : (
                <Link
                  href="/"
                  style={{ fontSize: isMediumScreen ? "14px" : "18px" }}
                >
                  Buff Like 24/7
                </Link>
              )}
            </div>
            {loginAuth ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignContent: "center",
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    <Link href="/user">Hi, Nhân</Link>
                  </Typography>
                  <Box>
                    <Typography variant="caption">Thành viên cấp 10</Typography>
                    {" - "}
                    <Typography variant="caption">Số dư: 999.999đ</Typography>
                  </Box>
                </Box>
                <MenuList />
              </>
            ) : (
              <MenuListFake />
            )}
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                backgroundColor: "#e8e8e8",
              }}
            >
              {!loginAuth ? (
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
                      router.push("/price-unlogin");
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
              ) : (
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
                    color="primary"
                    startIcon={<Person2Outlined />}
                    onClick={() => {
                      router.push("/user");
                    }}
                  >
                    Thông tin
                  </ButtonCustom>
                  <ButtonCustom
                    variant="outlined"
                    color="error"
                    startIcon={<AttachMoneyIcon />}
                    onClick={() => {
                      router.push("/price-list");
                    }}
                  >
                    Bảng giá
                  </ButtonCustom>
                  <ButtonCustom
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountBalanceIcon />}
                    onClick={() => {
                      router.push("/cash-in");
                    }}
                  >
                    Nạp tiền
                  </ButtonCustom>
                  <ButtonCustom
                    variant="outlined"
                    color="success"
                    startIcon={<LogoutOutlined />}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Đăng xuất
                  </ButtonCustom>
                </Box>
              )}
            </Header>
            <Box sx={{ marginBottom: "5%" }}>{children}</Box>
            <Footer
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                bottom: 0,
                width: "100%",
                height: 0,
                backgroundColor: "#e8e8e8",
                textAlign: "center",
              }}
            >
              <Typography variant="caption" className="text-black text-xs">
                Hệ thống hoạt động 24/7. NV hỗ trợ 09-18h từ T2-T7
              </Typography>
              <Typography variant="caption" className="text-black text-xs	">
                BuffLike24/7.vn |{" "}
                <Link href={"/cash-in/rules"}>Điều khoản & Quy định</Link> |
                Chính sách bảo mật |{" "}
                <Link href={"https://www.facebook.com/thanhnhan28101"}>
                  Liên hệ
                </Link>
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
