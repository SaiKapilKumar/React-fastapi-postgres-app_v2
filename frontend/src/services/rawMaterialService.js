import axios from 'axios';

const API_URL = 'http://localhost:8000/raw-materials/';

// Function to check raw materials by enquiry ID (GET)
export const checkRawMaterials = (enquiryId) => {
  return axios.get(`${API_URL}${enquiryId}`);
};

// Function to assign raw material to process (POST)
export const assignToProcess = (enquiryId) => {
  const data = {
    enquiry_id: parseInt(enquiryId),
    material_available: 'Yes',
  };

  return axios.post(API_URL, data);
};

// Function to create a new raw material (POST)
export const createRawMaterial = (rawMaterialData) => {
  return axios.post(API_URL, rawMaterialData);
};

// Function to update an existing raw material (PUT)
export const updateRawMaterial = (rawMaterialId, materialAvailable) => {
  const data = {
    material_available: materialAvailable  // Ensure correct data format
  };

  return axios.put(`${API_URL}${rawMaterialId}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};