import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../links";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Me", path: "/about" },
//   { name: "Skills Set", path: "/skills" },
//   { name: "Contact", path: "/contact" },
//   { name: "Projects", path: "/projects" },
//   { name: "Blog", path: "/blogs" },
// ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on the current path
  useEffect(() => {
    const index = navLinks.findIndex((link) => link.path === location.pathname);
    setActiveIndex(index !== -1 ? index : 0);
  }, [location.pathname]);

  return (
    <motion.nav
      className="fixed w-full top-0 left-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Animation */}
        <motion.div
          className="text-2xl font-extrabold text-white cursor-pointer tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          Phantom
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              className={`relative px-4 py-2 cursor-pointer text-lg transition-all duration-300 ${
                activeIndex === index
                  ? "text-yellow-300 font-bold bg-blue-700 rounded-lg"
                  : "text-white/90 hover:text-yellow-300"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={link.path} className="py-4">{link.name}</Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-blue-500/95 shadow-lg py-4 px-6 absolute top-full left-0 w-full ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-4">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className={`px-4 py-2 text-white/90 hover:text-yellow-300 cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "text-yellow-300 font-bold bg-blue-700 rounded-lg"
                  : ""
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={link.path} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}