import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
                Crochet Corner
            </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;