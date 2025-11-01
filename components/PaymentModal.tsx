
import React from 'react';
import type { CrochetItem } from '../types';
import { PAYMENT_PHONE_NUMBER } from '../constants';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CrochetItem | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-lg shadow-2xl p-8 m-4 max-w-md w-full transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {item ? (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-brand-text mb-2 font-serif">Complete Your Purchase</h2>
              <p className="text-gray-600 mb-4">You're about to buy the lovely <span className="font-semibold">{item.name}</span>.</p>
            </div>
            
            <div className="my-6 p-4 bg-brand-cream border border-brand-pink rounded-lg text-center">
              <p className="text-lg text-brand-text mb-2">Please pay the total amount of</p>
              <p className="text-4xl font-bold text-brand-brown mb-4 font-serif">${item.price.toFixed(2)}</p>
              <p className="text-brand-text">to complete your order.</p>
            </div>

            <div className="text-center">
              <p className="text-md text-gray-700">Send payment via UPI (PhonePe, GPay, etc.) to:</p>
              <div className="my-3 p-3 bg-gray-100 rounded-md inline-block">
                <p className="text-xl font-mono font-bold text-brand-text tracking-widest">{PAYMENT_PHONE_NUMBER}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Your item will be shipped after payment confirmation.</p>
            </div>
          </>
        ) : (
          <p>Loading item details...</p>
        )}

        <div className="mt-8 text-center">
          <button 
            onClick={onClose}
            className="bg-brand-pink text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-pink-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
