import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const handleClose = () => {
    navigate("/");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <p className="text-2xl">Product not found!</p>
        <Link to="/" className="text-blue-600 underline ml-2">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent p-8 relative">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-3xl text-white hover:text-red-600"
      >
        &times;
      </button>

      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-800 mb-6">{product.price}</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
