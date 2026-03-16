export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-15">
      <div className="w-full max-w-xl text-center">

        {/* Title */}
        <h1 className="text-4xl font-serif text-brown-700 mb-4 text-amber-900">LOGIN</h1>
        <p className="text-gray-600 mb-10">
          If you have an account with us, please log in.
        </p>

        {/* Form */}
        <form className="space-y-6">

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
          <button
            className="w-full bg-[#382a1f] text-white py-3 rounded-lg hover:scale-102 cursor-pointer transition"
          >
            Sign in
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-gray-700">
          <p>
            Don’t have an account?{" "}
            <span className="font-semibold cursor-pointer">
                <a href="/register">
              Create an account →
              </a>
            </span>
          </p>

          <p className="mt-2 cursor-pointer">
            Forgot your password? →
          </p>
        </div>

        {/* Help */}
        <div className="mt-10">
          <h2 className="text-2xl font-serif text-brown-700">
            Need help accessing your subscriptions?
          </h2>

          <p className="mt-3 underline cursor-pointer">
            Click here
          </p>
        </div>

      </div>
    </div>
  );
}