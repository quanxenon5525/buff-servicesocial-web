"use client";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Avatar } from "antd";
import BoxAvatar from "@/components/BoxAvatar";

export default function UserInformation() {
  return (
    <>
      <MainLayout>
        <Dashboard
          breadcrumb
          items={[
            { title: <Link href="/">Trang chủ</Link> },
            { title: "Thông tin tài khoản" },
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
          </div>
        </Dashboard>
      </MainLayout>
      ;
    </>
  );
}
