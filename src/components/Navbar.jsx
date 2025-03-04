import React, { useContext, useState } from "react";
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaMoon, FaSignInAlt, FaSun } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const html = document.documentElement;
    if (isDarkMode) {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About</NavLink>
      <NavLink to="/#features">Features</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {user ? (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <Link
            className="flex justify-between items-center gap-1 text-lg font-semibold"
            onClick={logOut}
          >
            Logout
          </Link>
        </>
      ) : (
        <NavLink to="/login">
          <div className="flex justify-between items-center gap-1">
            <FaSignInAlt className="mr-2" />
            Login
          </div>
        </NavLink>
      )}
      <NavLink onClick={toggleTheme}>
        <div className="flex justify-between items-center gap-1">
          {isDarkMode ? (
            <FaSun className="text-md" />
          ) : (
            <FaMoon className="text-md" />
          )}
        </div>
      </NavLink>
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-blue-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">Taskify</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center ">{links}</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-blue-600">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-4 py-4">{links}</div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <motion.a
    href={to}
    className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
