import axios from 'axios';

const API_URL = 'http://localhost:8000/designer/';

// POST request to upload a design
export const uploadDesign = (enquiryId, file) => {
  const formData = new FormData();
  formData.append('design_file', file);

  return axios.post(`${API_URL}${enquiryId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// GET request to fetch a design by enquiry ID
export const getDesignByEnquiryId = (enquiryId) => {
  return axios.get(`${API_URL}${enquiryId}`);
};

// Optional: GET request to fetch all designs
export const getAllDesigns = () => {
  return axios.get(API_URL);
};