import { useState } from "react";
import produkJson from "../../assets/CekProduk.json";

export default function CekProdukSection() {
  const [produkData] = useState(produkJson);
  const [kode, setKode] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");

  const handleCek = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    if (!kode.trim()) {
      setError("Kode produk tidak boleh kosong.");
      return;
    }

    const produk = produkData.find(
      (p) => p.kode_produk.toLowerCase() === kode.toLowerCase()
    );

    if (!produk) {
      setError("❌ Kode produk tidak ditemukan.");
    } else if (produk.stok > 0) {
      setHasil({
        status: "tersedia",
        nama: produk.nama_produk,
        harga: produk.harga,
        stok: produk.stok,
      });
    } else {
      setHasil({
        status: "habis",
        nama: produk.nama_produk,
      });
    }
  };

  return (
    <section
      id="cek-produk"
      className="relative bg-white py-24 overflow-hidden"
    >
      {/* Dekorasi statis */}
      <img
        src="/img/border kiri.png"
        className="absolute bottom-0 left-0 w-[300px] md:w-[400px] opacity-70"
        alt="decor"
      />
      <img
        src="/img/border kanan.png"
        className="absolute bottom-0 right-0 w-[300px] md:w-[400px] opacity-70"
        alt="decor"
      />

      {/* Dekorasi kecil berputar kiri */}
      <img
        src="/img/tomat.png"
        alt="tomat berputar kiri"
        className="absolute top-18 left-25 w-30 md:w-34 animate-[spin_20s_linear_infinite]"
      />

      {/* Dekorasi kecil berputar kanan */}
      <img
        src="/img/cabe.png"
        alt="cabe berputar kanan"
        className="absolute top-30 right-70 w-30 md:w-34 animate-[spin_20s_linear_infinite]"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
        <div>
          <p className="text-green-500 text-xs uppercase font-semibold mb-2" style={{ fontFamily: "Barlow" }}>
            Pure Organic Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight" style={{ fontFamily: "Poppins" }}>
            Everyday Fresh Food
          </h2>
         <p className="text-green-600 italic text-sm mb-1" style={{ fontFamily: 'Barlow' }}>
  Rasa nyaman yang membuat pengalaman lebih menyenangkan.
</p>
<p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Barlow' }}>
  Memberikan ketenangan tanpa efek samping yang mengganggu.
</p>

          <ul className="text-sm text-gray-700 space-y-1 mb-6" style={{ fontFamily: "Barlow" }}>
          <li>✅ Menyegarkan dengan sentuhan seperti ini</li>
          <li>✅ Nyaman dan benar-benar memuaskan</li>
          <li>✅ Memberikan pengalaman yang menyenangkan</li>
          <li>✅ Mengurangi rasa tidak nyaman dan stres</li>
          <li>✅ Tidak ada efek samping yang mengganggu</li>
        </ul>

          <form onSubmit={handleCek} className="flex gap-2" style={{ fontFamily: "Barlow" }}>
            <input
              type="text"
              placeholder="masukkan Kode Produk (contoh: a1)"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md text-sm font-semibold hover:bg-green-700 transition"
            >
              Cek Produk
            </button>
          </form>

          {/* Output */}
          {error && (
            <p className="text-red-500 text-sm mt-4" style={{ fontFamily: "Barlow" }}>
              {error}
            </p>
          )}
          {hasil && (
            <div
              className="mt-4 text-sm bg-green-50 border border-green-200 rounded-md p-3 text-gray-700"
              style={{ fontFamily: "Barlow" }}
            >
              {hasil.status === "tersedia" ? (
                <>
                  ✅ <strong>{hasil.nama}</strong> tersedia <br />
                  Harga: Rp {hasil.harga}
                  <br />
                  Stok: {hasil.stok}
                </>
              ) : (
                <>⚠️ <strong>{hasil.nama}</strong> sedang habis</>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <img
            src="/img/buahlingkaran.png"
            alt="Healthy Heart Veggies"
            className="w-80 md:w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
