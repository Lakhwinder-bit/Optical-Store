import ProductCard from "../compontent/productCard";

export default function Product() {
  return (
    <div className="h-screen flex bg-gray-50 pt-10 overflow-hidden pt-10">

      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 border-r h-screen overflow-y-auto no-scrollbar">

        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Gender */}
        <div className="mb-8">
          <p className="font-semibold mb-3 text-gray-700">Gender</p>

          <label className="flex gap-2 mb-2">
            <input type="checkbox" /> Women
          </label>

          <label className="flex gap-2">
            <input type="checkbox" /> Men
          </label>
        </div>


        {/* Price */}
        <div className="mb-8">
          <p className="font-semibold mb-3">Price</p>

          {["Under $10", "Under $20", "Under $30", "Above $30"].map(
            (item, i) => (
              <label key={i} className="flex gap-2 mb-2">
                <input type="checkbox" />
                {item}
              </label>
            )
          )}
        </div>


        {/* Optical Type */}
        <div className="mb-8">
          <p className="font-semibold mb-3">Optical Type</p>

          {["Full Rim", "Half Rim", "Rimless"].map((item, i) => (
            <label key={i} className="flex gap-2 mb-2">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>


        {/* Colors */}
        <div className="mb-8">
          <p className="font-semibold mb-3">Colors</p>

          {["Black", "Gold", "Silver", "Blue", "Pink"].map((c, i) => (
            <label key={i} className="flex gap-2 mb-2">
              <input type="checkbox" />
              {c}
            </label>
          ))}
        </div>


        {/* Shape */}
        <div className="mb-8">
          <p className="font-semibold mb-3">Shape</p>

          {["Square", "Round", "Cat Eye", "Rectangle"].map((s, i) => (
            <label key={i} className="flex gap-2 mb-2">
              <input type="checkbox" />
              {s}
            </label>
          ))}
        </div>

      </aside>



      {/* Main */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-6">

        {/* Banner */}
        <div
          className="h-52 rounded-2xl mb-8 overflow-hidden"
          style={{
            backgroundImage:
              "url(https://s3.zeelool.com/admin/product/group/cd914d10795f6e062bb867a1f6bf383d.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          

          {/* Text */}
          <div className="relative z-10 p-8 pt-20">

         

            <h2 className="text-4xl font-bold text-black">
         The Glasses hub
            </h2>

            <p className="text-gray-800">
              Stylish prescription eyeglasses available now
            </p>

          </div>

        </div>


        {/* Title */}
        <h2 className="text-4xl font-bold">
          Eyeglasses
        </h2>

        <p className="text-gray-500 mb-6">
          Trendy eyeglasses for every moment
        </p>



        {/* Grid */}
        <div className="grid grid-cols-4 gap-6">

          <ProductCard
            image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg"
            title="Tawana Glasses"
            rating="4.9"
            price="7.00"
          />

          <ProductCard
            image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg"
            title="Tawana Glasses"
            rating="4.9"
            price="7.00"
          />

          <ProductCard
            image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg"
            title="Tawana Glasses"
            rating="4.9"
            price="7.00"
          />

          <ProductCard
            image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg"
            title="Tawana Glasses"
            rating="4.9"
            price="7.00"
          />

          <ProductCard
            image="https://s3.zeelool.com/admin/product/image/e3858778261f4fd9ed8cbbf5550a3a27.jpg"
            title="Tawana Glasses"
            rating="4.9"
            price="7.00"
          />

        </div>

      </main>

    </div>
  );
}