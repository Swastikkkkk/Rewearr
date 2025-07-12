import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div className="min-h-screen p-6 bg-[#f3f6f5]">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#1a3d35] mb-4">Product Detail</h2>
        <p className="text-gray-600">Details for product ID: <strong>{productId}</strong></p>
        {/* Add image carousel, item info, and Swap/Redeem buttons */}
      </div>
    </div>
  );
};

export default ProductDetail;
