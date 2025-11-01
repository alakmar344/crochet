
import React from 'react';
import type { CrochetItem } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  items: CrochetItem[];
  onBuyNow: (item: CrochetItem) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ items, onBuyNow }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} onBuyNow={onBuyNow} />
      ))}
    </div>
  );
};

export default ProductGrid;
