import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const p = await params;
    const productsCollection = dbConnect("products");
    const data = await productsCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};