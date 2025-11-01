
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Crochet Corner. All Rights Reserved.</p>
        <p className="text-sm mt-1">Handmade with ❤️ and yarn.</p>
      </div>
    </footer>
  );
};

export default Footer;
