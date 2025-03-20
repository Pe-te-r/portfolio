import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Categorized skills
const skills = {
    languages: ["Html","Css","Scss","JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Vue",  "Express", "Hono", "Drizzle", "Flask","FastApi","Node.js",],
    tools: ["Git", "Linux", "OBS Studio", "Audacity", "Shotcut"],
    additional: ["Pygame (Game Development)", "Android Development (Learning)","Machine Learning (Learning)"],
  };

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutMe: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-6 pt-25 font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900"
        variants={itemVariants}
      >
        About Me
      </motion.h1>

      {/* Introduction */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Hi, I'm Phantom
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I'm a passionate Full Stack Developer with a strong focus on building
          innovative, user-friendly solutions. My expertise lies in technologies
          like <strong>React</strong>, <strong>Node.js</strong>, and <strong>Python</strong>, and I thrive on tackling new challenges
          and solving complex problems. I love both <strong>web development</strong> and <strong>software development</strong>,
          with a particular passion for creating <strong>APIs</strong> and <strong>full-stack applications</strong>.
        </p>
      </motion.section>

      {/* My Journey */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          My Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I discovered my love for coding during my second year of university.
          What started as a curiosity quickly turned into a passion as I began
          solving real-world problems through programming. Since then, I've been
          on an exciting journey of self-study and hands-on projects, constantly
          pushing myself to learn and grow.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          In 2024, I earned a certification from <strong>Teach2Give</strong> (April–July), where I
          studied <strong>Drizzle</strong>, <strong>React</strong>, and <strong>Hono</strong>. This experience deepened my understanding
          of modern web development and API design. Additionally, I've completed
          self-study certifications in <strong>Linux+</strong> and <strong>CCNA</strong>, which have equipped me
          with valuable skills in system administration and networking.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-sm"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Languages</h3>
            <ul className="space-y-2">
              {skills.languages.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            className="bg-green-50 p-6 rounded-lg shadow-sm"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-800">Frameworks</h3>
            <ul className="space-y-2">
              {skills.frameworks.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-purple-50 p-6 rounded-lg shadow-sm"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            className="bg-yellow-50 p-6 rounded-lg shadow-sm"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">Additional Skills</h3>
            <ul className="space-y-2">
              {skills.additional.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Experience
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-700">Jitu (2021–Present)</p>
            <p className="text-gray-700">
              At Jitu, I worked on a <strong>car rental website</strong> as part of a team, using
              modern technologies like <strong>Hono</strong>, <strong>React</strong>, and <strong>Drizzle</strong>. This project
              involved building a full-stack application with a focus on
              scalability, performance, and user experience. My role included
              developing APIs, integrating front-end components, and ensuring
              seamless communication between the client and server.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Education
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-gray-700">Kirinyaga University (September 2021–April 2025)</p>
            <p className="text-gray-700">
              My coursework has provided me with a strong foundation in software
              development, system administration, and networking. Through both
              classroom learning and personal projects, I've gained hands-on
              experience with real-world technologies. Additionally, my
              self-teaching journey has allowed me to explore advanced topics
              like <strong>Linux+</strong> and <strong>CCNA</strong>, further enhancing my skill set.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Certifications
        </h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Teach2Give Certification</h3>
            <p className="text-gray-700">April–July 2024</p>
            <p className="text-gray-700">
              Studied <strong>Drizzle</strong>, <strong>React</strong>, and <strong>Hono</strong> to deepen my knowledge of modern
              web development and API design.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Linux+ Certification</h3>
            <p className="text-gray-700">Self-Study</p>
            <p className="text-gray-700">
              Acquired advanced skills in Linux system administration through
              self-study.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">CCNA Certification</h3>
            <p className="text-gray-700">Self-Study</p>
            <p className="text-gray-700">
              Gained expertise in networking and Cisco technologies through
              self-study.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Interests */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Interests
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            When I'm not coding, I enjoy playing chess, which helps me sharpen my
            strategic thinking, and going on bicycle rides to clear my mind and stay
            active. I'm also passionate about <strong>game development</strong> and love creating games
            using <strong>Pygame</strong>. Beyond web development, I'm exploring other technologies like
            <strong>Android development</strong> to expand my skill set. Additionally, I have experience
            with tools like <strong>OBS Studio</strong>, <strong>Audacity</strong>, and <strong>Shotcut</strong> for video and audio editing.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Projects
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Over the years, I've worked on a variety of real-world projects that
            have helped me grow as a developer. From web applications to system
            administration tools and games, each project has been a learning
            experience. Check out my{" "}
            <Link to="/projects" className="text-blue-600 hover:underline">
              Projects
            </Link>{" "}
            page to see more!
          </p>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="text-center" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Let's Connect!
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Interested in working together or learning more about my work? Feel free
            to reach out via{" "}
            <a href="mailto:peterwahu0@gmail.com" className="text-blue-600 hover:underline">
              email
            </a>{" "}
            or explore my{" "}
            <Link to="/projects" className="text-blue-600 hover:underline">
              Projects
            </Link>{" "}
            and{" "}
            <Link to="/blog" className="text-blue-600 hover:underline">
              Blog
            </Link>{" "}
            for more insights into my work.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutMe;