import React from 'react';
import HeroSection from './home/HeroSection';
import SkillsSection from './home/SkillsSection';

const HomeSection: React.FC = () => {
  const alternativeMessages = [
    'A Tech Enthusiast with a Passion for Innovation',
    'Python Expert | Building Scalable Backend Systems',
    'TypeScript Pro | Crafting Robust and Maintainable APIs',
    'Full Stack Developer | Bridging Frontend and Backend Seamlessly',
    'Problem Solver | Turning Complex Ideas into Simple Solutions',
    'Open to Collaborating on Exciting Projects!',
    'Let’s Build the Future, One Line of Code at a Time!',
  ];
  
  return (
    <div>
      <HeroSection messages={alternativeMessages} />
      <SkillsSection />
    </div>
  );
};

export default HomeSection;