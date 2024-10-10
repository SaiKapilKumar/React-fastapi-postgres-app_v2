import React, { useState } from 'react';
import RawMaterialsCheck from '../components/RawMaterialsCheck';
import { checkRawMaterials, assignToProcess, createRawMaterial, updateRawMaterial } from '../services/rawMaterialService';

function RawMaterialsPage() {
  const [materialAvailable, setMaterialAvailable] = useState(null);
  const [formData, setFormData] = useState({
    enquiry_id: '',
    material_available: '',
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Check Raw Material Availability
  const handleCheck = () => {
    checkRawMaterials(formData.enquiry_id)
      .then((response) => {
        setMaterialAvailable(response.data.material_available === 'Yes');
      })
      .catch((error) => {
        console.error('Error checking raw materials:', error);
        alert('Failed to check raw materials.');
      });
  };

  // Assign Raw Material to Process
  const handleAssign = () => {
    assignToProcess(formData.enquiry_id)
      .then(() => {
        alert('Assigned to process successfully!');
      })
      .catch((error) => {
        console.error('Error assigning to process:', error);
        alert('Failed to assign to process.');
      });
  };

  // Handle Adding or Updating Raw Material
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      updateRawMaterial(formData.enquiry_id, formData.material_available)
        .then(() => {
          alert('Raw material updated successfully!');
          resetForm();
        })
        .catch((error) => {
          console.error('Error updating raw material:', error);
          alert('Failed to update raw material.');
        });
    } else {
      createRawMaterial(formData)
        .then(() => {
          alert('Raw material added successfully!');
          resetForm();
        })
        .catch((error) => {
          console.error('Error adding raw material:', error);
          alert('Failed to add raw material.');
        });
    }
  };

  const resetForm = () => {
    setFormData({
      enquiry_id: '',
      material_available: '',
    });
  };

  return (
    <div className="page-container">
      <div className="glass-card">
        <h2>Raw Materials Check</h2>
        <RawMaterialsCheck
          onCheck={handleCheck}
          materialAvailable={materialAvailable}
          onAssign={handleAssign}
        />

        <h2>{isUpdateMode ? 'Update Raw Material' : 'Add Raw Material'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="enquiry_id"
            placeholder="Enquiry ID"
            value={formData.enquiry_id}
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
          <button type="submit">{isUpdateMode ? 'Update Material' : 'Add Material'}</button>
        </form>
        <button onClick={() => setIsUpdateMode(!isUpdateMode)}>
          {isUpdateMode ? 'Switch to Add Mode' : 'Switch to Update Mode'}
        </button>
      </div>
    </div>
  );
}

export default RawMaterialsPage;