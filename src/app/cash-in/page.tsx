"use client";
import BoxAvatar from "@/components/BoxAvatar";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import MethodCashin from "./MethodCashin";
import RuleCashin from "./RuleCashin";
import SupportCashin from "./SupportCashin";

export default function Cashin() {
  return (
    <MainLayout>
      <Dashboard
        breadcrumb
        items={[
          { title: <Link href="/after-login">Trang chủ</Link> },
          { title: "Nạp tiền" },
        ]}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <BoxAvatar
            name="Phạm Thành Nhân"
            level={10}
            balance="999.999"
            avatarUrl={
              "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/406045226_390198513670206_8047584056241224134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=3_XeT0_jK-wAX_-Ckt6&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdTj1MfxlB0bzpFzs0KzvZZ05LuNrU6zVAsGDvlHdKP7Pw&oe=65B5D719"
            }
          />
          <Box sx={{ width: "95%", color: "black" }}>
            <MethodCashin />
            <Typography
              variant="body2"
              sx={{ color: "black", marginTop: 5, marginBottom: 5 }}
            >
              Quy định chung về dịch vụ sử dụng đọc tại:{" "}
              <Link style={{ fontWeight: "bold" }} href="/cash-in/rules">
                QUY ĐỊNH BUFFLIKE 24/7
              </Link>
            </Typography>
            <SupportCashin />
            <RuleCashin />
          </Box>
        </div>
      </Dashboard>
    </MainLayout>
  );
}
