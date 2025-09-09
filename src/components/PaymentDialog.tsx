import React from 'react';
import ReactDOM from 'react-dom';

interface PaymentDialogProps {
  open: boolean;
  onAgree: () => void;
  onCancel: () => void;
  price?: string;
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({ open, onAgree, onCancel, price }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-4">Payment Required</h2>
        <p className="mb-6">
          This tile requires payment to install.
          <br />
          {price && <span className="font-semibold text-blue-600">Price: {price}</span>}
          <br />
          Do you agree to pay this amount?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            onClick={onAgree}
          >
            Yes, I agree
          </button>
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default PaymentDialog;
