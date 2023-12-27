"use client";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { dataPriceList } from "@/data/historyData";
import { Stack, Typography } from "@mui/material";
import { Alert } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Link from "next/link";
import InfoPriceList from "../price-list/InfoPriceList";

export interface PriceProps {
  key: string;
  name?: string;
  pricelv1?: string;
  pricelv2?: string;
  pricelv3?: string;
  pricelv4?: string;
}

const columns: ColumnsType<PriceProps> = [
  {
    title: "Tên dịch vụ",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá thành viên cấp 1",
    dataIndex: "pricelv1",
    key: "pricelv1",
  },
  {
    title: "Giá thành viên cấp 2",
    dataIndex: "pricelv2",
    key: "pricelv2",
  },
  {
    title: "Giá thành viên cấp 3",
    dataIndex: "pricelv3",
    key: "pricelv3",
  },
  {
    title: "Giá thành viên cấp 4",
    dataIndex: "pricelv4",
    key: "pricelv4",
  },
];

export default function PriceListUnLogin() {
  return (
    <>
      <MainLayout loginAuth={false}>
        <Dashboard
          breadcrumb
          items={[
            { title: <Link href="/">Trang chủ</Link> },
            { title: "Bảng giá" },
          ]}
        >
          <Stack sx={{ color: "black", padding: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Bảng giá dành cho Cộng tác viên của Buffacc.vn:
            </Typography>
            <Typography variant="caption">
              *Lưu ý, tiền nạp được cộng dồn để set lên cấp, giá dịch có thể
              thay đổi lên hoặc xuống tùy theo thời điểm và thị trường
            </Typography>
            <Alert
              style={{ marginTop: "15px", color: "red" }}
              description="Hiện nay, có thể một số trang để giá dịch vụ rất thấp, tuy nhiên sau khi nạp tiền bạn không thể dùng được, hoặc dùng với giá cao hơn những gì họ đã ghi để quảng cáo, mất tiền oan uổng. Nhưng đến Like68, bạn có thể hoàn toàn yên tâm về điều này, giá dịch vụ luôn được cập nhật đúng và chính xác
              Like68 luôn nâng cao chất lượng dịch vụ, phương châm hoạt động lâu dài, đảm bảo cung cấp dịch vụ tốt nhất cho bạn."
              type="success"
            />
            <Table
              style={{ marginTop: "15px" }}
              columns={columns}
              dataSource={dataPriceList}
            />
            <InfoPriceList />
          </Stack>
        </Dashboard>
      </MainLayout>
    </>
  );
}
