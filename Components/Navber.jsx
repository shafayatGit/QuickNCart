"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(session);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },

    // { name: 'About', href: '/about' },
    // { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className=" shadow-lg border-b">
      <div className=" px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          {/* <fashopping className="h-8 w-8 text-blue-600 mr-2" /> */}
          <Link href={"/"}>
            <span className="font-bold text-4xl cursor-pointer">
              QuickNCart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline  space-x-8">
              <ul className="flex flex-row gap-3 ">
                <Link href={"/"}>
                  <li className="text-gray-700 text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-black hover:text-white">
                    Home
                  </li>
                </Link>
                <Link href={"/products"}>
                  <li className="text-gray-700 text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-black hover:text-white">
                    Products
                  </li>
                </Link>
                {session && (
                  <Link href={"/dashboard/add-products"}>
                    <li className="text-gray-700 text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-black hover:text-white">
                      Dashboard
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => signOut()}
                  className="flex  btn items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 px-8 py-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link href={"/login"}>
                <button className="flex btn items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                  {/* <LogIn className="h-4 w-4" /> */}
                  <span>Login</span>
                </button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <MdOutlineCancel className="h-6 w-6" />
              ) : (
                <IoMdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <ul className="flex flex-col text-center items-center gap-3 t">
                <Link href={"/"}>
                  <li className="text-gray-700 text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-black hover:text-white">
                    Home
                  </li>
                </Link>
                <Link href={"/products"}>
                  <li className="text-gray-700 text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-black hover:text-white">
                    Products
                  </li>
                </Link>
                {session && (
                  <Link href={"/dashboard/add-products"}>
                    <li className="text-gray-700 text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-black hover:text-white">
                      Dashboard
                    </li>
                  </Link>
                )}
              </ul>

              {/* Mobile Auth Section */}
              <div className="pt-4 pb-2 border-t border-gray-200">
                {session ? (
                  <div className="space-y-2">
                    <Link href={""}>
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mx-3"
                      >
                        {/* <LogOut className="h-4 w-4" /> */}
                        <span>Logout</span>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <Link href={"/login"}>
                    <button
                      onClick={() => {
                        //   onLogin?.();
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mx-3 shadow-md"
                    >
                      {/* <LogIn className="h-4 w-4" /> */}
                      <span>Login</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
