
import React, { useState, useCallback } from 'react';
import type { CrochetItem } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CrochetItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNow = useCallback((item: CrochetItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    // Delay clearing the item to allow for fade-out animation
    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-text">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid items={PRODUCTS} onBuyNow={handleBuyNow} />
      </main>
      <Footer />
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        item={selectedItem} 
      />
    </div>
  );
};

export default App;
