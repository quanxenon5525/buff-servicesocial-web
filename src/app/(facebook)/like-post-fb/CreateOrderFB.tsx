import React, { useState } from "react";
import {
  Box,
  Stack,
  Grid,
  Typography,
  TextField,
  Divider,
} from "@mui/material";
import {
  Alert,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

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
export const CreateOrderFB = () => {
  return (
    <div>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="caption" fontWeight="bold">
                Bạn sử dụng dịch vụ nhớ đọc Thông tin gói và mục Lưu ý gói bên
                phải
              </Typography>
              <Box>
                <Form
                  {...formItemLayout}
                  name="basic"
                  layout="horizontal"
                  autoComplete="off"
                  labelAlign="left"
                  style={{ maxWidth: 600 }}
                >
                  <Form.Item label="Link bài viết">
                    <Input placeholder="Link bài full link" />
                  </Form.Item>
                  <Form.Item label="Chọn gói">
                    <Select defaultValue={"basic"}>
                      <Select.Option value="basic">
                        Link post Facebook Server 1
                      </Select.Option>
                      <Select.Option value="basic2">
                        Link post Facebook Server 2 - Rẻ
                      </Select.Option>
                      <Select.Option value="vip">
                        Link post Facebook Server 3 - Nhanh{" "}
                      </Select.Option>
                      <Select.Option value="reaction">
                        Hack cảm xúc tương tác bài
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Số lượng">
                    <InputNumber
                      style={{ width: "100%" }}
                      placeholder="Link bài full link"
                    />
                  </Form.Item>
                  <Form.Item label="Lên lịch">
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="Chọn ngày thực hiện"
                    />
                  </Form.Item>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Thanh toán: 0đ
                  </Typography>
                  <Typography variant="subtitle2">
                    Số dư hiện tại: 999.999.999đ
                  </Typography>
                  <Form.Item>
                    <Button
                      style={{
                        marginTop: 15,
                        marginBottom: 15,
                        width: "250px",
                        height: "50px",
                        backgroundColor: "#d9534f",
                        color: "white",
                      }}
                    >
                      Order ngay
                    </Button>
                    <Typography variant="subtitle2">
                      Sử dụng các dịch vụ tại Buffacc.vn, đồng nghĩa với việc
                      bạn đồng ý với các Quy định và Điều khoản của chúng tôi
                    </Typography>
                  </Form.Item>
                </Form>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                THÔNG TIN GÓI
              </Typography>
              <Typography variant="body2">
                Tốc độ thực tế có thể chậm hơn hoặc nhanh hơn tốc độ trung bình
              </Typography>
              <div style={{ marginTop: "15px" }}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  className="text-red-500"
                >
                  Like post Facebook Server 1
                </Typography>
                <Typography variant="body2">
                  Giá: 30đ, Min: 50 - Max: 100000
                </Typography>
                <Typography variant="body2">
                  Bắt đầu: 2-5p, Like người Việt Nam, có avatar, tốc độ nhanh,
                  lên dư like
                </Typography>
                <Typography variant="body2">
                  Tăng ảnh trong album sẽ lên like bài viết
                </Typography>
                <Typography variant="body2">
                  Tốc độ TB: 1-2h/100 like, Bảo hành: Không
                </Typography>
                <Typography variant="body2">
                  Cho phép hủy: -1000đ , Tỉ lệ rớt: 5-15% (sau 10 ngày)
                </Typography>
              </div>
              <ListPackage />
              <NoticePackage />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

const ListPackage = () => {
  return (
    <div>
      <div style={{ marginTop: "15px" }}>
        <Typography variant="body2" fontWeight="bold" className="text-red-500">
          Like post Facebook Server 1
        </Typography>
        <Typography variant="body2">Giá: 30đ, Min: 50 - Max: 100000</Typography>
        <Typography variant="body2">
          Bắt đầu: 2-5p, Like người Việt Nam, có avatar, tốc độ nhanh, lên dư
          like
        </Typography>
        <Typography variant="body2">
          Tăng ảnh trong album sẽ lên like bài viết
        </Typography>
        <Typography variant="body2">
          Tốc độ TB: 1-2h/100 like, Bảo hành: Không
        </Typography>
        <Typography variant="body2">
          Cho phép hủy: -1000đ , Tỉ lệ rớt: 5-15% (sau 10 ngày)
        </Typography>
      </div>
      <Divider />
      <div style={{ marginTop: "15px" }}>
        <Typography variant="body2" fontWeight="bold" className="text-red-500">
          Like post Facebook Server 1
        </Typography>
        <Typography variant="body2">Giá: 30đ, Min: 50 - Max: 100000</Typography>
        <Typography variant="body2">
          Bắt đầu: 2-5p, Like người Việt Nam, có avatar, tốc độ nhanh, lên dư
          like
        </Typography>
        <Typography variant="body2">
          Tăng ảnh trong album sẽ lên like bài viết
        </Typography>
        <Typography variant="body2">
          Tốc độ TB: 1-2h/100 like, Bảo hành: Không
        </Typography>
        <Typography variant="body2">
          Cho phép hủy: -1000đ , Tỉ lệ rớt: 5-15% (sau 10 ngày)
        </Typography>
      </div>
      <Divider />
      <div style={{ marginTop: "15px" }}>
        <Typography variant="body2" fontWeight="bold" className="text-red-500">
          Like post Facebook Server 1
        </Typography>
        <Typography variant="body2">Giá: 30đ, Min: 50 - Max: 100000</Typography>
        <Typography variant="body2">
          Bắt đầu: 2-5p, Like người Việt Nam, có avatar, tốc độ nhanh, lên dư
          like
        </Typography>
        <Typography variant="body2">
          Tăng ảnh trong album sẽ lên like bài viết
        </Typography>
        <Typography variant="body2">
          Tốc độ TB: 1-2h/100 like, Bảo hành: Không
        </Typography>
        <Typography variant="body2">
          Cho phép hủy: -1000đ , Tỉ lệ rớt: 5-15% (sau 10 ngày)
        </Typography>
      </div>
    </div>
  );
};

const NoticePackage = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "15px" }}>
        LUƯ Ý GÓI
      </Typography>
      <Typography variant="body2">
        1. Ảnh Cover (bìa) hoặc Avatar (ảnh đại diện) muốn tăng like phải cài
        đặt như hướng dẫn (Xem cài đặt) - Lỗi này sẽ không được hoàn tiền Ảnh
        đại diện hoặc cover, post có 1 ảnh, lấy link CHUẨN bằng cách bấm thẳng
        vào ảnh đại diện trên máy tính hoặc trình duyệt mobile
      </Typography>
      <Typography variant="body2">
        2. Chỉ nhận id bài viết công khai, không tăng bài trong Group, Album,
        bài viết dạng share link sẽ bị lỗi không tăng được, không hoàn tiền nếu
        vi phạm các lỗi này
      </Typography>
      <Typography variant="body2">
        3. Like, Share, Comment có thể tụôt like ít nhiều tùy thời điểm
      </Typography>
      <Typography variant="body2">
        4. Bài viết trên Fanpage nếu cài đặt giới hạn quốc gia, độ tuổi sẽ không
        tăng like, share, comment được và không hoàn tiền
      </Typography>
      <Typography variant="body2">
        5. Nội dung bài viết, nội dung Fanpage, Nick cá nhân phải tuân theo Tiêu
        chuẩn cộng đồng của Facebook
      </Typography>
      <Typography variant="body2">
        6. Một ID không chạy 2 đơn cùng lúc, sẽ lên thiếu
      </Typography>
      <Typography variant="body2">
        7. Không Like, share, comment bài viết được share lại, sẽ lên bài gốc
        (nếu muốn tăng bài share lại, chỉ dán ID bài viết, không dán full link)
      </Typography>
      <Typography variant="body2">
        8. Buffacc.vn không lấy bất cứ thông tin gì của khách hàng, nên các vấn
        đề liên quan đến tài khoản bị block, bị khóa... chúng tôi sẽ không chịu
        trách nhiệm
      </Typography>
      <Alert
        style={{ marginTop: "15px", color: "red" }}
        message="Ngiêm cấm Buff các bài có nội dung cờ bạc, lô đề, vào bờ, chưởi bậy, dìm hàng shop, cá nhân khác hoặc bốc phốt nhau, nội dung vi phạm pháp luật, chính trị, đồi trụy, mại dâm, súng đạn... Nếu cố tình buff bạn sẽ bị trừ hết tiền và band khỏi hệ thống like68 vĩnh viễn"
        type="error"
      />
    </>
  );
};

export default CreateOrderFB;
