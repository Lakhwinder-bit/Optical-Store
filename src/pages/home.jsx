import React from "react";
import HeroSlider from "../compontent/homeSlider";

export default function HomePage() {
     const data = [
    {
      id: 1,
      title: "Professional Life",
      desc: "Sleek and sophisticated, designed for professional success",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
        
      },
    {
      id: 2,
      title: "Daily Essentials",
      desc: "Frames focused on smart style and everyday comfort",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
    {
      id: 3,
      title: "Weekend Wear",
      desc: "Casual, stylish frames for when you're off duty",
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666",
    },
  ];
  return (
  <>
  <HeroSlider/>


 <section className="px-6 md:px-16 py-12 bg-white">
      {/* Top Heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-semibold">Daily Wear</h2>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Stay on trend with diverse styles that suit any occasion. A wide range
          of shapes and colors to complete your every look.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  );
}
