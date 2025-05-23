import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-green-600 text-white py-24 overflow-hidden">
      {/* Background Decoration (optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/img/vegetables-bg.jpg')" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center px-6 md:px-0">
        {/* Left Guarantee Icon */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/img/guarantee.png"
            alt="Guarantee"
            className="h-30"
          />
        </div>

        {/* Middle Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/img/food1.png"
            alt="Organic Vegetables"
            className="rounded-md shadow-xl object-cover h-80 w-full max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <div className="space-y-4">
          <p
            className="text-sm uppercase tracking-wider"
            style={{ fontFamily: "Barlow" }}
          >
            Shopping Store
          </p>
          <h2
            className="text-3xl font-extrabold leading-snug"
            style={{ fontFamily: "Poppins" }}
          >
            Organic Food Only
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "Barlow" }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form by injected
            humour or random words.
          </p>

          {/* Icons Row */}
          <div className="flex space-x-8 mt-4">
            <div className="flex flex-col items-center">
              <img src="/img/farmer.png" alt="Farmers" className="h-15 mb-2" />
              <span
                className="text-xs text-center"
                style={{ fontFamily: "Barlow" }}
              >
                Professional Farmers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img/farming.png" alt="Solution" className="h-15 mb-2" />
              <span
                className="text-xs text-center"
                style={{ fontFamily: "Barlow" }}
              >
                Solution for Farming
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:bg-gray-100 transition"
            style={{ fontFamily: "Barlow" }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
