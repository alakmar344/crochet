import React from 'react';
import type { CrochetItem } from '../types';

interface ProductCardProps {
  item: CrochetItem;
  onBuyNow: (item: CrochetItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onBuyNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl">
      <img 
        src={item.imageUrl} 
        alt={item.name} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-text mb-2 font-serif">{item.name}</h3>
        <p className="text-gray-600 flex-grow mb-4">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-2xl font-bold text-brand-brown font-serif">${item.price.toFixed(2)}</p>
          <button 
            onClick={() => onBuyNow(item)}
            className="bg-brand-pink text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-pink-500 transition-colors duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
