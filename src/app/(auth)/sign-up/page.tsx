import { Chip } from "@mui/material";
import { SignUpForm } from "./SignUpForm";

export const page = () => {
  return (
    <div className="p-20">
      <div className="text-black text-center mb-10">
        <Chip variant="outlined" size="large" color="primary" label="ĐĂNG KÝ" />
      </div>
      <SignUpForm />
    </div>
  );
};

export default page;
