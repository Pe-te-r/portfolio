import React from "react";
import { motion } from "framer-motion";
import { skills, SkillsCategory } from "./skills";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillCard: React.FC<SkillsCategory> = ({ category, items }) => {
  return (
    <motion.div
      className="mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="text-blue-600 mb-4 hover:text-blue-700 transition-colors duration-300">
              {item.icon}
            </div>
            <p className="text-xl font-semibold text-gray-700">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <motion.div
      id="skills"
      className="pt-7 px-4 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="text-center text-3xl sm:text-4xl font-bold mb-12 text-gray-800"
        variants={itemVariants}
      >
        Skills Set
      </motion.h3>
      <div className="max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={index} category={skill.category} items={skill.items} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;