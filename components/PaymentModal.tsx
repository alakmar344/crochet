import React from 'react';
import type { CrochetItem } from '../types';
import { PAYMENT_PHONE_NUMBER } from '../constants';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CrochetItem | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, item }) => {
  if (!item) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
    >
      <div 
        className={`bg-white rounded-lg p-6 m-4 max-w-sm w-full transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <>
            <div className="text-center">
              <h2 id="payment-modal-title" className="text-xl font-bold text-gray-900 mb-2">Complete Your Purchase</h2>
              <p className="text-gray-600 mb-4 text-sm">You're about to buy: <span className="font-semibold">{item.name}</span>.</p>
            </div>
            
            <div className="my-4 border-t border-b border-gray-200 py-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Please pay</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600">via UPI (PhonePe, GPay, etc.) to:</p>
              <div className="my-2 p-2 bg-gray-100 rounded-md inline-block">
                <p className="text-lg font-mono font-bold text-gray-800 tracking-wider">{PAYMENT_PHONE_NUMBER}</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 mt-2">Your item will be shipped after payment confirmation.</p>
            </div>
          </>

        <div className="mt-6 text-center">
          <button 
            onClick={onClose}
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors duration-200 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;