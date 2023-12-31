"use client";
import BoxAvatar from "@/components/BoxAvatar";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsProps } from "antd";
import Link from "next/link";
import Information from "./Information";
import Orders from "./Orders";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Thông tin",
    children: <Information />,
  },
  {
    key: "2",
    label: "Đơn hàng",
    children: <Orders />,
  },
  {
    key: "3",
    label: "Lịch sử giao dịch",
    children: "Content of Tab Pane 3",
  },
];

export default function UserInformation() {
  const onChangeTabs = (key: string) => {
    console.log(key);
  };

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
          <Tabs
            style={{ marginLeft: "3%" }}
            defaultActiveKey="1"
            items={items}
            onChange={onChangeTabs}
          />
          ;
        </Dashboard>
      </MainLayout>
      ;
    </>
  );
}
