import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Box, Stack, Typography } from "@mui/material";
import { Avatar } from "antd";
import Link from "next/link";
import { ReactNode } from "react";

type BoxAvatarProps = {
  name: string;
  level: number;
  balance: string;
  avatar?: ReactNode;
  avatarUrl?: string;
};
export default function BoxAvatar(props: BoxAvatarProps) {
  const { name, level, balance, avatar, avatarUrl } = props;
  return (
    <Box
      sx={{
        width: "95%",
        border: "0.5px solid black",
        padding: "15px",
        display: "flex",
        flexDirection: "row",
        gap: 3,
      }}
    >
      <Avatar
        shape="square"
        size={64}
        icon={avatar ? avatar : <PersonOutlineIcon />}
        src={avatarUrl}
      />
      <Stack>
        <Typography
          variant="subtitle1"
          className="text-black"
          fontWeight="bold"
        >
          <Link href="/user">{name}</Link>
        </Typography>
        <Typography variant="caption" className="text-black">
          Thành viên cấp {" "}<b className="text-red-500">{level}</b>
        </Typography>
        <Typography variant="caption" className="text-black">
          Số dư: {balance}đ
        </Typography>
      </Stack>
    </Box>
  );
}
