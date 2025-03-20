import React from "react";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen mt-18 grid grid-rows-[1fr_auto]">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;