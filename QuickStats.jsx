import React from 'react';
import { FiUsers, FiBox, FiDollarSign } from 'react-icons/fi';

const QuickStats = () => {
  const stats = [
    { label: 'Users', value: 1289, icon: <FiUsers /> },
    { label: 'Products', value: 342, icon: <FiBox /> },
    { label: 'Revenue', value: '₹56,700', icon: <FiDollarSign /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex items-center p-6 bg-white rounded-2xl shadow-md">
          <div className="text-3xl text-[#1a3d35] mr-4">{stat.icon}</div>
          <div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h3 className="text-2xl font-bold text-[#1a3d35]">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
