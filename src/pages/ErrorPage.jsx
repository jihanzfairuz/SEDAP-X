import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-lg p-6">
        <img
          src="https://www.accuwebhosting.com/blog/wp-content/uploads/2022/05/wordpress-404-error-scaled.jpg"
          alt="Error Illustration"
          className="w-full h-auto mb-6 rounded-lg shadow"
        />
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
        <p className="text-gray-600 mt-2">Halaman yang kamu cari tidak tersedia.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}
