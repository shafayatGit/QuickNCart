"use client";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProduct() {
    const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.value;
    const category = form.category.value;
    // console.log(name,description,price,image,category)
    const productForm = {
      name,
      description,
      price,
      image,
      category,
    };
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productForm),
      });
      const data = await res.json();
      toast.success(data.message)
router.push("/products")
    //   console.log(data);
    } catch (err) {
      console.error(err);
      toast.error("Product Not added");
    }
  };

  return (
    <div className="max-w-xl h-[70vh] mx-auto flex flex-col items-center mt-34 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="text"
          name="image"
          required
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          name="category"
          required
          placeholder="Category"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
