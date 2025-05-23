import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const NavigationBarGuest = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 w-full shadow z-50 bg-white">
      {/* Top Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left: Social + Email */}
          <div className="flex items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaInstagram />
              </a>
            </div>

            <div className="h-6 border-l border-gray-300" />

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              <span>info@Sedap.com</span>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="text-3xl font-bold text-green-700 font-serif select-none">
            Sedap X
          </div>

          {/* Right: Phone + Search + Cart */}
          <div className="flex items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-600" />
              <span>08126834713</span>
            </div>

            <div className="h-6 border-l border-gray-300" />

            <button aria-label="Search" className="hover:text-green-600">
              <FaSearch size={18} />
            </button>

            <button aria-label="Cart" className="hover:text-green-600">
              <FaShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-[#f3f3f3] border-t border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left: Login/Register */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaUser className="text-green-600" />
            <a
              href="/login"
              className="px-3 py-1 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Register
            </a>
          </div>

          {/* Center: Menu */}
          <ul className="flex gap-6 text-gray-700 text-sm font-medium">
              <li>

              <button
                onClick={() => handleScroll("Home")}
                className="hover:text-green-600 focus:outline-none"
              >
                Home 
              </button>
              </li>
            <li>

              <button
                onClick={() => handleScroll("about")}
                className="hover:text-green-600 focus:outline-none"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("testimoni")}
                className="hover:text-green-600 focus:outline-none"
              >
                Testimoni
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("produk")}
                className="hover:text-green-600 focus:outline-none"
              >
                Top Produk
              </button>
            </li>
            {/* Tombol baru Cek Produk */}
            <li>
              <button
                onClick={() => handleScroll("cek-produk")}
                className="hover:text-green-600 focus:outline-none"
              >
                Cek Produk
              </button>
            </li>
          </ul>

          {/* Right: Language Dropdown Placeholder */}
          <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-5 h-5"
            />
            <span>English</span>
            <IoIosArrowDown />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBarGuest;
