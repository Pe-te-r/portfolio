import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../links";

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
          <Link to='/'>
          Phantom
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
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
              <Link to={link.path} className="block py-1">
                {link.name}
              </Link>
            </motion.div>
            
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden bg-blue-500/95 shadow-lg py-4 px-6 absolute top-full left-0 w-full ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-2">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className={`w-full ${
                activeIndex === index
                  ? "text-yellow-300 font-bold bg-blue-700 rounded-lg"
                  : "text-white/90 hover:text-yellow-300"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 cursor-pointer"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}