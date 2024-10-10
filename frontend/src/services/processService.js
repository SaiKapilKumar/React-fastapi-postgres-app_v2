// frontend/src/services/processService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/process/';

export const getProcessTask = (enquiryId) => {
  return axios.get(`${API_URL}${enquiryId}`);
};

export const updateProcessTask = (taskId, data) => {
  return axios.put(`${API_URL}${taskId}`, data);
};