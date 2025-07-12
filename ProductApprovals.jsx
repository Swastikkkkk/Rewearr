import React, { useState } from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const mockProducts = [
  { id: '1', name: 'Denim Jacket', uploader: 'diya@example.com' },
  { id: '2', name: 'Recycled Tote Bag', uploader: 'aarav@example.com' },
  { id: '3', name: 'Vintage Sunglasses', uploader: 'kabir@example.com' },
];

const ProductApprovals = () => {
  const [products, setProducts] = useState(mockProducts);

  const handleApprove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    alert('Product approved!');
  };

  const handleReject = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    alert('Product rejected!');
  };

  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">Product Approvals</h2>
      {products.length === 0 ? (
        <p className="text-gray-500 text-sm">No products pending approval.</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center p-4 bg-[#f9fbfa] rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-[#1a3d35]">{product.name}</h3>
                <p className="text-sm text-gray-500">Uploaded by: {product.uploader}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleApprove(product.id)}
                  className="text-green-600 hover:text-green-800"
                >
                  <FiCheckCircle size={20} />
                </button>
                <button
                  onClick={() => handleReject(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiXCircle size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductApprovals;
