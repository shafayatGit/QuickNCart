"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  X,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Zap,
  Shield,
  Headphones,
  Battery,
  Bluetooth,
} from "lucide-react";
import Image from "next/image";

export default function page({ params }) {
  const [product, setProduct] = useState(null);
  const p = params;

  const fetchBlogData = async () => {
    const blog = await axios.get(`/api/products?id=${p.id}`);
    // const singleBlog = blogs.filter((b) => b._id === p.id);
    setProduct(blog.data);
  };
  console.log(product);

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <>
      {product ? (
        <div className="relative z-10 overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-white/20 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 text-white bg-white/10 border border-white/30 rounded-full  text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white " />
                  ))}
                  <span className="text-sm ml-2 text-white">
                    4.9 (2,847 reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-6">
            <div className="grid items-center lg:grid-cols-2 gap-8">
              {/* Left column - Image and gallery */}
              <div>
                <div className="relative mb-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      width={60}
                      height={60}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                      <Zap className="w-6 h-6 " />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg border border-gray-400">
                      <Shield className="w-6 h-6 " />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Product info */}
              <div>
                <h1 className="text-4xl font-bold  mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold ">${product.price}</span>
                  <span className="text-gray-400 line-through text-xl">
                    $159
                  </span>
                  <span className="px-3 py-1 bg-white/10 border border-white/30 rounded-full  text-sm font-medium">
                    25% OFF
                  </span>
                </div>

                <p className="leading-relaxed mb-8 text-lg">
                  {product.description} Experience premium audio quality with
                  cutting-edge technology that adapts to your environment.
                  Perfect for music lovers, professionals, and anyone who values
                  exceptional sound quality.
                </p>

                {/* Action buttons */}
                {/* <div className="flex gap-4 mb-6">
                        <button className="flex-1 bg-white hover:bg-gray-200 text-black px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                          <ShoppingCart className="w-5 h-5" />
                          Add to Cart
                        </button>
                        <button className="p-4 bg-black/50 hover:bg-gray-800/50  rounded-xl border border-white/20 transition-all duration-300 hover:shadow-lg">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-4 bg-black/50 hover:bg-gray-800/50  rounded-xl border border-white/20 transition-all duration-300 hover:shadow-lg">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div> */}

                {/* Additional info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 ">
                    <Shield className="w-5 h-5 " />
                    <span>Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <Zap className="w-5 h-5 " />
                    <span>Fast delivery in 2-3 business days</span>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <Heart className="w-5 h-5 " />
                    <span>30-day money back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <> No Product Found!</>
      )}
    </>
  );
}
