import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.ZONKY_URI,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'zonky-funky-rating/0.1.0 ("https://github.com/DarkEye123/zonky-funky-rating")',
  },
});

export default axiosClient;
