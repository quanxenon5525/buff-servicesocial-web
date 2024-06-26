import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function MethodCashin() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        QUY ĐỊNH NẠP TIỀN
      </Typography>
      <Box
        sx={{
          border: "0.5px solid black",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="body2">
          - Vui lòng nạp từ 50k trở lên,
          <span className="text-red-500 font-bold"> đúng nội dung</span> như
          hướng dẫn bên dưới hoặc
          <span className="text-black font-bold"> quét mã QR</span> sẽ tự động
          điền cú pháp.
        </Typography>
        <Typography variant="body2">
          - Nạp dưới 50k hoặc nạp sai cú pháp, sẽ bị
          <span className="text-black font-bold"> trừ 10k</span> tiền phí kiểm
          tra.
        </Typography>
        <Typography variant="body2">
          - <span className="text-green-700 font-bold"> Cộng tác viên: </span>
          Nạp từ 1.000.000đ lên Thành viên cấp 2 (giảm ~10%), Nạp 3.000.000đ lên
          TV cấp 3 (giảm ~20%), Nạp 10.000.000đ lên TV cấp 4 (giảm ~30%).
        </Typography>
        <Typography variant="body2">
          - Ưu tiên chuyển cùng ngân hàng sẽ nhanh hơn, hạn chế không chuyển
          tiền từ Momo tỉ lệ lỗi nạp rất cao.
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        className="text-green-700"
        sx={{ mt: 2 }}
      >
        THÔNG BÁO!!! ĐANG CÓ KHUYẾN MÃI NẠP 10%
      </Typography>
      <Box
        sx={{
          padding: "15px",
          gap: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                border: "0.5px solid black",
                backgroundColor: "#eeeeee",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                className="text-black"
              >
                1. NẠP QUA NGÂN HÀNG
              </Typography>
              <Typography variant="body2" className="text-black">
                Nội dung chuyển khoản: Bufflike247 Nhan Pham
              </Typography>
              <Typography variant="body2" className="text-black">
                Vietcombank: 1015999116
                <br />
                Chủ tài khoản: NGUYỄN MINH QUÂN
                <br />
                Nạp tự động, ghi đúng nội dung tiền vào sau 3-5 phút
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                >
                  <Image
                    width={300}
                    height={300}
                    src={"/qr.jpg"}
                    alt={"loading..."}
                  />
                </div>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                border: "0.5px solid black",
                backgroundColor: "#eeeeee",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                className="text-black"
              >
                2. NẠP BẰNG MOMO
              </Typography>
              <Typography variant="body2" className="text-black">
                Nội dung chuyển khoản: Bufflike247 Nhan Pham
              </Typography>
              <Typography variant="body2" className="text-black">
                Momo: 0991122555
                <br />
                Chủ tài khoản: PHẠM THÀNH NHÂN
                <br />
                Nạp tự động, ghi đúng nội dung tiền vào sau 3-5 phút
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                >
                  <Image
                    width={300}
                    height={300}
                    src={"/qr.jpg"}
                    alt={"loading..."}
                  />
                </div>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
