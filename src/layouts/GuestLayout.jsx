import React from "react";
import NavigationBarGuest from "../components/Guest/NavigationBarGuest";
import FooterGuest from "../components/Guest/FooterGuest";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <NavigationBarGuest />
      <Outlet /> {/* Ini penting untuk render <GuestHome /> */}
      <FooterGuest />
    </div>
  );
};

export default GuestLayout;
