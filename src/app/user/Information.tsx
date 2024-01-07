"use client";
import { dataUserInfo } from "@/data/listData";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Button, Form, Input, List, Typography as Text } from "antd";

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
};

export default function Information() {
  const onFinish = (values: any) => {
    const { username, password } = values;
    if (username && password) {
      //   router.push("/after-login");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 120 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 120 },
    },
  };
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Form
            {...formItemLayout}
            style={{ maxWidth: "50%" }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelAlign="left"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Email không đúng định dạng!",
                },
                {
                  required: true,
                  message: "Vui lòng nhập Email!",
                },
              ]}
            >
              <Input />
              <Typography variant="caption" sx={{ color: "red" }}>
                Email dùng để sử dụng khi quên mật khẩu, vui lòng nhập đúng
                Email vì chỉ được thay đổi 1 lần
              </Typography>
            </Form.Item>
            <Form.Item<FieldType> label="Tên đăng nhập" name="username">
              <Input disabled />
            </Form.Item>
            <Form.Item<FieldType>
              label="Số điện thoại"
              name="phone"
              rules={[{ message: "Vui lòng nhập số điện thoại!" }]}
            >
              <Input />
            </Form.Item>
            <Typography variant="caption" sx={{ color: "red" }}>
              *Để trống nếu không muốn thay đổi mật khẩu
            </Typography>
            <Form.Item<FieldType>
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item<FieldType>
              label="Nhập lại mật khẩu"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  message: "Vui lòng nhập mật khẩu xác nhận!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu xác nhận không khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item className="text-center gap-y-1.5">
              <Button
                style={{
                  width: "300px",
                  backgroundColor: "blue",
                  color: "white",
                }}
                htmlType="submit"
              >
                `Cập nhật` thông tin
              </Button>
            </Form.Item>
          </Form>
        </Grid>
        <Grid item md={6} xs={12}>
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
        </Grid>
      </Grid>
    </Stack>
  );
}

export async function getServerSideProps() {
  // Lấy ngày hiện tại
  const currentDate = new Date();
  console.log("==>", currentDate);
  // Trả về props cho component
  return {
    props: {
      currentDate,
    },
  };
}
