import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { FiUsers, FiBox, FiCheckCircle } from 'react-icons/fi';

const weeklyActivity = [
  { name: 'Mon', logins: 40, uploads: 24 },
  { name: 'Tue', logins: 30, uploads: 13 },
  { name: 'Wed', logins: 20, uploads: 22 },
  { name: 'Thu', logins: 27, uploads: 18 },
  { name: 'Fri', logins: 35, uploads: 28 },
  { name: 'Sat', logins: 23, uploads: 19 },
  { name: 'Sun', logins: 34, uploads: 30 },
];

const userRoleData = [
  { name: 'User', value: 65 },
  { name: 'Admin', value: 10 },
  { name: 'Moderator', value: 25 },
];

const COLORS = ['#447d68', '#1a3d35', '#e1c699'];

const Reports = () => {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[#1a3d35] mb-1">📈 Admin Reports & Analytics</h2>
        <p className="text-sm text-gray-500">Track key metrics and system activity</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-center bg-[#f3f6f5] p-4 rounded-xl shadow-sm">
          <FiUsers className="text-3xl text-[#1a3d35] mr-4" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h3 className="text-xl font-semibold text-[#1a3d35]">320</h3>
          </div>
        </div>
        <div className="flex items-center bg-[#f3f6f5] p-4 rounded-xl shadow-sm">
          <FiBox className="text-3xl text-[#1a3d35] mr-4" />
          <div>
            <p className="text-sm text-gray-500">Total Products</p>
            <h3 className="text-xl font-semibold text-[#1a3d35]">148</h3>
          </div>
        </div>
        <div className="flex items-center bg-[#f3f6f5] p-4 rounded-xl shadow-sm">
          <FiCheckCircle className="text-3xl text-[#1a3d35] mr-4" />
          <div>
            <p className="text-sm text-gray-500">Pending Approvals</p>
            <h3 className="text-xl font-semibold text-[#1a3d35]">12</h3>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h4 className="text-lg font-semibold text-[#1a3d35] mb-4">Weekly Platform Activity</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyActivity}>
            <Line type="monotone" dataKey="logins" stroke="#1a3d35" strokeWidth={2} />
            <Line type="monotone" dataKey="uploads" stroke="#447d68" strokeDasharray="5 5" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h4 className="text-lg font-semibold text-[#1a3d35] mb-4">User Role Distribution</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={userRoleData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {userRoleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
