import { NextResponse } from "next/server";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("q");

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchQuery}`
  );
  const json: ProductsResponse = await response.json();

  const formattedResponse = json.products.map(({ title, id }) => ({
    value: id,
    label: title,
  }));

  return NextResponse.json(formattedResponse);
}
