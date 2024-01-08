import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Rules() {
  return (
    <MainLayout>
      <Dashboard
        breadcrumb
        items={[
          { title: <Link href="/after-login">Trang chủ</Link> },
          { title: <Link href="/cash-in">Nạp tiền</Link> },
          { title: "Quy định chung" },
        ]}
      >
        <Box>Chua co gi</Box>
      </Dashboard>
    </MainLayout>
  );
}
