import { Box, Typography } from "@mui/material";
import React from "react";

export default function SupportCashin() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" className="text-black">
        HỖ TRỢ NẠP TIỀN
      </Typography>
      <Box
        sx={{
          border: "0.5px solid black",
          backgroundColor: "#eeeeee",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight="bold" className="text-red-700g">
          Nếu sau 15 phút tiền chưa vào tài khoản, bạn nhắn tin qua Fanpage để
          được hỗ trợ Fanpage Bufflike24/7.vn (Hỗ trợ nhanh) Bạn nên kết bạn với
          Admin Nhân Phạm phòng trường hợp Fanpage xảy vấn đề thì có thể nhắn
          tin cho Admin
        </Typography>
      </Box>
    </Box>
  );
}
