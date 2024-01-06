import { Box, Grid, Stack, Typography } from "@mui/material";
import { Button, Select, Table } from "antd";

export default function HistoryTransaction() {
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
          Lịch sử giao dịch lưu lại các thao tác cộng trừ tiền trên hệ thống,
          giúp minh bạch giao dịch cho user
        </Typography>
        <Typography variant="body2">
          Lưu ý nếu cần hỗ trợ về đơn hàng bạn vui lòng vào tab Đơn hàng, không
          vào phần này
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "15px" }}>
        <Grid item lg={4} md={6} xs={12}>
          <Select
            showSearch
            placeholder="Hành động"
            optionFilterProp="children"
            style={{ width: "100%" }}
            // onChange={onChange}
            // onSearch={onSearch}
            // filterOption={filterOption}
            options={[
              {
                value: "1",
                label: "Giao dịch nạp tiền",
              },
              {
                value: "2",
                label: "Momo",
              },
              {
                value: "3",
                label: "Vnpay",
              },
              {
                value: "4",
                label: "Ngân hàng",
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
