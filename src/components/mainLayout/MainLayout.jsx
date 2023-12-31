import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./../footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-30px">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
