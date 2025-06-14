import Image from "next/image";

import { PRODUCTS } from "@/data/products";

export default async function Product({ params }) {
  const { id } = await params;

  const product = PRODUCTS.find((p) => p.id.toString() === id);

  return (
    <div>
      <h2>{product.name}</h2>
      <Image src={product.image} alt={product.name} height={400} width={400} />
    </div>
  );
}
