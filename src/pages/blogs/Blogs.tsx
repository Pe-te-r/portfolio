import React from "react";
import { motion } from "framer-motion";

// Sample blog data
const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "A beginner's guide to understanding React and building your first app.",
    date: "October 10, 2023",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    link: "/blog/getting-started-with-react",
  },
  {
    id: 2,
    title: "Mastering CSS Grid",
    description: "Learn how to create responsive layouts using CSS Grid.",
    date: "October 15, 2023",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    link: "/blog/mastering-css-grid",
  },
  {
    id: 3,
    title: "Introduction to REST APIs",
    description: "Understand the basics of REST APIs and how to use them in your projects.",
    date: "October 20, 2023",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    link: "/blog/introduction-to-rest-apis",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogPage: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-6 pt-25 font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
        My Blog
      </h1>

      {/* Blog Posts Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {blogsData.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
              <a
                href={blog.link}
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;