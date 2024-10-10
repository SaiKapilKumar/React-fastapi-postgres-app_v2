// frontend/src/services/enquiryService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/enquiries/';

export const createEnquiry = (enquiryData) => {
  return axios.post(API_URL, enquiryData);
};

export const getEnquiry = (enquiryId) => {
  return axios.get(`${API_URL}${enquiryId}`);
};

export const getEnquiries = () => {
  return axios.get(API_URL);
};