import React, { useState } from 'react';
import { createRawMaterial } from '../services/rawMaterialService';

function AddRawMaterial() {
  const [formData, setFormData] = useState({
    enquiry_id: '',
    material_name: '',
    material_available: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRawMaterial(formData)
      .then(() => {
        alert('Raw material added successfully!');
        setFormData({
          enquiry_id: '',
          material_name: '',
          material_available: '',
        });
      })
      .catch((error) => {
        console.error('Error adding raw material:', error);
        alert('Failed to add raw material.');
      });
  };

  return (
    <div className="page-container">
      <div className="glass-card">
        <h2>Add Raw Material</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="enquiry_id"
            placeholder="Enquiry ID"
            value={formData.enquiry_id}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="material_name"
            placeholder="Material Name"
            value={formData.material_name}
            onChange={handleChange}
            required
          />
          <select
            name="material_available"
            value={formData.material_available}
            onChange={handleChange}
            required
          >
            <option value="">Is Material Available?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button type="submit">Add Material</button>
        </form>
      </div>
    </div>
  );
}

export default AddRawMaterial;