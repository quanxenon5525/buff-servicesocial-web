"use client";
import React from "react";
import { Checkbox, Form, Input, Button } from "antd";
import { Chip } from "@mui/material";
import { useRouter } from "next/navigation";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const page = () => {
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

  return (
    <div className="p-20">
      <div className="text-black text-center mb-10">
        <Chip
          size="medium"
          color="warning"
          label="Vui lòng đăng nhập để sử dụng dịch vụ"
        />
      </div>
      <Form
        className="w-full flex flex-wrap flex-col content-center"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="text-center gap-y-1.5">
          <Button htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default page;
