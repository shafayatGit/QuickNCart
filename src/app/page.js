"use client";
import Link from "next/link";
import { ShoppingBag, Star, Truck, Shield, Headphones } from "lucide-react";

export default function LandingPage() {
  const handleWhyUs = () => {
    const go = document.getElementById("whyUs");
    go.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <main>
        <section className="bg_1 h-[90vh] flex flex-col justify-center items-center relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/40 bg-opacity-20"></div>

          {/* Floating Elements */}
          {/* <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-400 bg-opacity-20 rounded-full blur-xl animate-pulse delay-500"></div> */}

          <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Welcome to
                <span className="">QuickNCart</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Your ultimate destination for quick and convenient online
                shopping. Discover amazing products with lightning-fast
                delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/products"}>
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Shop Now
                  </button>
                </Link>
                <Link href={""}>
                  <button
                    onClick={handleWhyUs}
                    className=" text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="whyUs" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose QuickNCart?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We are committed to providing you with the best shopping
                experience possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Truck className="h-12 w-12 text-blue-600" />,
                  title: "Fast Delivery",
                  description:
                    "Lightning-fast shipping with same-day delivery options available",
                },
                {
                  icon: <Shield className="h-12 w-12 text-green-600" />,
                  title: "Secure Shopping",
                  description:
                    "Your data is protected with enterprise-grade security measures",
                },
                {
                  icon: <Star className="h-12 w-12 text-yellow-500" />,
                  title: "Premium Quality",
                  description:
                    "Only the highest quality products from trusted brands and sellers",
                },
                {
                  icon: <Headphones className="h-12 w-12 text-purple-600" />,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock customer support to help with any questions",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <ShoppingBag className="h-16 w-16 text-blue-600 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers and discover your next
              favorite product
            </p>
            <Link href={"/products"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Explore Products
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
