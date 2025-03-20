import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hey, I’m <span className="text-yellow-400">Phantom</span>
      </h1>
      <div className="text-2xl md:text-3xl font-semibold mb-8">
        <Typewriter
          options={{
            strings: [
              'A Full Stack Developer',
              'Experienced in React & Node.js',
              'Passionate about Building Scalable Apps',
              'Let’s Create Something Amazing!',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          View My Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Download My CV
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;