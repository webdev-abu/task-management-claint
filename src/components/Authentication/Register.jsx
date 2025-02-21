import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { saveUser } from "../../API/Utils";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      //2. User Registration
      const result = await createUser(email, pass);

      await updateUserProfile(name);
      setUser({ ...result.user, displayName: name });
      await saveUser({ ...result.user, displayName: name });
      toast.success("Signup Successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.message);
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
        <title>Register | Task Management Application</title>
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

          {/* Register Form */}
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="name"
                name="name"
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
              Register
            </button>
          </form>

          {/* Social Register Buttons */}
          <div className="mt-6">
            <p className="text-center text-gray-600">Or Register with</p>
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
    </>
  );
};

export default Register;
