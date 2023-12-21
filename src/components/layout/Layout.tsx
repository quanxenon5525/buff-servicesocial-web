import React from "react";
import { Footer, Navbar } from ".";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
