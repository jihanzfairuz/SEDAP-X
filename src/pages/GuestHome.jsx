// src/pages/GuestHome.jsx
import React from "react";
import HeroSection from "../components/Guest/HeroSection";
import AboutSection from "../components/Guest/AboutSection";
import TestimoniSection from "../components/Guest/TestimoniSection";
import CekProduk from "../components/Guest/CekProduk";
import TopProdukSection from "../components/Guest/TopProdukSection";

const GuestHome = () => {
  return (
    <>
      <HeroSection />
      <TopProdukSection />
      <AboutSection />
      <CekProduk />
      <TestimoniSection />
      
    </>
  );
};

export default GuestHome;
