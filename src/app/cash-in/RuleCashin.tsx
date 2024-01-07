import { dataUserInfo } from "@/data/listData";
import { Box, Typography } from "@mui/material";
import { List } from "antd";
import React from "react";

export default function RuleCashin() {
  return (
    <Box>
      <List
        header={
          <Typography className="text-red-500" fontWeight="bold">
            Cập nhật ngày 31/12/2023, các dịch vụ tại Buffacc.vn
          </Typography>
        }
        bordered
        dataSource={dataUserInfo}
        renderItem={(item) => (
          <List.Item>
            {item}{" "}
            <Typography
              variant="caption"
              className="text-green-500"
              fontWeight="bold"
            >
              Sử dụng tốt
            </Typography>
          </List.Item>
        )}
      />
    </Box>
  );
}
