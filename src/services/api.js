import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your actual API URL

export const api = axios.create({
  baseURL: API_URL,
});

export const getInternships = () => api.get('/internships');
export const getJobs = () => api.get('/jobs');
// Add more API calls as needed