import React from 'react';
import HeroSection from './home/HeroSection';
import SkillsSection from './home/SkillsSection';


const HomeSection: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
    </div>
  );
};

export default HomeSection;