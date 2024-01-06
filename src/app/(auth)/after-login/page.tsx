"use client";
import React from "react";
import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Stack, Typography } from "@mui/material";
import { Avatar, List } from "antd";
import CustomCard from "@/components/CustomCard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { fbData, instagramData, tiktokData } from "@/data/cardData";
import { dataListMain } from "@/data/listData";
import BoxAvatar from "@/components/BoxAvatar";
import CardList from "@/components/CardList";

export default function AfterLogin() {
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
          <BoxAvatar
            name="Phạm Thành Nhân"
            level={10}
            balance="999.999"
            avatarUrl={
              "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/406045226_390198513670206_8047584056241224134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=3_XeT0_jK-wAX_-Ckt6&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdTj1MfxlB0bzpFzs0KzvZZ05LuNrU6zVAsGDvlHdKP7Pw&oe=65B5D719"
            }
          />
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
          <Box sx={{ width: "95%" }}>
            <Box>
              <CardList color="#74b9ff" title="Dịch vụ Facebook">
                {fbData.map((card, index) => (
                  <CustomCard key={index} {...card} />
                ))}
              </CardList>
            </Box>
            <Box>
              <CardList color="#44bd32" title="Dịch vụ Tiktok">
                {tiktokData.map((card, index) => (
                  <CustomCard key={index} {...card} />
                ))}
              </CardList>
            </Box>
            <Box>
              <CardList color="#fd79a8" title="Dịch vụ Instagram">
                {instagramData.map((card, index) => (
                  <CustomCard key={index} {...card} />
                ))}
              </CardList>
            </Box>
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
