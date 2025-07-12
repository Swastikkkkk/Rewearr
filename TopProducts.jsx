import React from 'react';

const topProducts = [
  { name: 'Recycled Cotton Shirt', uploads: 45 },
  { name: 'Eco Sneakers', uploads: 38 },
  { name: 'Vintage Bag', uploads: 31 },
];

const TopProducts = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">Top Uploaded Products</h2>
      <ul className="space-y-4">
        {topProducts.map((item, i) => (
          <li
            key={i}
            className="flex justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
          >
            <span className="text-[#1a3d35] font-medium">{item.name}</span>
            <span className="text-sm text-gray-500">{item.uploads} uploads</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopProducts;
