import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 px-6 md:px-16 lg:px-32 py-16"
    >

      {/* About Content Box */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-4xl text-center border-t-4 border-blue-600">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Hi, I’m <span className="font-semibold text-blue-700">Masengesho Odile</span>,
          a dedicated <span className="font-semibold text-gray-900">Computer and Software Engineering student</span> at the
          <span className="text-blue-600 font-medium"> University of Rwanda</span>. I’m passionate about building
          <span className="text-blue-600 font-medium"> creative and efficient digital solutions</span> that make a difference.
        </p>
<br />
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          My main focus is on <span className="font-medium text-blue-700">front-end development</span> using
          modern technologies like <span className="font-medium text-blue-700">React</span>, <span className="font-medium text-blue-700">JavaScript</span>, and <span className="font-medium text-blue-700">Flutter</span>.
          I’m also learning <span className="font-medium text-blue-700">backend development</span> with
          <span className="font-medium text-blue-700"> Node.js</span> and <span className="font-medium text-blue-700">Spring Boot (Java)</span>.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          I’ve worked on impactful projects like <span className="font-semibold text-blue-700">Smart Agro Boost</span> — a mobile app connecting farmers to markets — and
          <span className="font-semibold text-blue-700"> DocuFlow</span>, a document management system. 
          These experiences helped me combine creativity with technical skills to solve real-world challenges.
        </p><br />

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          I’m continuously learning, exploring new technologies, and improving my craft. I’m currently seeking an
          <span className="font-semibold text-blue-700"> internship or junior developer role</span> to grow professionally and contribute to impactful projects.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Outside of coding, I love exploring UI design, reading about emerging tech, and collaborating on innovative ideas.
        </p>
      </div>
    </section>
  );
};

export default About;
