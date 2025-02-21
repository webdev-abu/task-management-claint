// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-[calc(100vh-65px)] mt-[65px] flex items-center justify-center bg-base-200">
//       <div className="card bg-base-100 shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Welcome Task Management
//         </h2>
//         <form className="space-y-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="email"
//               placeholder="Email"
//               className="input input-bordered focus:border-1 focus:border-blue-600 focus:outline-0"
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
//               className="input input-bordered focus:border-1 focus:border-blue-600 focus:outline-0"
//               required
//             />
//           </div>
//           <div className="form-control mt-6">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-primary hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { motion } from "framer-motion";
// import { FaGoogle } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-base-200">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Task Manager Login
//         </h2>

//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full input input-bordered focus:border-1 focus:border-blue-600 focus:outline-0"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full input input-bordered focus:border-1 focus:border-blue-600 focus:outline-0"
//               required
//             />
//           </div>

//           <button className="w-full btn btn-primary">Login</button>
//         </form>

//         <div className="divider">OR</div>

//         <button className="w-full btn btn-outline flex items-center justify-center gap-2">
//           <FaGoogle /> Login with Google
//         </button>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-primary">
//             Sign up
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Task Manager Login
        </h1>

        {/* Login Form */}
        <form className="space-y-6">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500  focus:border-blue-600 focus:outline-0"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="mt-6">
          <p className="text-center text-gray-600">Or login with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300">
              <FaGoogle size={20} />
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
