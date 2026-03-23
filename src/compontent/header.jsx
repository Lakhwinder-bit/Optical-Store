import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#f3f0ea] fixed z-90">

      {/* Top Navbar */}
      <div className="flex items-center justify-between px-10 py-4">

        {/* Search Icon */}
        <Search className="text-green-900 cursor-pointer" />

        {/* Logo */}
        <div className="text-center ps-30">
         <img className="max-w-[80px]" src="/images/logo.png" alt="" />
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

        <a  href="/Product"
        className="hover:text-green-900 cursor-pointer">Eyeglasses</a>
        <a className="hover:text-green-900 cursor-pointer">Sunglasses</a>



      

        <a className="hover:text-green-900 cursor-pointer">Lenes</a>
        <a className="hover:text-green-900 cursor-pointer">New arrivals</a>
        <a className="hover:text-green-900 cursor-pointer">PG collection</a>

      </nav>

    </header>
  );
}