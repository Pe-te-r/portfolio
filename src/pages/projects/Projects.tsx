import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "./projectArray";


// Categories for filtering
const categories = ["all", "api", "frontend", "javascript", "css", "fullstack"];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className="container mx-auto px-6 mt-9 font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
        My Projects
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to first page when category changes
            }}
            className={`px-6 py-2 rounded-lg cursor-pointer font-semibold transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            {/* Project Preview (Live Link) */}
            <iframe
              src={project.liveLink}
              title={project.title}
              className="w-full h-48 border-none"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({
          length: Math.ceil(filteredProjects.length / projectsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded-lg font-semibold transition-colors duration-300 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;