import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTshirt,
  FaLeaf,
  FaGem,
  FaUserAlt,
  FaQuestionCircle,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a3d35] text-white pt-14 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1. Logo + Mission */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold tracking-wide">ReWear</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Reimagining fashion for a sustainable future. One piece at a time. ♻️
          </p>
          <div className="flex space-x-3 text-2xl text-white mt-4 justify-center md:justify-start">
            <FaTshirt className="hover:text-[#38c172] transition-all duration-300" />
            <FaLeaf className="hover:text-[#38c172] transition-all duration-300" />
            <FaGem className="hover:text-[#38c172] transition-all duration-300" />
          </div>
        </div>

        {/* 2. Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Explore</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-[#38c172] transition-all duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#38c172] transition-all duration-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#38c172] transition-all duration-300">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-[#38c172] transition-all duration-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* 3. Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Categories</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link to="/category/traditional" className="hover:text-[#38c172] transition-all duration-300">Traditional</Link></li>
            <li><Link to="/category/western" className="hover:text-[#38c172] transition-all duration-300">Western</Link></li>
            <li><Link to="/category/accessories" className="hover:text-[#38c172] transition-all duration-300">Accessories</Link></li>
            <li><Link to="/category/kidswear" className="hover:text-[#38c172] transition-all duration-300">Kidswear</Link></li>
          </ul>
        </div>

        {/* 4. Help & Social */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/faq" className="hover:text-[#38c172] transition-all duration-300"><FaQuestionCircle className="inline-block mr-2" /> FAQ</Link></li>
              <li><Link to="/support" className="hover:text-[#38c172] transition-all duration-300"><FaUserAlt className="inline-block mr-2" /> Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f78da7] transition duration-300"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#1da1f2] transition duration-300"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] transition duration-300"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-white/20 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ReWear · Built for conscious living 🌱
      </div>

      {/* Background Image Light Effect (optional) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10 blur-[80px] w-[400px] h-[400px] bg-green-400 rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
