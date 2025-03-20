import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hi, I'm Phantom</h2>
        <p className="text-lg text-gray-700">
          I'm a Full Stack Developer with a passion for building innovative and
          user-friendly solutions. I specialize in React, Node.js, and Python,
          and I'm always excited to take on new challenges.
        </p>
      </section>

      {/* My Story */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <p className="text-lg text-gray-700">
          I discovered my passion for coding during my college years when I built
          my first website. Since then, I've worked on various projects, from
          small startups to large-scale applications, constantly pushing myself to
          learn and grow.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Problem-solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-700">XYZ Company (2021–Present)</p>
            <p className="text-gray-700">
              Developed and maintained web applications using React and Node.js,
              improving user engagement by 30%.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
            <p className="text-gray-700">Self-Employed (2019–2021)</p>
            <p className="text-gray-700">
              Built custom websites for small businesses, focusing on responsive
              design and SEO optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-700">University of ABC (2017–2021)</p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <p className="text-lg text-gray-700">
          When I'm not coding, I enjoy hiking, photography, and playing the
          guitar. I'm also a huge fan of sci-fi movies and love exploring new
          technologies.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
        <p className="text-lg text-gray-700 mb-4">
          Interested in working together? Feel free to reach out via{" "}
          <a href="mailto:your.email@example.com" className="text-blue-600">
            email
          </a>{" "}
          or check out my{" "}
          <a href="/projects" className="text-blue-600">
            Projects
          </a>{" "}
          and{" "}
          <a href="/blog" className="text-blue-600">
            Blog
          </a>{" "}
          for more insights into my work.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;