import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-400"><Github /></a>
          <a href="#" className="hover:text-gray-400"><Linkedin /></a>
          <a href="#" className="hover:text-gray-400"><Twitter /></a>
        </div>
        <p className="text-center">&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;