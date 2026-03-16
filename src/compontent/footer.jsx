import { Phone, Mail, MessageCircle, FacebookIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f0ea] text-black px-10 py-16">

      <div className="flex w-full">

        {/* Help Section */}
        <div className="w-full">
          <h1 className="text-5xl font-bold mb-6">Need Help?</h1>

          <div className="space-y-4 text-black">

            <div className="flex items-center gap-3">
              <MessageCircle size={20}/>
              <span>Contact Us</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20}/>
              <span>market@zeelool.com</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={20}/>
              <p>
                Call: +1 (302) 990-0619 <br />
                7:00 AM - 1:00 AM (PT)
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="mt-6 bg-gradient-to-r text-white from-gray-300 to-[#382a1f] px-6 py-3 rounded-full">
            Track Order
          </button>

          {/* Social */}
          <div className="mt-8">
            <p className="mb-3">FOLLOW US</p>
            <div className="flex gap-4 text-xl cursor-pointer">
              <span><FacebookIcon/></span>
              <span><LinkedinIcon/></span>
              <span><TwitterIcon/></span>
              <span><InstagramIcon/></span>
            
            </div>
          </div>
        </div>

        {/* Shop All */}
        <div className="w-full flex justify-between text-black">
        <div>
          <h3 className="font-semibold mb-4">Shop All</h3>
          <ul className="space-y-2 text-black cursor-pointer">
            <li>All Eyeglasses</li>
            <li>All Women's Eyeglasses</li>
            <li>All Men's Eyeglasses</li>
            <li>All Kids' Eyeglasses</li>
            <li>All Sunglasses</li>
            <li>All Lenses</li>
            <li>All Accessories</li>
          </ul>
        </div>

        {/* Shop by Category */}
        <div>
          <h3 className="font-semibold mb-4">Shop by Category</h3>
          <ul className="space-y-2 text-black cursor-pointer">
            <li>Best for Readers</li>
            <li>Best for Progressive</li>
            <li>Transitions Lenses</li>
            <li>Low Fit Frame</li>
            <li>Driving Lenses</li>
            <li>Blue-Light Blocking</li>
            <li>Progressive Lenses</li>
          </ul>
        </div>

    

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-black cursor-pointer">
            <li>About Us</li>
            <li>Blog</li>
            <li>Deals</li>
            <li>Best Selling</li>
            <li>Flash Sale</li>
          </ul>
        </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-gray-400 text-sm flex justify-between">
        <p>© 2026 Optical Store</p>

        <div className="flex gap-6">
          <span>US</span>
          <span>UK</span>
          <span>DE</span>
          <span>FR</span>
          <span>CA</span>
        </div>
      </div>

    </footer>
  );
}