import React from "react";
import { socialMediaLinks, navLinks } from "../links.tsx";



const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-x-2 flex justify-center items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Email: peterwahu0@gmail.com</p>
            <p className="text-gray-300">Phone: +254 768 543 269</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Phantom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;