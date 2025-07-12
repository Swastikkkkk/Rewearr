// // import React from 'react';
// // import CountUp from 'react-countup';
// // import { FaTint, FaPeopleCarry, FaLeaf } from 'react-icons/fa';

// // const impacts = [
// //   {
// //     icon: <FaTint className="text-[#2b7a78] text-5xl mb-4" />,
// //     label: 'Liters of Water Saved',
// //     value: 20000,
// //     suffix: 'L',
// //     color: 'text-[#2b7a78]',
// //   },
// //   {
// //     icon: <FaPeopleCarry className="text-[#3a506b] text-5xl mb-4" />,
// //     label: 'People Helped',
// //     value: 500,
// //     suffix: '+',
// //     color: 'text-[#3a506b]',
// //   },
// //   {
// //     icon: <FaLeaf className="text-[#519872] text-5xl mb-4" />,
// //     label: 'Environmental Wins',
// //     value: 120,
// //     suffix: '+',
// //     color: 'text-[#519872]',
// //   },
// // ];

// // const ImpactSection = () => {
// //   return (
// //     <section className="bg-white py-20 px-4 w-full">
// //       <div className="max-w-6xl mx-auto text-center">
// //         <h2 className="text-4xl font-bold text-[#1a3d35] mb-12">Our Impact So Far</h2>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {impacts.map((impact, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#f0f4f3] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
// //             >
// //               <div className="flex justify-center">{impact.icon}</div>
// //               <h3 className={`text-3xl font-bold mt-4 ${impact.color}`}>
// //                 <CountUp end={impact.value} duration={2} />{impact.suffix}
// //               </h3>
// //               <p className="mt-2 text-[#1a3d35] font-medium">{impact.label}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ImpactSection;
// import React from 'react';
// import CountUp from 'react-countup';
// import { FaTint, FaPeopleCarry, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';

// const impacts = [
//   {
//     icon: <FaTint className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
//     label: 'Liters of Water Saved',
//     value: 20000,
//     suffix: 'L',
//     color: 'text-blue-600',
//   },
//   {
//     icon: <FaPeopleCarry className="text-yellow-600 text-6xl mb-4 drop-shadow-md" />,
//     label: 'People Helped',
//     value: 500,
//     suffix: '+',
//     color: 'text-yellow-700',
//   },
//   {
//     icon: <FaLeaf className="text-green-600 text-6xl mb-4 drop-shadow-md" />,
//     label: 'Environmental Wins',
//     value: 120,
//     suffix: '+',
//     color: 'text-green-700',
//   },
// ];

// const ImpactSection = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-[#e0f7ec] to-[#f1f8f6] py-20 px-4 w-full overflow-hidden">
//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3d35] mb-4 tracking-tight">
//           Our Impact So Far
//         </h2>
//         <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
//           Every small action makes a big difference. Here's what our community has achieved together.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {impacts.map((impact, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.03]"
//             >
//               <div className="flex justify-center">{impact.icon}</div>
//               <h3 className={`text-4xl font-bold mt-4 ${impact.color}`}>
//                 <CountUp end={impact.value} duration={2} />{impact.suffix}
//               </h3>
//               <p className="mt-2 text-[#1a3d35] font-medium text-lg">{impact.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Earth call to action */}
//         <div className="mt-20 text-center flex flex-col items-center justify-center">
//           <FaGlobeAmericas className="text-[#1a3d35] text-7xl mb-4 animate-pulse" />
//           <h3 className="text-3xl md:text-4xl font-bold text-[#1a3d35]">
//             You’re Helping Save the 🌍
//           </h3>
//           <p className="mt-4 text-gray-600 text-lg max-w-xl">
//             With every item reused or donated, we reduce waste, save water, and take one step closer to a greener future.
//           </p>
//           <button className="mt-6 bg-[#447d68] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#366755] transition-all duration-300 shadow-md">
//             Contribute to the Cause
//           </button>
//         </div>
//       </div>

//       {/* Soft background globe */}
//       <div className="absolute bottom-0 right-0 opacity-10 z-0">
//         <FaGlobeAmericas className="text-[250px] text-green-500" />
//       </div>
//     </section>
//   );
// };

// export default ImpactSection;
import React from 'react';
import CountUp from 'react-countup';
import { FaTint, FaPeopleCarry, FaExchangeAlt, FaGlobeAmericas } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const impacts = [
  {
    icon: <FaTint className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
    label: 'Water Saved',
    value: 20000,
    suffix: 'L',
    color: 'text-blue-600',
    description: 'Liters of water saved through reused fashion',
  },
  {
    icon: <FaPeopleCarry className="text-yellow-600 text-6xl mb-4 drop-shadow-md" />,
    label: 'People Helped',
    value: 2000,
    suffix: '+',
    color: 'text-yellow-700',
    description: 'Lives touched through sustainable choices',
  },
  {
    icon: <FaExchangeAlt className="text-green-600 text-6xl mb-4 drop-shadow-md" />,
    label: 'Exchanges Made',
    value: 1050,
    suffix: '+',
    color: 'text-green-700',
    description: 'Successful item exchanges across categories',
  },
];

const ImpactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-[#e6f7f2] to-[#f4faf7] py-20 px-4 w-full overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3d35] mb-4 tracking-tight">
          Our Collective Impact
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Your small contributions are driving massive environmental change. Here's what we've achieved together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.03]"
            >
              <div className="flex justify-center">{impact.icon}</div>
              <h3 className={`text-4xl font-bold mt-4 ${impact.color}`}>
                <CountUp end={impact.value} duration={2} />{impact.suffix}
              </h3>
              <p className="mt-1 text-xl font-semibold text-[#1a3d35]">{impact.label}</p>
              <p className="mt-2 text-gray-500 text-sm">{impact.description}</p>
            </div>
          ))}
        </div>

        {/* Earth call to action */}
        <div className="mt-20 text-center flex flex-col items-center justify-center">
          <FaGlobeAmericas className="text-[#1a3d35] text-7xl mb-4 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a3d35] leading-snug">
            Be a part of the movement to save our planet 🌍
          </h3>
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            Every item you share or receive reduces waste and brings us one step closer to a sustainable future.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="mt-6 bg-[#447d68] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#366755] transition-all duration-300 shadow-md"
          >
            Contribute to the Cause
          </button>
        </div>
      </div>

      {/* Soft background globe */}
      <div className="absolute bottom-0 right-0 opacity-10 z-0">
        <FaGlobeAmericas className="text-[250px] text-green-500" />
      </div>
    </section>
  );
};

export default ImpactSection;

