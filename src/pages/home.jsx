import React from "react";
import HeroSlider from "../compontent/homeSlider";
import SectionPage from "../compontent/sectionHome";
import FrameShapes from "../compontent/FrameShapes";
import ProductCard from "../compontent/productCard";

export default function HomePage() {
  const categories = [
  "Women's Glasses",
  "Men's Glasses",
  "Kids' Glasses",
  "Sunglasses",
  "Blue-Light Blocking Glasses",
  "Shop All Glasses",
];
  return (
  <>
  <HeroSlider/>
     <section className="text-center py-16 bg-gray-50">

      <h2 className="text-4xl font-semibold mb-3">
        Eyewear Frame Your Vibe
      </h2>
      <p className="text-gray-600">
        Style made simple, for all life's moments
      </p>
    </section>
     <div className="flex flex-wrap justify-center gap-4 px-4 pb-10">
      {categories.map((item, index) => (
        <button
          key={index}
          className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          {item}
        </button>
      ))}
    </div>
    <div>
                <div className="px-10 pt-2 pb-6">
      <h1 className="text-5xl font-semibold">Daily Wear</h1>
      <h4 className="text-md text-gray-600 pt-2">Stay on trend with diverse styles that suit any occasion. A wide range of shapes and colors to complete your every look.</h4>
    </div>
    <div className="flex gap-3 px-10">
    <SectionPage
    img="https://img.freepik.com/free-photo/eyeglasses-wear_1203-2609.jpg?t=st=1774111299~exp=1774114899~hmac=096a43b8e81207159ac81b1a5c983682a7e001027cd6c29aaa3844507a1f0959&w=1480"
      hadding="Daily Wear"
      title="Stay on trend with diverse styles that suit any occasion."
      
    />
      <SectionPage
      img="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
      hadding="Daily Wear"
      title="Stay on trend with diverse styles that suit any occasion."
      
    />
      <SectionPage
      img="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
      hadding="Daily Wear"
      title="Stay on trend with diverse styles that suit any occasion."
      
    />
    </div>
    </div>

      <div className="pt-15">
                <div className="px-10 pt-2 pb-6">
      <h1 className="text-5xl font-semibold">Signature Moments</h1>
      <h4 className="text-md text-gray-600 pt-2">Eye-catching designs that make a statement. Unique shapes and colors for standout moments.</h4>
    </div>
    <div className="flex gap-3 px-10">
    <SectionPage
    img="https://img.freepik.com/free-photo/sunglasses_1203…63763167b168a46a7b36d5b86e520725382320d2a1&w=1480"
      hadding="Daily Wear"
      title="Stay on trend with diverse styles that suit any occasion."
      
    />
      <SectionPage
      img="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
      hadding="Daily Wear"
      title="Stay on trend with diverse styles that suit any occasion."
      
    />
      <SectionPage
      img="	https://img.freepik.com/free-photo/sunglasses_7419…72c0c682fe7d847c9d6f04335145af0bc7228a5d69&w=1480"
      hadding="Daily Wear"
      title="Stay on trend with diverse styles that suit any occasion."
      
    />
    </div>
    </div>
    <FrameShapes/>
                <div className="px-10 pt-2 pb-6">
      <h1 className="text-5xl font-semibold">Best sellers
      </h1>
      {/* <h4 className="text-md text-gray-600 pt-2">Stay on trend with diverse styles that suit any occasion. A wide range of shapes and colors to complete your every look.</h4> */}
    </div>
        <div className="flex gap-6 p-6 bg-gray-50 min-h-screen flex-wrap">
      
      <ProductCard
        image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg?im=Resize,width=828,type=downsize&q=75"
        title="Tawana Glasses"
        rating="4.9"
        price="7.00"
      />
        <ProductCard
        image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg?im=Resize,width=828,type=downsize&q=75"
        title="Tawana Glasses"
        rating="4.9"
        price="7.00"
      />
        <ProductCard
        image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg?im=Resize,width=828,type=downsize&q=75"
        title="Tawana Glasses"
        rating="4.9"
        price="7.00"
      />

        <ProductCard
        image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg?im=Resize,width=828,type=downsize&q=75"
        title="Tawana Glasses"
        rating="4.9"
        price="7.00"
      />
 
    
      </div>
  </>
  );
}
