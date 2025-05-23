import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    image:
      "https://i.pinimg.com/1200x/c3/dc/cd/c3dccd815ea344ab4cae500326e664d6.jpg",
    title: "Organic Food Market",
    button: "Order Now",
  },
  {
    image:
      "https://newsociety.com/wp-content/uploads/2024/10/Social-Image_Excerpt_Is-Organic-Food-Really-Better-1024x538.png",
    title: "Organic Food Market",
    button: "Order Now",
  },
];

const slideVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeIn" } },
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="Home" className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.div
                  key={slide.image}
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                  <div className="container mx-auto h-full flex items-center justify-center px-4 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-center text-white"
                    >
                      <h1
                        className="text-4xl md:text-6xl leading-tight mb-6"
                        style={{ fontFamily: "Poppins", fontWeight: 800 }}
                      >
                        {slide.title}
                      </h1>
                      <a
                        href="#"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition"
                        style={{ fontFamily: "Barlow" }}
                      >
                        {slide.button}
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !left-10 !text-white !w-12 !h-12  !bg-opacity-30 hover:!bg-opacity-50 rounded-full flex items-center justify-center z-20 transition" />
        <div className="swiper-button-next !right-10 !text-white !w-12 !h-12 !bg-opacity-30 hover:!bg-opacity-50 rounded-full flex items-center justify-center z-20 transition" />
      </Swiper>

      <div className="absolute w-full bottom-0 translate-y-1/2 px-4 z-20">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-3 divide-x">
          {/* Box 1 */}
          <div className="p-5 flex items-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/18274/18274963.png"
              alt="Return Policy"
              className="h-18 w-20 object-contain"
            />
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Return Policy
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Poppins" }}
              >
                Money back guarantee
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="p-5 flex items-center gap-4">
            <img
              src="https://cdn0.iconfinder.com/data/icons/eco/500/Deliver_delivery_ecommerce_moving_online_shipping_truck_green-512.png"
              alt="Free Shipping"
              className="h-19 w-20 object-contain"
            />
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Free Shipping
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Poppins" }}
              >
                On all orders over $25.00
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="p-5 flex items-center gap-4">
            <img
              src="https://cdn3.iconfinder.com/data/icons/e-commerce-5-2/380/7-512.png"
              alt="Store Locator"
              className="h-15 w-20 object-contain"
            />
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Store Locator
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "Poppins" }}
              >
                Find your nearest store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
