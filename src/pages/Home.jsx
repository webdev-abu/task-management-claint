// import React from "react";
// import { motion } from "framer-motion";
// import { FaTasks, FaCalendarAlt, FaUsers, FaRocket } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="bg-base-100">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="hero min-h-screen bg-base-200"
//       >
//         <div className="hero-content text-center">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl font-bold text-primary">Taskify</h1>
//             <p className="py-6 text-lg">
//               The ultimate task management tool to organize your work, boost
//               productivity, and achieve your goals.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn btn-primary"
//             >
//               Get Started
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Features Section */}
//       <div className="py-20 bg-base-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="card bg-base-200 shadow-lg p-6 text-center"
//             >
//               <FaTasks className="text-4xl text-primary mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Task Management</h3>
//               <p className="text-gray-600">
//                 Easily create, organize, and prioritize tasks to stay on top of
//                 your work.
//               </p>
//             </motion.div>

//             {/* Feature 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="card bg-base-200 shadow-lg p-6 text-center"
//             >
//               <FaCalendarAlt className="text-4xl text-primary mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Deadline Tracking</h3>
//               <p className="text-gray-600">
//                 Set deadlines and get reminders to ensure you never miss a task.
//               </p>
//             </motion.div>

//             {/* Feature 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="card bg-base-200 shadow-lg p-6 text-center"
//             >
//               <FaUsers className="text-4xl text-primary mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
//               <p className="text-gray-600">
//                 Collaborate with your team and assign tasks seamlessly.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Call-to-Action Section */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="py-20 bg-base-200"
//       >
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Ready to Boost Your Productivity?
//           </h2>
//           <p className="text-lg mb-8">
//             Join thousands of users who are already managing their tasks
//             efficiently with Taskify.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn btn-primary"
//           >
//             <FaRocket className="mr-2" />
//             Sign Up Now
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaCalendarAlt, FaUsers, FaRocket } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mt-[65px]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero min-h-[calc(100vh-65px)] bg-base-200"
      >
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary">Taskify</h1>
            <p className="py-6 text-lg">
              Manage your tasks efficiently and boost your productivity with
              Taskify. Organize, prioritize, and achieve your goals
              effortlessly.
            </p>
            <button className="btn btn-primary">
              Get Started <FaRocket className="ml-2" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        id="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-base-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card bg-base-200 shadow-lg p-6 text-center"
            >
              <FaTasks className="text-5xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-4">Task Management</h3>
              <p className="mt-2">
                Easily create, organize, and track your tasks.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card bg-base-200 shadow-lg p-6 text-center"
            >
              <FaCalendarAlt className="text-5xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-4">Deadline Tracking</h3>
              <p className="mt-2">
                Never miss a deadline with our smart reminders.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card bg-base-200 shadow-lg p-6 text-center"
            >
              <FaUsers className="text-5xl mx-auto text-primary" />
              <h3 className="text-2xl font-bold mt-4">Team Collaboration</h3>
              <p className="mt-2">
                Collaborate with your team and share tasks seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        id="cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-base-200"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of users who are already managing their tasks with
            Taskify.
          </p>
          <button className="btn btn-primary">
            Sign Up Now <FaRocket className="ml-2" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
