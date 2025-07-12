import React from 'react';

const logs = [
  { time: '10:45 AM', message: 'Admin approved a product' },
  { time: '09:21 AM', message: 'User Diya signed up' },
  { time: 'Yesterday', message: 'User Aarav uploaded 2 items' },
];

const SystemLogs = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">System Logs</h2>
      <ul className="space-y-3">
        {logs.map((log, i) => (
          <li key={i} className="p-3 bg-[#f7fdfc] rounded-lg text-sm shadow-sm text-[#1a3d35]">
            <span className="font-semibold mr-2">{log.time}:</span>
            {log.message}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SystemLogs;
