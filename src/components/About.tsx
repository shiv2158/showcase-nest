import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://via.placeholder.com/400" alt="Profile" className="rounded-full mx-auto object-cover w-64 h-64" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate web developer with experience in creating responsive and user-friendly websites. 
              I love turning complex problems into simple, beautiful, and intuitive designs. 
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;