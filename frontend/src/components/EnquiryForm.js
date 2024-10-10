import React, { useState } from 'react';

function EnquiryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_code: '',
    date: '',
    required_material: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="customer_name"
        placeholder="Customer Name"
        value={formData.customer_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="customer_code"
        placeholder="Customer Code"
        value={formData.customer_code}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="required_material"
        placeholder="Required Material"
        value={formData.required_material}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Enquiry</button>
    </form>
  );
}

export default EnquiryForm;