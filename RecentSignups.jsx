import React from 'react';

const mockUsers = [
  { name: 'Aarav Shah', email: 'aarav@example.com', joined: '2h ago' },
  { name: 'Diya Verma', email: 'diya@example.com', joined: '5h ago' },
  { name: 'Kabir Singh', email: 'kabir@example.com', joined: '1d ago' },
];

const RecentSignups = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">Recent Signups</h2>
      <ul className="space-y-4">
        {mockUsers.map((user, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-4 bg-[#f9fbfa] rounded-lg shadow-sm"
          >
            <div>
              <p className="text-[#1a3d35] font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <span className="text-sm text-gray-400">{user.joined}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecentSignups;
