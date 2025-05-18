import Link from "next/link";

import { PRODUCTS } from "@/data/products";

export default function Products() {
  return (
    <main>
      <div>
        <h3>have you heard of our products?</h3>
        <ul>
          {PRODUCTS.map((p, i) => (
            <li key={i}>
              <Link href={`/products/${p.id}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
