import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#f3f0ea] fixed ">

      {/* Top Navbar */}
      <div className="flex items-center justify-between px-10 py-4">

        {/* Search Icon */}
        <Search className="text-green-900 cursor-pointer" />

        {/* Logo */}
        <div className="text-center ps-30">
          <h1 className="text-3xl font-semibold tracking-widest">DO</h1>
          <p className="text-xs tracking-[4px]">DAYAL OPTICALS</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Currency */}
          <div className="flex items-center gap-2 text-sm">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India"
              className="w-5"
            />
            <span>INR</span>
          </div>

          {/* User */}
          <User className="cursor-pointer" />

          {/* Cart */}
          <div className="relative">
            <ShoppingCart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>

        </div>
      </div>

      {/* Menu */}
      <nav className="flex justify-center gap-8 text-sm font-medium pb-4">

        <a className="hover:text-green-900 cursor-pointer">SHOP</a>
        <a className="hover:text-green-900 cursor-pointer">BRANDS</a>

        <div className="flex items-center gap-2">
          <span>SALE</span>
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            ENDS SOON
          </span>
        </div>

        <a className="hover:text-green-900 cursor-pointer">
          COLLECTOR'S EDITION
        </a>

        <a className="hover:text-green-900 cursor-pointer">SUNGLASSES</a>
        <a className="hover:text-green-900 cursor-pointer">OPTICALS</a>
        <a className="hover:text-green-900 cursor-pointer">OUR STORY</a>
        <a className="hover:text-green-900 cursor-pointer">OUR BOUTIQUES</a>

      </nav>

    </header>
  );
}