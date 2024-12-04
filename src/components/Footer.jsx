import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-8 mt-10">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        
        {/* Website Name and Copyright */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold">
            Movie<span className="text-red-500">Craze</span>
          </h2>
          
        </div>

        {/* Contact Information */}
        <div className="text-center mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: contact@moviecraze.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <Link to="https://facebook.com" target="_blank">
            <FaFacebook className="text-white text-2xl hover:text-red-500 transition-all" />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <FaTwitter className="text-white text-2xl hover:text-red-500 transition-all" />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <FaInstagram className="text-white text-2xl hover:text-red-500 transition-all" />
          </Link>
          <Link to="https://youtube.com" target="_blank">
            <FaYoutube className="text-white text-2xl hover:text-red-500 transition-all" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom (Optional) */}
      <div className="text-center mt-6 border-t-2 border-gray-600 pt-4">
      <p className="text-sm mt-2">© 2024 MovieCraze. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
