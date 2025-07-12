import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f6f5] text-center px-4">
      <h1 className="text-6xl font-bold text-[#447d68]">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! Page not found.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-[#447d68] text-white rounded-lg hover:bg-[#366755]">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
