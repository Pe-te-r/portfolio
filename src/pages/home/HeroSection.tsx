import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

interface HeroSectionProps {
  messages: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ messages }) => {
  return (
    <div className="flex flex-col pt-4 items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
        Hey, I’m <span className="text-yellow-400">Peter</span>
      </h1>
      <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-center">
        <Typewriter
          options={{
            strings: messages,
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to='/projects' className="cursor-pointer px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          View My Work
        </Link>
        <a
          href="/resume.pdf" // Path to your resume file in the public folder
          download="resume.pdf" // Optional: Specify the downloaded file's name
          className="cursor-pointer px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default HeroSection;