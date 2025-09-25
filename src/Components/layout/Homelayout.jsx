import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../static";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homelayout;
