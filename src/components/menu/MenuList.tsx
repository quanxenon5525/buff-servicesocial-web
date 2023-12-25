"use client";
import { SmallIconsTiktok } from "@/common/cardData";
import {
  ContactMail,
  Instagram,
  Person2Sharp,
  Phone,
  YouTube,
} from "@mui/icons-material";
import CommentIcon from "@mui/icons-material/Comment";
import FacebookIcon from "@mui/icons-material/Facebook";
import GroupsIcon from "@mui/icons-material/Groups";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ReplyIcon from "@mui/icons-material/Reply";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { MenuProps } from "antd";
import { Menu } from "antd";
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
  getItem("Dịch vụ facebook", "1", <FacebookIcon />, [
    getItem(
      <Link href="/like-post-fb">Tăng like bài viết</Link>,
      "1",
      <ThumbUpOffAltIcon />
    ),
    getItem("Tăng share bài viết", "2", <ReplyIcon />),
    getItem("Tăng comments bài viết", "3", <CommentIcon />),
    getItem("Tăng like cho bình luận", "4", <ThumbUpOffAltIcon />),
    getItem("Tăng view cho livestream", "5", <VisibilityIcon />),
    getItem("Tăng follower trang cá nhân", "6", <HowToRegIcon />),
    getItem("Tăng like follower page", "7", <FacebookIcon />),
    getItem("Tăng member cho group", "8", <GroupsIcon />),
    getItem("Tăng view cho video", "9", <OndemandVideoIcon />),
    getItem("Tăng review cho fanpage", "10", <StarBorderIcon />),
    getItem("Viplike - Like tháng", "11", <FacebookIcon />),
    getItem("Tăng view story", "12", <VideocamIcon />),
    getItem("Tích xanh facebook", "13", <FacebookIcon />),
  ]),
  getItem("Tiktok", "14", <SmallIconsTiktok />, [
    getItem("Tăng like, tim Tiktok", "15", <SmallIconsTiktok />),
    getItem("Tăng follow, tim Tiktok", "16", <SmallIconsTiktok />),
    getItem("Tăng view, like Tiktok", "17", <SmallIconsTiktok />),
    getItem("Tăng view Tiktok", "18", <SmallIconsTiktok />),
    getItem("Tăng comment Tiktok", "19", <SmallIconsTiktok />),
    getItem("Tăng save Tiktok", "20", <SmallIconsTiktok />),
    getItem("Tăng share Tiktok", "21", <SmallIconsTiktok />),
  ]),
  getItem("Instagram", "22", <Instagram />, [
    getItem("Tăng tim Instagram", "23", <Instagram />),
    getItem("Tăng follow Instagram", "24", <Instagram />),
    getItem("Tăng view livestream Instagram", "25", <Instagram />),
    getItem("Tăng comment Instagram", "26", <Instagram />),
  ]),
  getItem("Youtube", "27", <YouTube />, [
    getItem("Youtube Premium", "28", <YouTube />),
    getItem("Tăng view giờ xem Youtube", "29", <YouTube />),
    getItem("Tăng like Youtube", "30", <YouTube />),
    getItem("Tăng view Youtube", "31", <YouTube />),
    getItem("Tăng subscribers Youtube", "32", <YouTube />),
    getItem("Tăng comments Youtube", "33", <YouTube />),
  ]),
  getItem("Cho thành viên", "34", <Person2Sharp />, [
    getItem("Fanpage admin", "35", <ContactMail />),
    getItem("Liên hệ", "36", <Phone />),
  ]),
];

export const MenuList = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
  };
  const allKeys = items.reduce((keys: any, item: any) => {
    keys.push(item.key);
    if (item.children) {
      keys.push(...item.children.map((child: any) => child.key));
    }
    return keys;
  }, [] as React.Key[]);

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      defaultOpenKeys={allKeys}
    />
  );
};

export default MenuList;
