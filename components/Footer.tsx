import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Crochet Corner. All Rights Reserved.</p>
        <p className="mt-1">Handmade with ❤️ and yarn.</p>
      </div>
    </footer>
  );
};

export default Footer;