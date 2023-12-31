import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Orders() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body2">
          Đơn hàng Tích xanh vui lòng nhận Acc tại mục{" "}
          <Link href="">Tích xanh</Link>, đơn Viplike nếu muốn xem hoặc xóa về
          lại đúng mục <Link href="">Viplike</Link>
        </Typography>
        <Typography variant="body2">
          Khi yêu cầu hỗ trợ, bạn cần nhập đúng Mã đơn hàng (Mã ĐH) đế được hỗ
          trợ, cột đầu tiên trong phần Lịch sử đơn hàng
        </Typography>
        <Typography variant="body2">
          Các đơn hàng cũ quá 30 ngày sẽ được di chuyển vào mục Lịch sử cũ hơn,
          bấm nút bên dưới để xem
        </Typography>
      </Box>
    </Stack>
  );
}
