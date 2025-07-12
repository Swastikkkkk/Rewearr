// import React from 'react';
// import Navbar from './Navbar';
// import HeroSection from './Herosection';
// import CategoriesSection from './CategoriesSection';
// import ImpactSection from './ImpactSection';
// import Footer from './Footer';

// const LandingPage = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//    <section id="home">...</section>
// <section id="CategoriesSection">...</section>
// <section id="ImpactSection">...</section>

//       <CategoriesSection />
//       <ImpactSection />
//       <Footer/>
//       {/* Add more sections as needed */}
//     </>
//   );
// };

// export default LandingPage;
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection';
import CategoriesSection from './CategoriesSection';
import ImpactSection from './ImpactSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" className="pt-[80px]">
        <HeroSection />
      </section>

      {/* Categories Section */}
      <section id="CategoriesSection" className="pt-[80px]">
        <CategoriesSection />
      </section>

      {/* Impact Section */}
      <section id="ImpactSection" className="pt-[80px]">
        <ImpactSection />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
