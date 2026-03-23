import { Heart, Star } from "lucide-react";

const ProductCard = ({ image, title, rating, price }) => {
  return (
    <div className="w-full">
      
      {/* Image Container */}
      <div className="relative bg-[#f3f3f3] h-[260px] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[120px] object-contain"
        />

        {/* Heart Icon */}
        <button className="absolute top-4 right-4 text-gray-600">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold text-gray-800">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-[14px] text-gray-700">
            <Star size={14} className="fill-black text-black" />
            {rating}
          </div>
        </div>

        <p className="mt-2 text-[15px] text-gray-700">
          ${price}
        </p>

        {/* Color Dots (bottom hint from screenshot) */}
        <div className="flex gap-2 mt-3">
          <span className="w-4 h-4 rounded-full bg-purple-600 border-2 border-white shadow"></span>
          <span className="w-4 h-4 rounded-full bg-black"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;