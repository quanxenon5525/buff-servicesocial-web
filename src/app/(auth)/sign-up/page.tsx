"use client";
import { Chip } from "@mui/material";
import { Button, Form, Input, Select, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select defaultValue="84" style={{ width: 70 }}>
      <Option value="84">+84</Option>
    </Select>
  </Form.Item>
);

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

type FieldType = {
  username?: string;
  password?: string;
  email?: string;
  confirmPassword?: string;
  phone?: string;
};

export default function FormLogin() {
  const router = useRouter();
  const onFinish = (values: any) => {
    if (values) {
      router.push("/login");
    }
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="p-20">
      <div className="text-black text-center mb-10">
        <Chip
          variant="outlined"
          size="medium"
          color="primary"
          label="ĐĂNG KÝ"
        />
      </div>
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        style={{
          marginLeft: "25%",
          maxWidth: "50%",
        }}
        scrollToFirstError
        labelWrap
        labelAlign="left"
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          label="Tên đăng nhập"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          label="Email"
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
        </Form.Item>
        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
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
              required: true,
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
        <Form.Item {...tailFormItemLayout}>
          <Typography style={{ color: "red" }}>
            <Link href="/login">Bạn đã có tài khoản? hãy đăng nhập</Link>
          </Typography>
          <Button className="text-center gap-y-1.5 mt-3" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
