import React, { useState } from 'react';
import '../styles/OrderConfirmation.css';  // Import the same CSS for consistency

function OrderConfirmation({ onSubmit }) {
  const [poNumber, setPoNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (poNumber) {
      onSubmit(poNumber);
    } else {
      alert('Please enter a PO Number.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Confirmation</h2>
      <input
        type="text"
        placeholder="Enter PO Number"
        value={poNumber}
        onChange={(e) => setPoNumber(e.target.value)}
        required
      />
      <button type="submit">Confirm Order</button>
    </form>
  );
}

export default OrderConfirmation;