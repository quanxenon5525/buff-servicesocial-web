import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { dataFB } from "@/data/historyData";
import { DeleteOutline } from "@mui/icons-material";

export interface DataType {
  key: string;
  code?: string;
  date?: string;
  postId?: number;
  runningCount?: number;
  price?: string;
  totalPrice?: string;
  status?: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã đơn hàng",
    dataIndex: "code",
    key: "code",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ngày tạo",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Post ID",
    dataIndex: "postId",
    key: "postId",
  },
  {
    title: "Đã chạy",
    dataIndex: "runningCount",
    key: "runningCount",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Tổng giá",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((status: any) => {
          let color = "green";
          if (status === "Không hoạt động") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" className="text-red-500">
        <a>
          <DeleteOutline />
        </a>
      </Space>
    ),
  },
];

export const HistoryOrderFB = () => {
  return (
    <div>
      <Table columns={columns} dataSource={dataFB} />
    </div>
  );
};
