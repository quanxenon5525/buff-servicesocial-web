"use client";
import CardList from "@/components/CardList";
import CustomCard from "@/components/CustomCard";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { fbData2, instagramData2, tiktokData2 } from "@/data/cardData";
import { dataListMain } from "@/data/listData";
import { Box, Stack, Typography } from "@mui/material";
import { List } from "antd";

export default function Home() {
  return (
    <MainLayout loginAuth={false}>
      <Dashboard breadcrumb>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
          }}
        >
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
              className="text-yellow-500"
              fontWeight="bold"
            >
              Chào mừng bạn đã đến với dịch vụ buff like, share, comment các nền
              tảng mạng xã hội của chúng tôi
            </Typography>
            <Typography variant="caption" className="text-black">
              Để sử dụng dịch vụ vui lòng làm tạo tài khoản và sử dụng tài khoản
              cá nhân để sử dụng dịch vụ.
            </Typography>
            <Typography
              variant="caption"
              className="text-red-500"
              fontWeight="bold"
            >
              Vui lòng không cung cấp password cho bất cứ ai kể cả admin
            </Typography>
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
              BuffLike24/7.vn - Ổn định, hiệu quả, lâu dài
            </Typography>
            <Typography variant="caption" className="text-black">
              BuffLike24/7.vn hoạt động từ năm 2018 đến nay, với phương châm xây
              dựng một hệ thống mang đến lợi ích cho người sử dụng. Chúng tôi
              chỉ cung cấp các dịch vụ như tăng like, comment, share, view, tăng
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
                CHÚNG TÔI
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
                BUFF LIKE 24/7
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "95%",
            }}
          >
            <Box>
              <CardList color="#74b9ff" title="Dịch vụ Facebook">
                {fbData2.map((card, index) => (
                  <CustomCard key={index} {...card} />
                ))}
              </CardList>
            </Box>
            <Box>
              <CardList color="#44bd32" title="Dịch vụ Tiktok">
                {tiktokData2.map((card, index) => (
                  <CustomCard key={index} {...card} />
                ))}
              </CardList>
            </Box>
            <Box>
              <CardList color="#fd79a8" title="Dịch vụ Instagram">
                {instagramData2.map((card, index) => (
                  <CustomCard key={index} {...card} />
                ))}
              </CardList>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 5,
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
