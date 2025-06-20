import axios from 'axios';

const api = axios.create({
  baseURL: 'https://event-flow.shop',
});

api.interceptors.request.use(
  (config) => {
    // Можно хранить токен в localStorage или sessionStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api; 