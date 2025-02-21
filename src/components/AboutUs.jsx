import React from "react";
import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  // Team member data directly in the component
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "Passionate about building products that simplify life.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Tech enthusiast with a love for problem-solving.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
      role: "Product Manager",
      bio: "Focused on delivering the best user experience.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Task Management Application</title>
      </Helmet>
      <div className="min-h-screen bg-base-200 py-12 mt-[65px]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            We are a passionate team dedicated to making task management simple
            and efficient.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 mt-16 ">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card bg-base-100 shadow-md p-6 text-center"
            >
              <FaUsers className="text-4xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in teamwork and collaboration to achieve great
                things.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card bg-base-100 shadow-md p-6 text-center"
            >
              <FaLightbulb className="text-4xl mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We strive to innovate and bring new solutions to task
                management.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card bg-base-100 shadow-md p-6 text-center"
            >
              <FaRocket className="text-4xl mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Efficiency</h3>
              <p className="text-gray-600">
                Our goal is to make task management faster and more efficient.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <button className="btn btn-primary">Sign Up Now</button>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
