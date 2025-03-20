import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-600 to-blue-400 text-white px-6">
      
      {/* Hero Text */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-yellow-300">Your Name</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-white/90"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A passionate Full-Stack Developer building amazing digital experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link to="/projects" className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-all">
          View My Work
        </Link>
        <Link to="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
          Hire Me
        </Link>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="mt-12 flex space-x-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md">React</span>
        <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md">TypeScript</span>
        <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md">Flask</span>
        <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md">PostgreSQL</span>
      </motion.div>

    </div>
  );
}
