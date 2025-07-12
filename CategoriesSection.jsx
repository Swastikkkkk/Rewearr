// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from './FirebaseConfig';
// import sampleImage from '../assets/image.png';
// import Lottie from 'react-lottie-player';
// import acc from "../assets/acc.jpg";
// import acc1 from "../assets/kid.jpg";
// import acc2 from "../assets/west.jpg";
// import acc5 from "../assets/Sport.jpg";
// import acc3 from "../assets/trad.jpg";
// import acc6 from "../assets/mod.jpg";
// const categories = [
//   { title: 'Traditional', image: acc3 },
//   { title: 'Modern', image: acc6 },
//   { title: 'Western', image: acc2 },
//   { title: 'SportsWear', image: acc5 },
//   { title: 'Kidswear', image: acc1 },
//   { title: 'Accessories', image: acc },
// ];

// const CategoriesSection = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   const handleCategoryClick = (category) => {
//     const user = auth.currentUser;
//     if (!user) {
//       setShowModal(true);
//       return;
//     }
//     navigate(`/category/${category.toLowerCase()}`);
//   };

//   return (
//     <section className="w-full bg-[#f0f4f3] py-16">
//       <div className="max-w-[1400px] w-full mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-[#1a3d35] mb-12">
//           Browse by Category
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {categories.map((cat) => (
//             <div
//               key={cat.title}
//               onClick={() => handleCategoryClick(cat.title)}
//               className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-[1.03] bg-white"
//             >
//               <div className="w-full h-64 relative">
//                 <img
//                   src={cat.image}
//                   alt={cat.title}
//                   className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:brightness-50"
//                 />
//               </div>
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                 <h3 className="text-white text-2xl font-semibold bg-black/50 px-6 py-2 rounded-xl backdrop-blur-sm">
//                   {cat.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Login Prompt Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-3 text-xl text-gray-400 hover:text-red-500"
//             >
//               &times;
//             </button>
//             <Lottie
//               loop
//               animationData={loginWarning}
//               play
//               style={{ width: 200, height: 200, margin: '0 auto' }}
//             />
//             <h3 className="text-lg font-semibold text-[#1a3d35]">Please log in to continue</h3>
//             <p className="text-sm text-gray-500 mt-2 mb-4">You must be signed in to view this category.</p>
//             <button
//               onClick={() => {
//                 setShowModal(false);
//                 navigate('/login');
//               }}
//               className="bg-[#447d68] text-white px-4 py-2 rounded-lg hover:bg-[#366755] transition"
//             >
//               Go to Login
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CategoriesSection;
// CategoriesSection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './FirebaseConfig';
import Lottie from 'react-lottie-player';
 // Your animation file
import acc from "../assets/acc.jpg";
import acc1 from "../assets/kid.jpg";
import acc2 from "../assets/west.jpg";
import acc5 from "../assets/Sport.jpg";
import acc3 from "../assets/trad.jpg";
import acc6 from "../assets/mod.jpg";

const categories = [
  { title: 'Traditional', image: acc3 },
  { title: 'Modern', image: acc6 },
  { title: 'Western', image: acc2 },
  { title: 'SportsWear', image: acc5 },
  { title: 'Kidswear', image: acc1 },
  { title: 'Accessories', image: acc },
];

const CategoriesSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleCategoryClick = (category) => {
    const user = auth.currentUser;
    const path = `/category/${category.toLowerCase()}`;
    if (!user) {
      localStorage.setItem('postLoginRedirect', path); // Save clicked path
      setShowModal(true);
      return;
    }
    navigate(path);
  };

  return (
    <section className="w-full bg-[#f0f4f3] py-16">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a3d35] mb-12">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => handleCategoryClick(cat.title)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-[1.03] bg-white"
            >
              <div className="w-full h-64 relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-semibold bg-black/50 px-6 py-2 rounded-xl backdrop-blur-sm">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl text-gray-400 hover:text-red-500"
            >
              &times;
            </button>
            <Lottie
              loop
              animationData={loginWarning}
              play
              style={{ width: 200, height: 200, margin: '0 auto' }}
            />
            <h3 className="text-lg font-semibold text-[#1a3d35]">Please log in to continue</h3>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              You must be signed in to view this category.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate('/login');
              }}
              className="bg-[#447d68] text-white px-4 py-2 rounded-lg hover:bg-[#366755] transition"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
