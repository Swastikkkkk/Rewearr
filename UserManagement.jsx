import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const mockUsers = [
  {
    id: '1',
    name: 'Swastik Dutt',
    email: 'swastik@example.com',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Aarav Mehta',
    email: 'aarav@example.com',
    role: 'user',
  },
  {
    id: '3',
    name: 'Diya Sharma',
    email: 'diya@example.com',
    role: 'user',
  },
  {
    id: '4',
    name: 'Kabir Rao',
    email: 'kabir@example.com',
    role: 'moderator',
  },
];

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f3f6f5] text-[#1a3d35] uppercase text-xs">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#f9fbfa] border-t border-gray-200 transition"
              >
                <td className="px-4 py-3 font-medium text-[#1a3d35]">{user.name}</td>
                <td className="px-4 py-3 text-gray-600">{user.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'admin'
                        ? 'bg-green-100 text-green-700'
                        : user.role === 'moderator'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-4 items-center">
                  <button className="text-[#447d68] hover:text-[#1a3d35] transition">
                    <FiEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
