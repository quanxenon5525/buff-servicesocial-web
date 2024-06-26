"use client";
import React from "react";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsProps } from "antd";
import Link from "next/link";
import { CreateOrderFB } from "./CreateOrderFB";
import { InstructionBox } from "@/components/InstructionBox";
import { HistoryOrderFB } from "./HistoryOrderFB";

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Tạo đơn hàng",
    children: <CreateOrderFB />,
  },
  {
    key: "2",
    label: "Lịch sử đơn hàng",
    children: <HistoryOrderFB />,
  },
];
export default function FacebookPage() {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <MainLayout>
        <Dashboard
          breadcrumb
          items={[
            { title: <Link href="/">Trang chủ</Link> },
            { title: "Tăng like bài viết" },
          ]}
        >
          <Tabs
            className="ml-5"
            type="card"
            defaultActiveKey="1"
            items={tabs}
            onChange={onChange}
          />
          <InstructionBox />
        </Dashboard>
      </MainLayout>
    </>
  );
}
