import React from 'react';
import { Badge } from '@/components/ui/badge';

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'RESTful APIs'];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;