import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
