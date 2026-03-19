import React from "react";
import HeroSlider from "../compontent/homeSlider";
import SectionPage from "../compontent/sectionHome";

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
    img="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
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
    img="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
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
  </>
  );
}
