
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MyProducts from './components/user/MyProducts'; // ✅ NEW
// // Public Pages
// import LandingPage from './components/LandingPage';
// import Signup from './components/Signup';
// import Login from './components/Login';

// // User Dashboard Pages
// import UserDashboard from './components/user/UserDashboard';
// import AddListing from './components/user/AddListing';
// import PointsHistory from './components/user/PointsHistory';
// import ProfileDashboard from './components/user/ProfileDashboard'; // ✅ Import this
// // Admin Dashboard Page
// import AdminDashboard from './components/admin/AdminDashboard';

// // Shared Pages
// import ProductDetail from './components/ProductDetail';
// import NotFound from './components/NotFound';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* 🌐 Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* 👤 User Routes */}
//         <Route path="/user" element={<UserDashboard />} />
//         <Route path="/user/add" element={<AddListing />} />
//         <Route path="/user/points" element={<PointsHistory />} />
// <Route path="/user/profile" element={<ProfileDashboard />} />
//         {/* 🛠 Admin Routes */}
//         <Route path="/user/my-products" element={<MyProducts userEmail="user@example.com" />} />
//         <Route path="/admin" element={<AdminDashboard />} />

//         {/* 🔁 Shared Routes */}
//         <Route path="/product/:productId" element={<ProductDetail />} />

//         {/* ❌ 404 Page */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // ✅ Import context

// Public Pages
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';

// User Dashboard Pages
import UserDashboard from './components/user/UserDashboard';
import AddListing from './components/user/AddListing';
import PointsHistory from './components/user/PointsHistory';
import ProfileDashboard from './components/user/ProfileDashboard';
import MyProducts from './components/user/MyProducts';
import CategoryProducts from './components/CategoryProducts'; // 🆕
// Admin Dashboard Page
import AdminDashboard from './components/admin/AdminDashboard';

// Shared Pages
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🌐 Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* 👤 User Routes */}
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/add" element={<AddListing />} />
          <Route path="/user/points" element={<PointsHistory />} />
          <Route path="/user/profile" element={<ProfileDashboard />} />
          <Route path="/user/my-products" element={<MyProducts />} />

          {/* 🛠 Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* 🔁 Shared Routes */}
          <Route path="/product/:productId" element={<ProductDetail />} />
<Route path="/category/:categoryName" element={<CategoryProducts />} />
          {/* ❌ 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

