import React from "react";

const shapes = [
  {
    name: "Aviator",
    image: "/images/avtor.png",
  },
  {
    name: "Cat-Eye",
    image: "/images/cat eye.webp",
  },
  {
    name: "Round",
    image: "/images/rectangle.png",
  },
  
  {
    name: "Browline",
    image: "/images/bowline.png",
  },
  {
    name: "Geometric",
    image: "/images/geomatric.png",
  },
  {
    name: "Rectangle",
    image: "/images/rectangle.png",
  },
  {
    name: "Butterfly",
    image: "/images/butterfly.png",
  },
  {
    name: "Square",
    image: "/images/square.png",
  },
];

const FrameShapes = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-2">
        Shop by Frame Shape
      </h2>

      <p className="text-gray-600 mb-8">
        Choose the perfect frames for your face or your style.
      </p>

      {/* Shapes Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer transition transform hover:scale-110"
          >
            <img
              src={shape.image}
              alt={shape.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm text-gray-700">
              {shape.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FrameShapes;