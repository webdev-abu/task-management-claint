import React from "react";
import {
  FaTasks,
  FaCalendarAlt,
  FaCog,
  FaUser,
  FaPlus,
  FaBars,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Set theme on initial load
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex h-screen bg-base-100">
      {" "}
      {/* Use DaisyUI's bg-base-100 for theme-aware background */}
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-20 w-64 bg-base-200 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">TaskMaster</h1>{" "}
          {/* Use DaisyUI's text-primary for theme-aware text */}
        </div>
        <nav className="mt-6">
          <ul>
            <li className="mb-4">
              <Link
                to="/dashboard"
                className="flex items-center px-6 py-2 text-base-content hover:bg-base-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaTasks className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/tasks"
                className="flex items-center px-6 py-2 text-base-content hover:bg-base-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaTasks className="mr-3" />
                Tasks
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/calendar"
                className="flex items-center px-6 py-2 text-base-content hover:bg-base-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaCalendarAlt className="mr-3" />
                Calendar
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/settings"
                className="flex items-center px-6 py-2 text-base-content hover:bg-base-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaCog className="mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-base-content hover:bg-base-300 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaBars className="text-xl" />
            </button>
            <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
              Dashboard
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              className="p-2 text-base-content hover:bg-base-300 rounded-lg"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FaMoon className="text-xl" />
              ) : (
                <FaSun className="text-xl" />
              )}
            </button>
            <button className="btn btn-primary hidden md:flex">
              <FaPlus className="mr-2" />
              New Task
            </button>
            <div className="avatar">
              <div className="w-8 md:w-10 rounded-full">
                <img src="https://via.placeholder.com/150" alt="User" />
              </div>
            </div>
          </div>
        </header>

        {/* Mobile New Task Button */}
        <button className="md:hidden btn btn-primary w-full mb-6">
          <FaPlus className="mr-2" />
          New Task
        </button>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-200 p-4 md:p-6 rounded-lg shadow"
        >
          <Outlet /> {/* This renders the nested routes */}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
