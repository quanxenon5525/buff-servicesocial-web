import Dashboard from "@/components/layout/Dashboard";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Typography } from "@mui/material";
import { List } from "antd";
import Link from "next/link";
import React from "react";

export default function Rules() {
  return (
    <MainLayout>
      <Dashboard
        breadcrumb
        items={[
          { title: <Link href="/after-login">Trang chủ</Link> },
          { title: <Link href="/cash-in">Nạp tiền</Link> },
          { title: "Quy định chung" },
        ]}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            border: "2px solid #eee",
            justifyContent: "center",
            padding: "15px",
            gap: 20,
          }}
        >
          <Box
            sx={{
              width: "95%",
              padding: 2,
              margin: 2,
              gap: 1,
              display: "flex",
              color: "black",
              backgroundColor: "#eee",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Quy định và Điều khoản
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "95%",
              gap: 1,
              color: "black",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              1/ Quy định chung
            </Typography>
            <Typography variant="body2">
              Bằng việc sử dụng dịch vụ tại Bufflike24/7.vn, bạn đã chấp thuận
              tất cả các điều khoản & chính sách liệt kê tại đây, kể cả trong
              trường hợp bạn chưa đọc chúng. Chúng tôi có quyền thay đổi các
              điều khoản và chính sách dịch vụ mà không cần báo trước. Bạn có
              trách nhiệm đọc quy định này trước mỗi lần mua hàng để nắm được
              thông tin mới.
            </Typography>
            <Typography variant="body2">
              1. Nội dung trang Facebook bạn nhập vào mua dịch vụ tại
              Bufflike24/7.vn phải Tuân thủ mọi quy định của Luật Pháp Việt Nam.
            </Typography>
            <Typography variant="body2">
              2. Nội dung trang Facebook bạn nhập vào mua dịch vụ tại
              Buffacc24/7.vn phải Tuân thủ phạm trù đạo đức, Thuần Phong Mỹ Tục,
              nhân phẩm của con người Việt Nam.
            </Typography>
            <Typography variant="body2">
              3. Tuân thủ quyền riêng tư, tiêu chuẩn cộng đồng của Facebook.
            </Typography>
            <Typography variant="body2">
              4. Tuân thủ các điều khoản của Buffacc24/7.vn đã đề ra.
            </Typography>
            <Typography variant="body2">
              5. Nghiêm cấm các hành vi phá hoại hệ thống dưới mọi hình thức như
              ddos ...
            </Typography>
            <Typography variant="body2">
              6. Nghiêm cấm sử dụng dịch vụ trên hệ thống Buffacc24/7.vn để
              LIKE, SUB, theo dõi và bình luận... vào những bài viết có nội dung
              đồi trụy, nhạy cảm, phản động, chống phá Nhà Nước, buôn bán hàng
              quốc cấm, vô khống, xuyên tạc chính trị và các bài viết vi phạm
              nguyên tắc cộng đồng và xã hội...
            </Typography>
            <Typography variant="body2">
              7. Nghiêm cấm sử dụng hệ thống để lăng mạ, sỉ nhục, bôi nhọ danh
              dự và nhân phẩm của cá nhân và tổ chức khác.
            </Typography>
            <Typography variant="body2">
              8. Nghiêm cấm sử dụng, lợi dụng Buffacc24/7.vn để lừa đảo người
              khác thu lợi bất chính.
            </Typography>
            <Typography variant="body2">
              9. Khi cần hỗ trợ thì yêu cầu có văn hóa giao tiếp khi nhắn tin
              qua Facebook Fanpage của Like68
              <div className="ml-5 m-2">
                <li>
                  Dịch vụ trên Buffacc24/7.vn được kế thừa và phát triển thêm từ
                  các ứng dụng đồ thị mở api facebook được facebook cho phép và
                  hỗ trợ sử dụng cho nên dịch vụ của chúng tôi không hề gây tổn
                  hại đến mạng xã hội facebook, không gây tổn hại đến người dùng
                  trang web Buffacc24/7.vn và Facebook. Vì vậy các dịch vụ này
                  hoàn toàn là hợp lệ, an toàn và khách quan
                </li>
                <li>
                  Like68 có trách nhiệm và đảm bảo sẽ hoàn tất các đơn hàng
                  (tăng đầy đủ followers, likes…) Bạn tuyệt đối không được cố ý
                  ngăn cản khi chúng tôi tiến hành thực hiện đơn hàng (ví dụ:
                  xóa tài khoản, đổi tên tài khoản hoặc chuyển sang trạng thái
                  Riêng tư, khiến không thể tiếp tục tăng likes/followers được
                  nữa).+ Đơn hàng được xác định là tăng thiếu hoặc bị hụt khi số
                  like/follow… tại thời điểm Thông báo hoàn thành thấp hơn số
                  like/follow… tại thời điểm đặt hàng (ban đầu) cộng với số
                  like/follow đã mua. Các yếu tố khác (như những người ngoài
                  like/follow…) không được xét đến tại đây, vì không thể liệt kê
                  chi tiết được.
                </li>
                <li>
                  Đơn hàng được xác định là lỗi nếu quý khách cảm thấy tốc độ
                  hoàn thành chậm hơn mọi khi, trong trường hợp không may hiếm
                  khi xảy ra đơn hàng bị lỗi nghiêm trọng quá 2 tuần chưa được
                  hoàn thành quý khách vui lòng liên hệ sẽ được hoàn tiền
                </li>
                <li>
                  Dịch vụ của chúng tôi hoạt động với tinh thần trách nhiệm và
                  uy tín cao , luôn đề cao quyền lợi của khách hàng nên luôn để
                  khách hàng lắm được rõ những quyền lợi của mình khi mua like
                  tại dịch vụ của chúng tôi. để khách hàng có thể cân nhắc chọn
                  lựa trước khi đặt hàng. Gần đây chúng tôi được 1 số hách hàng
                  phản ánh có 1 số dv hay "nói hay" "nói quá" cốt để khách làm
                  rồi làm xong ko thì không có trách nhiệm, chúng tôi thấy rất
                  bức xúc vì điều này .
                </li>
                <li>
                  Dịch vụ Facebook của Buffacc24/7.vn luôn có chính sách rõ ràng
                  minh bạch và trung thực nên được sự tin tưởng và tin nhiệm của
                  đông đảo khách hàng.
                </li>
              </div>
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              2/ Quy định cho từng hạng mục
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Quy định về Nạp tiền
            </Typography>
            <Typography variant="body2">
              Buffacc24/7.vn có hạn mức nạp tối thiểu mỗi lần là 50.000vnd, nếu
              thấp hơn sẽ trừ phí 5k, nếu nạp sai cú pháp sẽ trừ phí 10k cho mỗi
              lần giao dịch
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Quy định về hoàn tiền, rút tiền:
            </Typography>
            <Typography variant="body2">
              Buffacc24/7.vn có hạn mức nạp tối thiểu mỗi lần là 50.000vnd, nếu
              thấp hơn sẽ trừ phí 5k, nếu nạp sai cú pháp sẽ trừ phí 10k cho mỗi
              lần giao dịch
              <div className="ml-5 m-2">
                <li>
                  Nếu website không bảo trì trên 30% danh sách vụ không được yêu
                  cầu hoàn tiền.
                </li>
                <li>
                  Chấp nhận hoàn tiền với tình trạng bảo trì từ 14 ngày trở lên.
                </li>
                <li>
                  Like68 không yêu cầu bạn phải nạp tiền nhiều 1 lần, nên bạn
                  chỉ cần nạp vừa đủ để dùng, không chấp nhận các yêu cầu rút
                  tiền với bất cứ lý do gì ngoài 2 lý do phía trên
                </li>
              </div>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Quy định về tính an toàn
            </Typography>
            <Typography variant="body2">
              - Tất cả các dịch vụ của Like68 đều không lấy bất cứ thông tin
              đăng nhập tài khoản xã hội của bạn như Facebook, Tiktok,
              Instagram, Shopee, Youtube... vì vậy chúng tôi không chịu trách
              nhiệm nếu tài khoản của bạn gặp vấn đề
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Quy định về sử dụng dữ liệu
            </Typography>
            <Typography variant="body2">
              Thông tin tài khoản Like68 cần cung cấp là Email, Số điện thoại
              của bạn. Chúng tôi có thể sẽ gửi mail để gửi những chương trình
              khuyến mãi đến bạn, và bạn có thể tắt những Email quảng cáo này
              bất cứ lúc nào
            </Typography>
          </Box>
          <Typography variant="body2" fontWeight="bold" className="text-black">
            Bufflike24/7.vn - Trân trọng!
          </Typography>
        </div>
      </Dashboard>
    </MainLayout>
  );
}
