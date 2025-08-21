// Layout.js
import React from "react";
import TruckingFooter from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <TruckingFooter />
    </>
  );
};

export default Layout;
