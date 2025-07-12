import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 19000 },
  { month: 'Mar', revenue: 15000 },
  { month: 'Apr', revenue: 21000 },
  { month: 'May', revenue: 24000 },
  { month: 'Jun', revenue: 18000 },
];

const RevenueChart = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="revenue" stroke="#1a3d35" strokeWidth={3} />
          <CartesianGrid stroke="#e0e0e0" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueChart;
