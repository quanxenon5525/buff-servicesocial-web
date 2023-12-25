"use client";
import React from "react";
import { Checkbox, Form, Input, Button, Flex } from "antd";
import { Chip, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const Page = () => {
  const router = useRouter();

  const onFinish = (values: any) => {
    const { username, password } = values;
    if (username && password) {
      router.push("/");
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
    <div className="pt-20 mt-20">
      <div className="text-black text-center mb-10">
        <Chip
          variant="outlined"
          size="medium"
          color="warning"
          label="Vui lòng đăng nhập để sử dụng dịch vụ"
        />
      </div>
      <Form
        {...formItemLayout}
        className="w-full flex flex-wrap flex-col content-center"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="left"
        labelWrap
      >
        <Form.Item<FieldType>
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 0, span: 20 }}
        >
          <Stack sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Checkbox>Remember me</Checkbox>
            <Link href="/sign-up">Bạn chưa có tài khoản? hãy đăng ký</Link>
          </Stack>
        </Form.Item>
        <Form.Item className="text-center gap-y-1.5">
          <Button
            style={{
              width: "300px",
              backgroundColor: "#d9534f",
              color: "white",
            }}
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>

        <Button
          style={{
            backgroundColor: "#1677ff",
            color: "white",
          }}
          className="site-button-ghost-wrapper"
        >
          <Link href="/">Quay lại trang chủ</Link>
        </Button>
      </Form>
    </div>
  );
};

export default Page;
