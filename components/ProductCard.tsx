
import React from 'react';
import type { CrochetItem } from '../types';

interface ProductCardProps {
  item: CrochetItem;
  onBuyNow: (item: CrochetItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onBuyNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-64 object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-text mb-2 font-serif">{item.name}</h3>
        <p className="text-gray-600 flex-grow mb-4">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-2xl font-bold text-brand-brown font-serif">${item.price.toFixed(2)}</p>
          <button 
            onClick={() => onBuyNow(item)}
            className="bg-brand-pink text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-pink-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
