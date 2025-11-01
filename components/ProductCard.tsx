import React from 'react';
import type { CrochetItem } from '../types';

interface ProductCardProps {
  item: CrochetItem;
  onBuyNow: (item: CrochetItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onBuyNow }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
      <img 
        src={item.imageUrl} 
        alt={item.name} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-bold text-gray-800">${item.price.toFixed(2)}</p>
          <button 
            onClick={() => onBuyNow(item)}
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;