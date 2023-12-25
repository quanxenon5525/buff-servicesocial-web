import { Chip } from "@mui/material";
import { FormLogin } from "./FormLogin";

export const page = () => {
  return (
    <div className="pt-20 mt-20">
      <div className="text-black text-center mb-10">
        <Chip
          variant="outlined"
          size="medium"
          color="warning"
          label="Vui lòng đăng nhập để sử dụng dịch vụ"
        />
        <FormLogin />
      </div>
    </div>
  );
};

export default page;
