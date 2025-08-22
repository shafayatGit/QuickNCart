// components/Footer.tsx
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Footer() {
  const { data: session } = useSession();
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href={"/"}>
          {" "}
          <h1 className="text-3xl cursor-pointer font-bold">QuickNCart</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row space-x-6">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-400 transition">
            Products
          </Link>
          {session && (
            <>
              <Link
                href="/dashboard/add-products"
                className="hover:text-gray-400 transition"
              >
                Dashboard
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} QuickNCart. All rights reserved.
      </div>
    </footer>
  );
}
