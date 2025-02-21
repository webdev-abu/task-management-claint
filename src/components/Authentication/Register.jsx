// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card bg-base-100 shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form className="space-y-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="email"
//               placeholder="Email"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control mt-6">
//             <button type="submit" className="btn btn-primary">
//               Register
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-primary hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 mt-[65px]">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Task Management
        </h1>

        {/* Register Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500  focus:border-blue-600 focus:outline-0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500  focus:border-blue-600 focus:outline-0"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500  focus:border-blue-600 focus:outline-0"
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Social Register Buttons */}
        <div className="mt-6">
          <p className="text-center text-gray-600">Or Register with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300">
              <FaGoogle size={20} />
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
