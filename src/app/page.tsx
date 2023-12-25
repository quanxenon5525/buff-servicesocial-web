"use client";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Stack, Typography } from "@mui/material";
import { Avatar, List } from "antd";
import CardList from "@/components/CardList";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { fbData, instagramData, tiktokData } from "@/common/cardData";
import { dataListMain } from "@/common/listData";

export default function Home() {
  return (
    <MainLayout>
      <Dashboard breadcrumb>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <Box
            sx={{
              width: "95%",
              border: "0.5px solid black",
              padding: "15px",
              display: "flex",
              flexDirection: "row",
              gap: 3,
            }}
          >
            <Avatar shape="square" size={64} icon={<PersonOutlineIcon />} />
            <Stack>
              <Typography
                variant="subtitle1"
                className="text-black"
                fontWeight="bold"
              >
                Phạm Thành Nhân
              </Typography>
              <Typography variant="caption" className="text-black">
                Thành viên <b className="text-red-500">cấp 10</b>
              </Typography>
              <Typography variant="caption" className="text-black">
                Số dư: 999.999.999đ
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "95%",
              border: "0.5px solid black",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              className="text-black"
              fontWeight="bold"
            >
              BuffAcc.vn - Ổn định, hiệu quả, lâu dài
            </Typography>
            <Typography variant="caption" className="text-black">
              BuffAcc.vn hoạt động từ năm 2018 đến nay, với phương châm xây dựng
              một hệ thống mang đến lợi ích cho người sử dụng. Chúng tôi chỉ
              cung cấp các dịch vụ như tăng like, comment, share, view, tăng
              mắt, likepage, follow, Facebook, Tiktok, Instagram, Shopee,
              Youtube...và một số dịch vụ khác để hỗ trợ cá nhân được nhiều
              tương tác hơn, các shop bán hàng tốt và hiệu quả hơn.
            </Typography>
            <Typography variant="caption" className="text-black">
              Các dịch vụ khác như Hack nick facebook, report fanpage, đọc trộm
              tin nhắn, đánh giá xấu, dìm hàng...
              <Typography
                variant="caption"
                className="text-black"
                fontWeight="bold"
              >
                Nhân Phạm
              </Typography>{" "}
              tuyệt đối không nhận
            </Typography>
          </Box>
          <Box
            sx={{
              width: "95%",
              marginTop: "15px",
              gap: 1,
            }}
          >
            <Typography variant="caption" className="text-black">
              SỬ DỤNG CÁC DỊCH VỤ NHIỀU NGƯỜI DÙNG NHẤT TẠI{" "}
              <Typography
                variant="caption"
                className="text-black"
                fontWeight="bold"
              >
                NHÂN PHẠM
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "95%",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              className="text-blue-500"
            >
              Dịch vụ Facebook
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "7%",
                gap: 2,
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              {fbData.map((card, index) => (
                <CardList key={index} {...card} />
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              width: "95%",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              className="text-purple-500"
            >
              Dịch vụ Tiktok
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "6%",
                gap: 2,
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              {tiktokData.map((card, index) => (
                <CardList key={index} {...card} />
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              width: "95%",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              className="text-pink-500"
            >
              Dịch vụ Instagram
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "6%",
                gap: 2,
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              {instagramData.map((card, index) => (
                <CardList key={index} {...card} />
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              width: "95%",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              className="text-black"
              fontWeight="bold"
            >
              VÌ SAO NÊN TIN TƯỞNG SỬ DỤNG DỊCH VỤ CỦA BUFFACC.VN
            </Typography>
            <List
              itemLayout="horizontal"
              dataSource={dataListMain}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={item.avatar}
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Box>
        </div>
      </Dashboard>
    </MainLayout>
  );
}
