"use client";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Link from "next/link";

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
    getItem(<Link href="/like-post-fb">Tăng like bài viết</Link>, "1"),
    getItem("Tăng share bài viết", "2"),
    getItem("Tăng cmt bài viết", "3"),
    getItem("Tăng like cho bình luận", "4"),
  ]),
  getItem("Tiktok", "5", <UserOutlined />, [
    getItem("Tăng like, tim Tiktok", "6"),
    getItem("Tăng view Tiktok", "7"),
  ]),
];

export const MenuList = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuList;
