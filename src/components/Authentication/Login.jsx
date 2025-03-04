import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Assuming you're using React Router
import { Helmet } from "react-helmet";

import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // Email Password Signin
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      //User Login
      await signIn(email, pass);
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      if (err.code === "Unauthorized") {
        toast.error("Invalid Email or Password");
      } else if (
        err.code === "PERMISSION_DENIED" ||
        err.code === " permission denied"
      ) {
        toast.error("Permission Denied");
      } else if (err.code === "auth/invalid-credential") {
        toast.error("Invalid User!");
        navigate("/registration");
      } else {
        toast.error(err?.message);
      }
    }
  };

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | Task Management Application</title>
      </Helmet>
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

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
              Login
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-6">
            <p className="text-center text-gray-600">Or login with</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300"
              >
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
    </>
  );
};

export default Login;
