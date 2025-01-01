import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with actual API URL

export const fetchCompanies = async () => {
  const response = await axios.get(`${API_BASE_URL}/companies`);
  return response.data;
};

export const saveCompany = async (company) => {
  const response = await axios.post(`${API_BASE_URL}/companies`, company);
  return response.data;
};