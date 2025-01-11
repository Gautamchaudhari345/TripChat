import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          TravelNow
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-yellow-400">
            Destinations
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-yellow-400 px-4 py-2 rounded-md text-blue-800 font-semibold hover:bg-yellow-500"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-blue-700 px-4 py-3`}
      >
        <Link to="/" className="block text-white py-1 hover:text-yellow-400">
          Home
        </Link>
        <Link
          to="/destinations"
          className="block text-white py-1 hover:text-yellow-400"
        >
          Destinations
        </Link>
        <Link
          to="/about"
          className="block text-white py-1 hover:text-yellow-400"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="block text-white py-1 hover:text-yellow-400"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="block bg-yellow-400 text-blue-800 py-2 mt-2 text-center rounded-md hover:bg-yellow-500"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block bg-yellow-400 text-blue-800 py-2 mt-2 text-center rounded-md hover:bg-yellow-500"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
