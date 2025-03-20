import React from 'react';
import { skills, SkillsCategory } from './skills';

const SkillCard: React.FC<SkillsCategory> = ({ category, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-blue-600 mb-4 hover:text-blue-700 transition-colors duration-300">
              {item.icon}
            </div>
            <p className="text-xl font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <div id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={index} category={skill.category} items={skill.items} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;