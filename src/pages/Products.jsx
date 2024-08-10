import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto px-6 py-3">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-40"
            />
            <h3 className="mt-2 text-lg">{product.title}</h3>
            <p className="mt-1 text-gray-600">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-4 block bg-blue-500 text-white text-center py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
