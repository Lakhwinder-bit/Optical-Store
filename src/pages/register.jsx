export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-serif text-amber-900 mb-4">
          CREATE AN ACCOUNT
        </h1>

        <p className="text-gray-600 mb-10">
          Enter your information below to proceed. If you already have an
          account, please log in instead.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-800"
            />

            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-800"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-800"
          />

          {/* Button */}
          <button className="w-full bg-[#382a1f] text-white py-3 rounded-lg hover:scale-102 cursor-pointer transition">
            Create an account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-gray-700">
          Already have an account?{" "}
          <span className="font-semibold cursor-pointer">
            <a href="/login">Login →</a>
          </span>
        </p>
      </div>
    </div>
  );
}
