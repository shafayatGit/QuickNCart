"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        {/* Logo or Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Login Now! 👋
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue to <span className="font-semibold text-indigo-600">QuickNCart</span>
        </p>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-6 h-6"
          />
          <span className="font-medium">Sign in with Google</span>
        </button>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Info / Footer */}
        <p className="text-center text-gray-500 text-sm">
          By signing in, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
