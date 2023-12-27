import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import React from "react";

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
          hehe
        </Dashboard>
      </MainLayout>
      ;
    </>
  );
}
