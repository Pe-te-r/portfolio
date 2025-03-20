import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Car Rental Website",
    description: "A full-stack car rental platform built with React, Hono, and Drizzle.",
    category: "frontend",
    liveLink: "https://car-rental-website.com",
    sourceCode: "https://github.com/yourusername/car-rental",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "An online store built with React, Node.js, and MongoDB.",
    category: "frontend",
    liveLink: "https://e-commerce-platform.com",
    sourceCode: "https://github.com/yourusername/e-commerce",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    category: "frontend",
    liveLink: "https://portfolio-website.com",
    sourceCode: "https://github.com/yourusername/portfolio",
  },
  {
    id: 4,
    title: "REST API with Express",
    description: "A RESTful API built with Express and MongoDB.",
    category: "api",
    liveLink: "https://express-api.com",
    sourceCode: "https://github.com/yourusername/express-api",
  },
  {
    id: 5,
    title: "Hono Microservice",
    description: "A microservice built with Hono for handling user authentication.",
    category: "api",
    liveLink: "https://hono-microservice.com",
    sourceCode: "https://github.com/yourusername/hono-microservice",
  },
  {
    id: 6,
    title: "Flask Blog API",
    description: "A blog API built with Flask and SQLite.",
    category: "api",
    liveLink: "https://flask-blog-api.com",
    sourceCode: "https://github.com/yourusername/flask-blog-api",
  },
  {
    id: 7,
    title: "CSS Animation Library",
    description: "A library of reusable CSS animations for web projects.",
    category: "css",
    liveLink: "https://css-animation-library.com",
    sourceCode: "https://github.com/yourusername/css-animation-library",
  },
  {
    id: 8,
    title: "JavaScript Game",
    description: "A simple game built with pure JavaScript.",
    category: "javascript",
    liveLink: "https://javascript-game.com",
    sourceCode: "https://github.com/yourusername/javascript-game",
  },
  {
    id: 9,
    title: "FastAPI Todo App",
    description: "A todo app built with FastAPI and React.",
    category: "api",
    liveLink: "https://fastapi-todo-app.com",
    sourceCode: "https://github.com/yourusername/fastapi-todo-app",
  },
  {
    id: 10,
    title: "Vue Dashboard",
    description: "A dashboard built with Vue.js and Tailwind CSS.",
    category: "frontend",
    liveLink: "https://vue-dashboard.com",
    sourceCode: "https://github.com/yourusername/vue-dashboard",
  },
];

// Categories for filtering
const categories = ["all", "api", "frontend", "css", "javascript"];

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
      className="container mx-auto px-6 pt-25 font-inter"
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
            className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
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