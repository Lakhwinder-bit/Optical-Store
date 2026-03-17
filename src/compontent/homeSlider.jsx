import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "Spring Awakening:",
      subtitle: "Healing Blooms Are Here",
      desc: "Nature-inspired styles for your fresh start",
      offer: "Flat 50% Off",
      image:
        "https://img.freepik.com/premium-photo/fashion-eyeglass-frames-glasses-ceramic-podium-creative-presentation-eyeglasses_531397-2800.jpg?w=1480",
    },
    {
      id: 2,
      title: "Trendy Eyewear",
      subtitle: "Upgrade Your Look",
      desc: "Modern glasses for everyday fashion",
      offer: "Flat 30% Off",
      image:
        "https://img.freepik.com/free-photo/tp-view-retro-eyeglasses-with-plastic-frame_23-2148290398.jpg?t=st=1773751824~exp=1773755424~hmac=1bbe239a106317b12e8c73bdc4109d95f0262899f860fc00e11d0802f2b1b517&w=1480",
    },
    {
      id: 3,
      title: "Premium Collection",
      subtitle: "See the World Clearly",
      desc: "High-quality lenses & frames",
      offer: "Buy 1 Get 1 Free",
      image:
        "https://img.freepik.com/premium-photo/stylish-eyeglasses-modern-eyeglass-frames-colored-background_255667-14093.jpg?w=1480",
    },
  ];

  return (
    <div className="w-full h-[80vh] pt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center px-6 md:px-16"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Content */}
              <div className="relative max-w-xl text-black">
                <h1 className="text-4xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                  {slide.subtitle}
                </h2>

                <p className="mt-4 text-gray-700">{slide.desc}</p>

                <span className="inline-block mt-3 mr-5 bg-white bg-brown-300 text-black px-4 py-1 rounded-full text-sm font-medium ">
                  {slide.offer}
                </span>

                <button className="mt-6 bg-[#382a1f] text-white px-6 py-3 rounded-full  duration-200  ease-in-out cursor-pointer hover:scale-105 transition-all">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}