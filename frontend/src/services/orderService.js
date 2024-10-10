// frontend/src/services/orderService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/orders/';

export const confirmOrder = (enquiryId, poNumber) => {
  const data = {
    enquiry_id: parseInt(enquiryId),
    po_number: poNumber,
  };

  return axios.post(API_URL, data);
};