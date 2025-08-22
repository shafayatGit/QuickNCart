"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ShoppingCart, Star, Zap } from 'lucide-react';

// const mockProducts = [
//   {
//     name: "Wireless Headphones",
//     description:
//       "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
//     price: 120,
//     image: "https://i.ibb.co.com/hJrJYydf/headphone.jpg",
//     category: "Electronics",
//   },
//   {
//     name: "Smartwatch Pro X",
//     description:
//       "Feature-packed smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
//     price: 199,
//     image: "https://i.ibb.co.com/vxfT041Y/watch.jpg",
//     category: "Wearables",
//   },
//   {
//     name: "Bluetooth Speaker Mini",
//     description:
//       "Compact Bluetooth speaker with deep bass, waterproof design, and 10 hours playtime.",
//     price: 75,
//     image: "https://i.ibb.co.com/VY88LFN6/airbuds.jpg",
//     category: "Audio",
//   },
//   {
//     name: "4K Ultra HD Monitor",
//     description:
//       "27-inch 4K Ultra HD monitor with HDR support and ultra-slim bezels for immersive viewing.",
//     price: 320,
//     image: "https://i.ibb.co.com/QvggwbNL/monitor.jpg",
//     category: "Computers",
//   },
//   {
//     name: "Mechanical Gaming Keyboard",
//     description:
//       "RGB backlit mechanical keyboard with customizable keys and ergonomic wrist rest.",
//     price: 110,
//     image: "https://i.ibb.co.com/qY6WC8TK/keyboard.jpg",
//     category: "Accessories",
//   },
//   {
//     name: "Wireless Charging Pad",
//     description:
//       "Fast wireless charging pad compatible with iPhone, Samsung, and other Qi-enabled devices.",
//     price: 45,
//     image: "https://i.ibb.co.com/jPY4dHQS/charger.jpg",
//     category: "Mobile Accessories",
//   },
//   {
//     name: "Noise Cancelling Earbuds",
//     description:
//       "True wireless earbuds with noise cancellation, touch controls, and 24-hour battery life.",
//     price: 150,
//     image: "https://i.ibb.co.com/PpWgGyj/airbud.jpg",
//     category: "Audio",
//   },
//   {
//     name: "Gaming Mouse Pro",
//     description:
//       "High-precision gaming mouse with customizable DPI settings and RGB lighting.",
//     price: 65,
//     image: "https://i.ibb.co.com/Pv54fcVK/mouse.jpg",
//     category: "Accessories",
//   },
//   {
//     name: "Portable SSD 1TB",
//     description:
//       "Ultra-fast portable SSD with 1TB storage and USB-C connectivity for quick file transfers.",
//     price: 180,
//     image: "https://i.ibb.co.com/5hL6b24d/ssd.jpg",
//     category: "Storage",
//   },
//   {
//     name: "Drone Pro 4K",
//     description:
//       "Compact drone with 4K camera, GPS, and 30 minutes of flight time per charge.",
//     price: 499,
//     image: "https://i.ibb.co.com/fYmS968b/drone.jpg",
//     category: "Gadgets",
//   },
// ];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await axios.get("/api/products");
    setProducts(data.data);
  };
  //   console.log(products)

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product._id} className="group border border-black rounded-2xl perspective-1000">
              {/* Main card with hover transform */}
              <div className="relative w-full h-full transform-style-preserve-3d transition-all duration-700 hover:rotateY-5 hover:rotateX-2">
                {/* Card background with glass morphism */}
                {/*  */}

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Category badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1  border border-black rounded-full text-xs font-medium backdrop-blur-sm">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Product image */}
                  <div className="relative mb-4 flex-shrink-0">
                    <div className="w-full h-74 rounded-xl overflow-hidden border border-white/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Floating icons */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Product info */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold  mb-2 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className=" text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and actions */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                    </div>

                    <div className="flex gap-2">
                     <Link href={`/products/${product._id}`}>
                      <button
                        // onClick={onViewDetails}
                        className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-xl border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        Details
                      </button></Link>
                      {/* <button className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
                        <ShoppingCart className="w-5 h-5" />
                      </button> */}
                    </div>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-white/30 rounded-full animate-pulse`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
