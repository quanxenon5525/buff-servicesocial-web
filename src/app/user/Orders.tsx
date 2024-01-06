import { Box, Grid, Stack, Typography } from "@mui/material";
import { Button, Input, Select, Table } from "antd";
import Link from "next/link";
import React from "react";

export default function Orders() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
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
      <Grid container spacing={2} sx={{ marginTop: "15px" }}>
        <Grid item lg={2} md={6} xs={12}>
          <Input placeholder="Tìm theo mã đơn hàng" />
        </Grid>
        <Grid item lg={2} md={6} xs={12}>
          <Input placeholder="Tìm theo Post ID" />
        </Grid>
        <Grid item lg={2} md={6} xs={12}>
          <Select
            showSearch
            placeholder="Dịch vụ"
            optionFilterProp="children"
            style={{ width: "100%" }}
            // onChange={onChange}
            // onSearch={onSearch}
            // filterOption={filterOption}
            options={[
              {
                value: "1",
                label: "Facebook",
              },
              {
                value: "2",
                label: "Instagram",
              },
              {
                value: "3",
                label: "Youtube",
              },
            ]}
          />
        </Grid>
        <Grid item lg={2} md={6} xs={12}>
          <Select
            showSearch
            placeholder="Trạng thái"
            optionFilterProp="children"
            style={{ width: "100%" }}
            // onChange={onChange}
            // onSearch={onSearch}
            // filterOption={filterOption}
            options={[
              {
                value: "1",
                label: "Hoàn thành",
              },
              {
                value: "2",
                label: "Hủy",
              },
              {
                value: "3",
                label: "Yêu cầu hủy",
              },
              {
                value: "4",
                label: "Tạm dừng",
              },
              {
                value: "5",
                label: "Chờ hoàn tiền",
              },
              {
                value: "6",
                label: "Đã hoàn tiền",
              },
              {
                value: "7",
                label: "Chờ hoàn tiền",
              },
            ]}
          />
        </Grid>
        <Grid item lg={2} md={6} xs={12} sx={{ display: "flex", gap: 1 }}>
          <Button>Tìm kiếm</Button>
          <Button danger>Hủy</Button>
        </Grid>
      </Grid>
      <Table />
    </Stack>
  );
}
