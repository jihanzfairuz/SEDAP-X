import React from "react";
import { motion } from "framer-motion";
import topProduk from "../../assets/topProduk.json";
import { FaEye, FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const TopProdukSection = () => {
  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-green-500 font-medium text-sm" style={{ fontFamily: "Poppins" }}>
            Recently Added
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "Poppins" }}>
            Top Products
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Dairy", "Pantry", "Meat", "Fruits", "Vegetables"].map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm transition border font-medium ${
                i === 0
                  ? "bg-green-500 text-white border-green-500"
                  : "text-gray-600 border-gray-300 hover:border-green-500 hover:text-green-600"
              }`}
              style={{ fontFamily: "Poppins" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topProduk.map(({ name, img, price }, i) => (
            <div
              key={i}
              className="group relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition border border-gray-100"
            >
              {/* Gambar produk */}
              <div className="bg-gray-50 p-6 flex justify-center relative">
                <img src={img} alt={name} className="w-32 h-32 object-contain z-0" />
                <div className="absolute inset-0 flex items-center justify-center mt-40 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 translate-y-5 group-hover:translate-y-0">
                  <FaEye className="text-green-600 text-4xl cursor-pointer hover:text-green-800 transition" />
                  <FaHeart className="text-green-600 text-4xl cursor-pointer hover:text-green-800 transition" />
                  <IoCart className="text-green-600 text-4xl cursor-pointer hover:text-green-800 transition" />
                </div>
              </div>

              {/* Nama & harga */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                  {name}
                </h3>
                <p className="text-green-600 font-bold text-md" style={{ fontFamily: "Barlow" }}>
                  {price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Bottom */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
  {/* Banner 1 */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 128, 0, 0.25)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }}
    className="relative bg-[#f2f2f2] rounded-lg h-52 overflow-hidden shadow flex items-center px-8 cursor-pointer"
  >
    <div className="z-10 max-w-[60%]">
      <h3
        className="text-2xl font-bold text-gray-900 mb-1"
        style={{ fontFamily: "Poppins" }}
      >
        100% <span className="text-green-600">Organic</span>
      </h3>
      <p
        className="text-sm text-gray-700 mb-3"
        style={{ fontFamily: "Poppins" }}
      >
        Quality Organic Food Store
      </p>
      <button
        className="bg-white text-sm text-gray-800 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        style={{ fontFamily: "Barlow" }}
      >
        Order Now
      </button>
    </div>
    <img
      src="/img/banner1.png"
      alt="Organic Bag"
      className="absolute right-0 bottom-0 h-full object-contain"
    />
  </motion.div>

  {/* Banner 2 */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    whileHover={{
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 128, 0, 0.25)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }}
    className="relative bg-[#eaf6f3] rounded-lg h-52 overflow-hidden shadow flex items-center px-8 cursor-pointer"
  >
    <div className="z-10 max-w-[60%]">
      <h3
        className="text-2xl font-bold text-gray-900 mb-1"
        style={{ fontFamily: "Poppins" }}
      >
        100% <span className="text-green-600">Organic</span>
      </h3>
      <p
        className="text-sm text-gray-700 mb-3"
        style={{ fontFamily: "Poppins" }}
      >
        Quality Organic Food Store
      </p>
      <button
        className="bg-white text-sm text-gray-800 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        style={{ fontFamily: "Barlow" }}
      >
        Order Now
      </button>
    </div>
    <img
      src="/img/banner2.png"
      alt="Organic Oranges"
      className="absolute right-0 bottom-0 h-80 object-contain"
    />
  </motion.div>
</div>


      </div>
    </section>
  );
};

export default TopProdukSection;
