import React from "react";
import { motion } from "framer-motion";
import testimoni from "../../assets/testimoni.json";

const instagramImages = [
  "https://i.pinimg.com/736x/7c/c2/ac/7cc2acad4571c73297c7180841ccacda.jpg",
  "https://i.pinimg.com/736x/e2/9a/c6/e29ac62631217d18b4776f62afe4974e.jpg",
  "https://i.pinimg.com/736x/40/2f/0b/402f0b2b22a00c64ed9de8ed62faf24c.jpg",
  "https://i.pinimg.com/736x/a4/30/74/a4307498c72b46eb5a9962e44bf84040.jpg",
  "https://i.pinimg.com/736x/9a/32/51/9a3251e176544a068d5d6c9f46d51a8e.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TestimoniSection = () => {
  return (
    <section id="testimoni" className="bg-[#f5f5f5] py-20 relative font-barlow">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-green-700 text-sm text-center mb-2 font-semibold">
          Our Testimonials
        </p>
        <h2 className="text-4xl font-bold text-center text-green-900 font-poppins mb-16">
          What People Say?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimoni.map(({ nama, posisi, komentar, avatar }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-md px-6 py-10 text-center shadow-lg relative group hover:bg-green-300 transition duration-300 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeInUp}
            >
              <img
                src={avatar}
                alt={nama}
                className="w-30 h-30 rounded-full mx-auto -mt-16 object-cover border-4 border-white shadow-md"
              />
              <p className="text-gray-600 mt-6 mb-6 px-2 leading-relaxed text-sm group-hover:text-green-900 transition">
                {komentar}
              </p>
              <h4 className="text-green-700 font-semibold group-hover:text-green-900 transition">
                {nama}
              </h4>
              <p className="text-gray-500 text-xs group-hover:text-green-800 transition">
                {posisi}
              </p>
              <div className="h-1 w-full bg-green-500 mt-6"></div>
            </motion.div>
          ))}
        </div>

        {/* Shop on Instagram Section */}
        <div className="mt-24 text-center">
          <p className="text-green-700 text-sm font-semibold">
            We're On Instagram
          </p>
          <h2 className="text-3xl font-bold text-green-900 font-poppins mb-10">
            Shop on Instagram
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {instagramImages.map((src, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img
                  src={src}
                  alt={`Instagram ${i}`}
                  className="w-full h-64 object-cover rounded-md transform group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
