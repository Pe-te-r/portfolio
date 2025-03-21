import React from "react";
import { motion } from "framer-motion";
// import { blogsData } from "./blogData";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};


const BlogPage: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-6 mt-9 font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Under Construction Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
          🚧 Under Construction 🚧
        </h2>
        <p className="text-yellow-700">
          This blog is currently under construction. I'm working hard to bring
          you amazing content. Please check back soon!
        </p>
        <p className="text-yellow-700 mt-4">
          In the meantime, feel free to explore other pages.
        </p>
      </div>

      {/* <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
        My Blog
      </h1> */}

      {/* Blog Posts Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants} 
      >
        {/* {blogsData.length>0 && blogsData.map((blog) => (
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
              <Link
                to={blog.link}
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))} */}
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;