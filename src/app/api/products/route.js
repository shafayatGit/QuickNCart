import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req) {
  const productsCollection = dbConnect("products");

  const productId = req.nextUrl.searchParams.get("id");
  if (productId) {
    const product = await productsCollection.findOne({
      _id: new ObjectId(productId),
    });
    return NextResponse.json(product);
  } else {
    const data = await productsCollection.find().toArray();
    return NextResponse.json(data);
  }
}

export async function POST(req) {
  const body = await req.json();
  const productsCollection = dbConnect("products");
  const result = productsCollection.insertOne(body);
  return NextResponse.json({ success: true, message: "Product Added" });
}
