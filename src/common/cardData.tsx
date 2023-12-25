import CommentIcon from "@mui/icons-material/Comment";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InstagramIcon from "@mui/icons-material/Instagram";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ReplyIcon from "@mui/icons-material/Reply";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { SVGProps } from "react";

export function SimpleIconsTiktok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"
      ></path>
    </svg>
  );
}

export function SmallIconsTiktok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12s"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"
      ></path>
    </svg>
  );
}

export const fbData = [
  {
    title: "TĂNG LIKE BÀI VIẾT FB",
    description: "Like bất kì bài viết công khai nào với chi phí rẻ",
    icon: <ThumbUpOffAltIcon />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG SHARE BÀI VIẾT FB",
    description: "Bài viết tiếp cận được nhiều người hơn",
    icon: <ReplyIcon />,
    href: "share-post-fb",
  },
  {
    title: "TĂNG COMMENT FB",
    description: "Seeding bán hàng, tăng độ uy tín cho bài viết",
    icon: <CommentIcon />,
    href: "comment-post-fb",
  },
  {
    title: "TĂNG LIKE CHO BÌNH LUẬN FB",
    description: "Hack like cmt cho các cuộc bình chọn",
    icon: <ThumbUpOffAltIcon />,
    href: "like-cmt-fb",
  },
  {
    title: "TĂNG VIEW LIVESTREAM INSTAGRAM",
    description: "Thêm hàng ngàn lượt view livestream tạo thương hiệu",
    icon: <VisibilityIcon />,
    href: "/",
  },
  {
    title: "TĂNG FOLLOWER CHO FB",
    description: "Cảm giác làm người nổi tiếng với hàng ngàn người theo dõi",
    icon: <HowToRegIcon />,
    href: "/",
  },
  {
    title: "TĂNG LIKE, FOLLOWER PAGE",
    description:
      "Tăng độ uy tín cho thương hiệu và nhận diện thương hiệu qua page",
    icon: <FacebookIcon />,
    href: "/",
  },
  {
    title: "TĂNG MEMBER CHO GROUP",
    description: "Tăng độ tin cậy uy tín cho group của bạn",
    icon: <GroupsIcon />,
    href: "/",
  },
  {
    title: "TĂNG VIEW VIDEO FB",
    description: "Tăng độ tương tác, tăng sự chất lượng cho video",
    icon: <OndemandVideoIcon />,
    href: "/",
  },
  {
    title: "TĂNG REVIEW FANPAGE",
    description: "Tăng độ uy tín, bán hàng dễ dàng hơn",
    icon: <StarBorderIcon />,
    href: "/",
  },
  {
    title: "VIPLIKE - LIKE THÁNG",
    description: "Viplike - cài một lần sử dụng 1 tháng",
    icon: <FacebookIcon />,
    href: "/",
  },
  {
    title: "TĂNG VIEW STORY",
    description: "Thêm ngàn lượt xem Story của bạn",
    icon: <VideocamIcon />,
    href: "/",
  },
  {
    title: "TÍCH XANH FACEBOOK",
    description: "Lên tích xanh cá nhân",
    icon: <FacebookIcon />,
    href: "/",
  },
];

export const tiktokData = [
  {
    title: "TĂNG LIKE TIM TIKTOK",
    description: "Nhiều tim nhiều tương tác",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG FOLLOW TIM TIKTOK",
    description: "Follow tăng độ trust",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG VIEW LIVE TIKTOK",
    description: "Tạo hiêu ứng tuyệt vời",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG VIEW TIKTOK",
    description: "Video triệu view không còn xa lạ",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG COMMENT TIKTOK",
    description: "Nhiều comment, nhiều tương tác",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG SAVE TIKTOK",
    description: "Tăng độ trust cho video của bạn",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG SHARE TIKTOK",
    description: "Tăng độ tin cậy cho nick cá nhân",
    icon: <SimpleIconsTiktok />,
    href: "like-post-fb",
  },
];

export const instagramData = [
  {
    title: "TĂNG FOLLOW INSTAGRAM",
    description: "Foolow tăng độ trust cho nick cá nhân",
    icon: <InstagramIcon />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG VIEW INSTAGRAM",
    description: "View instagram với chi phí cực rẻ",
    icon: <VideocamIcon />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG LIKE, TIM INSTAGRAM",
    description: "Like instagram với chi phí cực rẻ",
    icon: <FavoriteIcon />,
    href: "like-post-fb",
  },
  {
    title: "TĂNG COMMENT INSTAGRAM",
    description: "Seeding bán hàng, tăng độ uy tín cho bài viết",
    icon: <CommentIcon />,
    href: "like-post-fb",
  },
  {
    title: "VIP LIKE - GÓI THÁNG",
    description: "Viplike instagram - cài một lần sử dụng 1 tháng",
    icon: <FavoriteIcon />,
    href: "like-post-fb",
  },
];
