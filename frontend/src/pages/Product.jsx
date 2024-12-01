import React from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";

function Product() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen p-8 relative bg-transparent">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-3xl text-white hover:text-red-600"
      >
        &times;
      </button>

      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
