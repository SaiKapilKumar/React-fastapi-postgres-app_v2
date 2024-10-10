import React from 'react';
import OrderConfirmation from '../components/OrderConfirmation';
import { confirmOrder } from '../services/orderService';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/OrderConfirmation.css';  // Import the CSS for styling

function OrderConfirmationPage() {
  const { enquiryId } = useParams();
  const navigate = useNavigate();  // Renamed history to navigate

  const handleOrderConfirmation = (poNumber) => {
    confirmOrder(enquiryId, poNumber)
      .then((response) => {
        alert('Order confirmed successfully!');
        navigate(`/raw-materials/${enquiryId}`);
      })
      .catch((error) => {
        console.error('Error confirming order:', error);
        alert('Failed to confirm order.');
      });
  };

  return (
    <div className="order-confirmation-container">
      <div className="glass-order-confirmation-card">
        <OrderConfirmation onSubmit={handleOrderConfirmation} />
      </div>
    </div>
  );
}

export default OrderConfirmationPage;