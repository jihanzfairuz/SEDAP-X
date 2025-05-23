import React from "react";

const FooterGuest = () => {
  return (
    <footer className="bg-[#2F3130] text-white pt-16 pb-6 font-barlow">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Brand */}
        <div className="md:col-span-1">
          <h4 className="text-2xl font-bold mb-4 font-poppins">Sedap  X</h4>
          <p className="text-gray-300">
           Kami hadir untuk menyajikan yang terbaik dari alam ke meja makan Anda.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 font-poppins">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li>📞 08126834713</li>
            <li>📧 Sedap@company.com</li>
            <li>📍 Rumbai Pekanbaru</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-4 font-poppins">Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Top Sellers</a></li>
            <li><a href="#">Shopping</a></li>
            <li><a href="#">About Store</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-white mb-4 font-poppins">Explore</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">New Products</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

       {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-4 font-poppins">Newsletter</h4>
          <input
          type="email"
          placeholder="Alamat Email"
          className="w-full px-3 py-2 mb-3 rounded-sm bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
        />
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-sm font-poppins">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📷</a>
        </div>
        <p>© Copyright 2025 by SedapCompany.com</p>
      </div>
    </footer>
  );
};

export default FooterGuest;
